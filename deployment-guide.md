
# Guía de Despliegue: Retina Vista Mérida en VPS

Esta guía explica cómo desplegar la aplicación React "Retina Vista Mérida" en un servidor VPS (Virtual Private Server) Linux.

## Requisitos Previos

- Un servidor VPS con Linux (Ubuntu/Debian recomendado)
- Acceso SSH al servidor
- Un nombre de dominio apuntando al servidor VPS
- Node.js (v16 o superior) y npm instalados en el VPS
- Conocimientos básicos de línea de comandos Linux

## Paso 1: Preparar el Entorno del Servidor

1. Actualizar el sistema:
```bash
sudo apt update && sudo apt upgrade -y
```

2. Instalar Node.js y npm (si no están instalados):
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

3. Verificar la instalación:
```bash
node -v
npm -v
```

4. Instalar PM2 para gestionar el proceso de la aplicación:
```bash
sudo npm install -g pm2
```

## Paso 2: Configurar Nginx como Servidor Web

1. Instalar Nginx:
```bash
sudo apt install nginx -y
```

2. Iniciar Nginx y habilitarlo para que se inicie con el sistema:
```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

3. Configurar el firewall (si está activado):
```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
```

## Paso 3: Clonar y Construir la Aplicación

1. Crear un directorio para la aplicación:
```bash
mkdir -p /var/www/retina-vista-merida
```

2. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/retina-vista-merida.git /var/www/retina-vista-merida
```

3. Instalar dependencias y construir la aplicación:
```bash
cd /var/www/retina-vista-merida
npm install
npm run build
```

## Paso 4: Configurar Nginx para Servir la Aplicación

1. Crear un archivo de configuración para el sitio:
```bash
sudo nano /etc/nginx/sites-available/retina-vista-merida
```

2. Añadir la siguiente configuración:
```nginx
server {
    listen 80;
    server_name tudominio.com www.tudominio.com;
    root /var/www/retina-vista-merida/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Configuración de caché para archivos estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000";
    }

    # Configuración para evitar el acceso a archivos .htaccess
    location ~ /\.ht {
        deny all;
    }
}
```

3. Crear un enlace simbólico para habilitar el sitio:
```bash
sudo ln -s /etc/nginx/sites-available/retina-vista-merida /etc/nginx/sites-enabled/
```

4. Verificar la configuración de Nginx:
```bash
sudo nginx -t
```

5. Reiniciar Nginx:
```bash
sudo systemctl restart nginx
```

## Paso 5: Configurar HTTPS con Let's Encrypt

1. Instalar Certbot:
```bash
sudo apt install certbot python3-certbot-nginx -y
```

2. Obtener un certificado SSL:
```bash
sudo certbot --nginx -d tudominio.com -d www.tudominio.com
```

3. Seguir las instrucciones en pantalla y configurar la renovación automática:
```bash
sudo certbot renew --dry-run
```

## Paso 6: Automatizar Despliegues (Opcional)

1. Crear un script de despliegue:
```bash
nano /var/www/retina-vista-merida/deploy.sh
```

2. Añadir el siguiente contenido:
```bash
#!/bin/bash
cd /var/www/retina-vista-merida
git pull
npm install
npm run build
pm2 reload retina-vista-merida || pm2 start npm --name "retina-vista-merida" -- start
```

3. Hacer el script ejecutable:
```bash
chmod +x /var/www/retina-vista-merida/deploy.sh
```

## Paso 7: Monitorización y Mantenimiento

1. Configurar PM2 para monitorizar la aplicación:
```bash
cd /var/www/retina-vista-merida
pm2 start npm --name "retina-vista-merida" -- start
pm2 save
pm2 startup
```

2. Verificar el estado de la aplicación:
```bash
pm2 status
```

3. Configurar registros de Nginx:
```bash
sudo nano /etc/nginx/nginx.conf
```
Y asegurarse de que la sección `http` tenga:
```
access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
```

## Solución de problemas comunes

1. **Error 502 Bad Gateway**:
   - Verificar que la aplicación esté en ejecución: `pm2 status`
   - Revisar los logs de Nginx: `sudo tail -f /var/log/nginx/error.log`

2. **Problemas de permisos**:
   - Asegurar que Nginx tenga permisos para acceder a los archivos: 
   ```bash
   sudo chown -R www-data:www-data /var/www/retina-vista-merida/dist
   ```

3. **Certificado SSL expirado**:
   - Renovar manualmente: `sudo certbot renew`

4. **Cambios no reflejados después de la actualización**:
   - Limpiar la caché del navegador
   - Verificar que la construcción se haya completado correctamente

## Mantenimiento Continuo

1. Actualizar el sistema periódicamente:
```bash
sudo apt update && sudo apt upgrade -y
```

2. Monitorizar el rendimiento:
```bash
pm2 monit
```

3. Hacer copias de seguridad regularmente:
```bash
tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/retina-vista-merida
```
