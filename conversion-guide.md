
# Guía de Conversión de React a WordPress Theme

## Estructura de Archivos del Tema

Crear la siguiente estructura de archivos para el tema WordPress:

```
dr-santander-theme/
├── style.css                  # Información del tema y estilos generales
├── index.php                  # Archivo principal
├── header.php                 # Encabezado del sitio
├── footer.php                 # Pie de página
├── front-page.php             # Página de inicio
├── page.php                   # Plantilla para páginas genéricas
├── page-servicios.php         # Plantilla para páginas de servicios
├── single.php                 # Plantilla para entradas individuales
├── 404.php                    # Página de error 404
├── functions.php              # Funciones y configuraciones
├── screenshot.png             # Imagen de vista previa del tema (880x660px)
├── assets/
│   ├── css/                   # Archivos CSS compilados
│   ├── js/                    # Archivos JavaScript
│   └── images/                # Imágenes estáticas del tema
├── inc/                       # Funciones adicionales
│   ├── customizer.php         # Opciones del personalizador
│   └── template-functions.php # Funciones de plantilla
└── template-parts/            # Partes reutilizables
    ├── content-page.php       # Contenido de página
    ├── content-services.php   # Contenido de servicios
    ├── hero-section.php       # Componente Hero Section
    ├── doctor-info-banner.php # Banner de información del doctor
    └── info-sections.php      # Secciones informativas
```

## Conversión de Componentes

### 1. Navbar.tsx a header.php

```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center">
                <?php 
                    $custom_logo_id = get_theme_mod('custom_logo');
                    $logo = wp_get_attachment_image_src($custom_logo_id, 'full');
                    
                    if (has_custom_logo()) {
                        echo '<img src="' . esc_url($logo[0]) . '" alt="' . get_bloginfo('name') . '" class="h-12 w-auto">';
                    } else {
                        echo '<span class="text-xl font-bold">' . get_bloginfo('name') . '</span>';
                    }
                ?>
            </a>
            
            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-1">
                <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container' => '',
                        'menu_class' => 'flex',
                        'fallback_cb' => false,
                        'items_wrap' => '%3$s',
                        'walker' => new Walker_Nav_Menu_Tailwind()
                    ));
                ?>
            </div>
            
            <div class="hidden md:flex items-center space-x-4">
                <a href="<?php echo esc_url(home_url('/agendar-cita')); ?>" class="bg-clinic-blue text-white px-6 py-2 rounded-md hover:bg-clinic-dark transition duration-300">
                    Agendar Cita
                </a>
            </div>
            
            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button id="mobile-menu-button" class="mobile-menu-button p-2 focus:outline-none">
                    <svg class="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden hidden">
        <div class="bg-white px-4 py-3 shadow-inner">
            <?php
                wp_nav_menu(array(
                    'theme_location' => 'mobile',
                    'container' => '',
                    'menu_class' => 'flex flex-col',
                    'fallback_cb' => false,
                    'items_wrap' => '%3$s',
                    'walker' => new Walker_Nav_Menu_Mobile()
                ));
            ?>
            <div class="mt-3 px-3">
                <a href="<?php echo esc_url(home_url('/agendar-cita')); ?>" class="block w-full text-center bg-clinic-blue text-white px-6 py-2 rounded-md hover:bg-clinic-dark transition duration-300">
                    Agendar Cita
                </a>
            </div>
        </div>
    </div>
</nav>
```

### 2. Footer.tsx a footer.php

```php
<footer class="bg-gray-900 text-gray-300 pt-12 pb-8 py-[21px] px-[6px]">
    <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div class="mb-6">
                <h2 class="text-xl font-semibold text-white mb-4">
                    <?php echo get_theme_mod('footer_title', 'Oftalmología Especializada<br>Dr. Santander'); ?>
                </h2>
                <p class="text-sm text-gray-400 mb-4">
                    <?php echo get_theme_mod('footer_description', 'El Dr. Juan Pablo Rivera Santander es Retinólogo y especialista en Córnea, Segmento Anterior y Cirugía Refractiva.'); ?>
                </p>
                <div class="flex space-x-4 mt-4">
                    <?php if(get_theme_mod('facebook_url')): ?>
                    <a href="<?php echo esc_url(get_theme_mod('facebook_url')); ?>" target="_blank" rel="noopener noreferrer" class="text-white hover:text-clinic-teal transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                    </a>
                    <?php endif; ?>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-md font-semibold text-white mb-4"><?php echo __('Servicios', 'dr-santander'); ?></h3>
                <?php
                    wp_nav_menu(array(
                        'theme_location' => 'services',
                        'container' => '',
                        'menu_class' => 'space-y-2 text-sm',
                        'fallback_cb' => false,
                    ));
                ?>
            </div>

            <div class="mb-6">
                <h3 class="text-md font-semibold text-white mb-4"><?php echo __('Enlaces Rápidos', 'dr-santander'); ?></h3>
                <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'container' => '',
                        'menu_class' => 'space-y-2 text-sm',
                        'fallback_cb' => false,
                    ));
                ?>
            </div>

            <div class="mb-6">
                <h3 class="text-md font-semibold text-white mb-4"><?php echo __('Información de Contacto', 'dr-santander'); ?></h3>
                <div class="space-y-3 text-sm">
                    <p class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4 flex-shrink-0 text-clinic-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span><?php echo get_theme_mod('phone_number', '+52 999 739 8637'); ?></span>
                    </p>
                    <p class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4 flex-shrink-0 text-clinic-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span class="break-all"><?php echo get_theme_mod('email', 'info@oftalmologoespecializadosantander.com'); ?></span>
                    </p>
                    <p class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4 flex-shrink-0 text-clinic-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span><?php echo get_theme_mod('address', 'Calle 23 #311, X 30 y Calle 36 Diagonal (Av. García Lavin), Col. Montebello, C.P. 97113, Mérida, Yuc.'); ?></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>

<div class="bg-gray-950 py-3">
    <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div>
                <p><?php echo get_theme_mod('footer_credentials', 'CONSULTA ONLINE • Permiso de Publicidad: 203301202A0198'); ?></p>
            </div>
            <p class="mt-2 md:mt-0">
                © <?php echo date('Y'); ?> <?php echo get_theme_mod('copyright_text', 'Todos los Derechos Reservados • Oftalmólogo Dr. Santander'); ?>
            </p>
        </div>
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
```

### 3. HeroSection.tsx a template-parts/hero-section.php

```php
<?php
/**
 * Template part for displaying the hero section
 *
 * @param string $background_image URL de la imagen de fondo
 * @param string $title Título principal
 * @param string $subtitle Subtítulo descriptivo
 * @param bool $credentials Si se muestran las credenciales del doctor (opcional)
 */

$background_image = get_field('hero_background_image') ?: '';
$title = get_field('hero_title') ?: get_the_title();
$subtitle = get_field('hero_subtitle') ?: '';
$credentials = get_field('show_credentials') ?: false;
?>

<div class="hero-section relative flex items-center justify-center text-white" 
    style="background-image: url('<?php echo esc_url($background_image); ?>'); 
           background-position: center;
           background-size: cover; 
           background-repeat: no-repeat">
    
    <div class="absolute inset-0 bg-black/40"></div>
    
    <div class="content-overlay container relative z-10 mx-auto text-center py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 lg:px-20 bg-[#091e1e]/40">
        <h1 class="mb-4 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto animate-slide-in"><?php echo esc_html($title); ?></h1>
        <div class="max-w-3xl mx-auto">
            <p class="text-base sm:text-lg md:text-xl mb-8 animate-slide-in"><?php echo esc_html($subtitle); ?></p>
            <?php if($credentials): ?>
            <div class="mt-4 bg-black/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg inline-block animate-fade-in">
                <p class="text-xs sm:text-sm md:text-base">
                    Dr. Juan Pablo Rivera Santander | Alta Especialidad en Retina, Córnea, Segmento Anterior y Cirugía Refractiva.
                </p>
                <p class="text-xs sm:text-sm mt-2">
                    Ced. Profesional: 11513357 | Ced. Especialidad: 11747970 | Permiso de Publicidad: 203301202A0198
                </p>
            </div>
            <?php endif; ?>
        </div>
    </div>
</div>
```

### 4. DoctorInfoBanner.tsx a template-parts/doctor-info-banner.php

```php
<div class="bg-clinic-dark text-white py-[4px]">
    <div class="container mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-center md:text-left mb-4 md:mb-0 max-w-lg py-2 md:py-0 px-0 my-[13px] text-xs sm:text-sm">
                <?php echo get_theme_mod('doctor_info_banner_text', 'En el consultorio del Dr. Juan Pablo Rivera Santander en Mérida, Yucatán, te recibirá un oftalmólogo comprometido con el cuidado de tu bienestar.'); ?>
            </p>
            <div class="flex flex-col space-y-2">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-clinic-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span class="text-xs sm:text-sm"><?php echo get_theme_mod('phone_number', '99 9739 8637'); ?></span>
                </div>
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-clinic-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span class="text-xs sm:text-sm"><?php echo get_theme_mod('address_short', 'Calle 23 #311, Col. Montebello, Mérida, Yuc.'); ?></span>
                </div>
            </div>
        </div>
    </div>
</div>
```

### 5. InfoSections.tsx a template-parts/info-sections.php

```php
<section class="text-white bg-[#068ad0] py-[12px]">
    <div class="container mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0">
                <h3 class="font-bold mb-2 text-base sm:text-lg"><?php echo get_theme_mod('consultation_title', '¿Necesitas una Consulta?'); ?></h3>
                <p class="max-w-2xl text-xs sm:text-sm">
                    <?php echo get_theme_mod('consultation_text', 'Agenda una cita con el Dr. Juan Pablo Rivera Santander y recibe la mejor atención oftalmológica especializada en Mérida.'); ?>
                </p>
            </div>
            <div>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('agendar-cita'))); ?>" class="inline-block text-sm bg-white text-clinic-blue hover:bg-gray-100 px-4 py-2 rounded-md transition-colors">
                    <?php echo get_theme_mod('consultation_button_text', 'Agendar Cita'); ?>
                </a>
            </div>
        </div>
    </div>
</section>
```

### 6. functions.php - Registro de características y soporte de tema

```php
<?php
/**
 * Dr. Santander Theme functions and definitions
 */

if (!defined('_S_VERSION')) {
    // Replace the version number as needed
    define('_S_VERSION', '1.0.0');
}

/**
 * Setup theme
 */
function dr_santander_setup() {
    // Load text domain for translation
    load_theme_textdomain('dr-santander', get_template_directory() . '/languages');
    
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');
    
    // Let WordPress manage the document title
    add_theme_support('title-tag');
    
    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');
    
    // Custom logo support
    add_theme_support('custom-logo', array(
        'height'      => 120,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true
    ));
    
    // Register nav menus
    register_nav_menus(array(
        'primary' => esc_html__('Menú Principal', 'dr-santander'),
        'mobile' => esc_html__('Menú Móvil', 'dr-santander'),
        'services' => esc_html__('Menú de Servicios', 'dr-santander'),
        'footer' => esc_html__('Menú del Pie de Página', 'dr-santander'),
    ));
    
    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
}
add_action('after_setup_theme', 'dr_santander_setup');

/**
 * Enqueue scripts and styles
 */
function dr_santander_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('dr-santander-style', get_stylesheet_uri(), array(), _S_VERSION);
    
    // Enqueue Tailwind CSS
    wp_enqueue_style('tailwind-output', get_template_directory_uri() . '/assets/css/tailwind-output.css', array(), _S_VERSION);
    
    // Enqueue theme scripts
    wp_enqueue_script('dr-santander-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), _S_VERSION, true);
    
    // Conditional scripts
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'dr_santander_scripts');

/**
 * Register custom Tailwind menu walker
 */
class Walker_Nav_Menu_Tailwind extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        
        // Default menu item classes
        $class_names = 'px-3 py-2 text-gray-700 hover:text-clinic-blue transition duration-300';
        
        // Add active class
        if (in_array('current-menu-item', $classes)) {
            $class_names .= ' text-clinic-blue';
        }
        
        $output .= '<a href="' . esc_url($item->url) . '" class="' . esc_attr($class_names) . '">';
        $output .= esc_html($item->title);
        $output .= '</a>';
    }
}

/**
 * Register custom mobile menu walker
 */
class Walker_Nav_Menu_Mobile extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        
        // Default menu item classes
        $class_names = 'block px-3 py-2 text-gray-700 hover:text-clinic-blue rounded transition duration-300';
        
        // Add active class
        if (in_array('current-menu-item', $classes)) {
            $class_names .= ' text-clinic-blue';
        }
        
        $output .= '<a href="' . esc_url($item->url) . '" class="' . esc_attr($class_names) . '">';
        $output .= esc_html($item->title);
        $output .= '</a>';
    }
}

/**
 * Register custom post types
 */
function dr_santander_register_post_types() {
    // Registrar Custom Post Type para Servicios
    $labels = array(
        'name'                  => _x('Servicios', 'Post Type General Name', 'dr-santander'),
        'singular_name'         => _x('Servicio', 'Post Type Singular Name', 'dr-santander'),
        'menu_name'             => __('Servicios', 'dr-santander'),
        'all_items'             => __('Todos los Servicios', 'dr-santander'),
        'add_new_item'          => __('Añadir Nuevo Servicio', 'dr-santander'),
        'add_new'               => __('Añadir Nuevo', 'dr-santander'),
        'new_item'              => __('Nuevo Servicio', 'dr-santander'),
        'edit_item'             => __('Editar Servicio', 'dr-santander'),
        'update_item'           => __('Actualizar Servicio', 'dr-santander'),
        'view_item'             => __('Ver Servicio', 'dr-santander'),
        'search_items'          => __('Buscar Servicio', 'dr-santander'),
    );
    $args = array(
        'label'                 => __('Servicio', 'dr-santander'),
        'description'           => __('Servicios oftalmológicos', 'dr-santander'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'excerpt'),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-visibility',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => 'servicios',
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
        'show_in_rest'          => true,
    );
    register_post_type('servicio', $args);
}
add_action('init', 'dr_santander_register_post_types');

/**
 * Customizer settings
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Template Functions
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Register ACF fields if plugin exists
 */
if (class_exists('ACF')) {
    require get_template_directory() . '/inc/acf-fields.php';
}

/**
 * Add custom colors to Tailwind config
 */
function dr_santander_tailwind_colors() {
    return array(
        'clinic-blue' => '#068ad0',
        'clinic-teal' => '#3bd4c2',
        'clinic-dark' => '#091e1e',
    );
}

/**
 * Add mobile menu toggle JavaScript
 */
function dr_santander_footer_scripts() {
    ?>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (menuButton && mobileMenu) {
                menuButton.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                });
            }
        });
    </script>
    <?php
}
add_action('wp_footer', 'dr_santander_footer_scripts');
```

### 7. style.css - Información del tema

```css
/*
Theme Name: Oftalmólogo Dr. Santander
Theme URI: https://oftalmologoespecializadosantander.com/
Author: Tu Nombre
Author URI: https://tudominio.com/
Description: Tema personalizado para el sitio web del Dr. Juan Pablo Rivera Santander, oftalmólogo especializado en Retina, Córnea, Segmento Anterior y Cirugía Refractiva.
Version: 1.0.0
Requires at least: 5.0
Tested up to: 6.1
Requires PHP: 7.4
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: dr-santander
Tags: responsive, medical, clinic, tailwind
*/
```

### 8. Configuración de Tailwind CSS (tailwind.config.js)

```js
module.exports = {
  content: [
    './*.php',
    './template-parts/*.php',
    './inc/*.php',
  ],
  theme: {
    extend: {
      colors: {
        'clinic-blue': '#068ad0',
        'clinic-teal': '#3bd4c2',
        'clinic-dark': '#091e1e',
      },
      animation: {
        'slide-in': 'slideIn 0.6s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

### 9. Plantilla para páginas de servicios (page-servicios.php)

```php
<?php
/**
 * Template Name: Página de Servicio
 * 
 * Plantilla para mostrar páginas de servicios individuales
 */

get_header();
?>

<main id="primary" class="site-main">
    <?php 
    // Hero Section
    get_template_part('template-parts/hero-section');
    ?>

    <section class="py-16">
        <div class="container mx-auto px-6">
            <div class="flex flex-col lg:flex-row items-start">
                <div class="lg:w-2/3 pr-0 lg:pr-12 mb-10 lg:mb-0">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6"><?php the_title(); ?></h2>
                    
                    <div class="prose max-w-none">
                        <?php the_content(); ?>
                    </div>
                    
                    <?php if(have_rows('service_features')): ?>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <?php while(have_rows('service_features')): the_row(); ?>
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold mb-4 text-clinic-blue"><?php echo get_sub_field('feature_title'); ?></h3>
                                <?php if(have_rows('feature_items')): ?>
                                <ul class="space-y-2">
                                    <?php while(have_rows('feature_items')): the_row(); ?>
                                    <li class="flex items-center">
                                        <span class="w-2 h-2 bg-clinic-blue rounded-full mr-2"></span>
                                        <?php echo get_sub_field('item_text'); ?>
                                    </li>
                                    <?php endwhile; ?>
                                </ul>
                                <?php endif; ?>
                            </div>
                        <?php endwhile; ?>
                    </div>
                    <?php endif; ?>
                    
                    <?php if(get_field('cta_text')): ?>
                    <div class="mt-8">
                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('contacto'))); ?>" class="bg-clinic-blue text-white px-8 py-3 rounded-md hover:bg-clinic-teal transition duration-300 inline-block">
                            <?php echo get_field('cta_text'); ?>
                        </a>
                    </div>
                    <?php endif; ?>
                </div>
                
                <div class="lg:w-1/3">
                    <?php get_template_part('template-parts/services-menu'); ?>
                </div>
            </div>
        </div>
    </section>
    
    <?php get_template_part('template-parts/doctor-info-banner'); ?>
    <?php get_template_part('template-parts/info-sections'); ?>

</main>

<?php
get_footer();
```

## Conversión de Hooks y Funciones JavaScript

### 1. useIsMobile.ts a funciones JavaScript

```php
// En inc/template-functions.php
function dr_santander_is_mobile() {
    return wp_is_mobile();
}

// O usar JavaScript en el frontend:
<script>
function isMobile() {
    return window.innerWidth < 768;
}

// Escuchar cambios en el tamaño de la ventana
window.addEventListener('resize', function() {
    // Actualizar elementos dependientes del tamaño
    const isMobileView = isMobile();
    // Aplicar cambios basados en isMobileView
});
</script>
```

## Guía de Conversión de Elementos Dinámicos

1. **Páginas a Posts/CPT:**
   - Convertir cada servicio a un Custom Post Type "servicio"
   - Usar ACF para campos personalizados como imágenes destacadas, características, etc.

2. **Menú de Navegación:**
   - Crear menús en WordPress Admin y asignarlos a las ubicaciones registradas
   - Personalizar la apariencia con los Walker personalizados

3. **Imágenes:**
   - Subir todas las imágenes a la Biblioteca de Medios de WordPress
   - Usar `wp_get_attachment_image()` o `the_post_thumbnail()` para mostrarlas

4. **Enlaces:**
   - Reemplazar enlaces directos por funciones como `get_permalink()` o `home_url()`

5. **Configuración Personalizada:**
   - Usar el Customizer de WordPress para opciones de tema personalizables
   - Implementar ACF para campos avanzados y flexibles

## Integración de Tailwind CSS

1. **Configuración Inicial:**
   - Instalar Node.js y npm
   - Configurar package.json con dependencias necesarias

2. **Proceso de Build:**
   ```bash
   # Instalar dependencias
   npm install -D tailwindcss postcss autoprefixer @tailwindcss/typography
   
   # Inicializar Tailwind CSS
   npx tailwindcss init -p
   
   # Configurar tailwind.config.js según se mostró arriba
   
   # Crear un archivo CSS fuente
   echo "@tailwind base; @tailwind components; @tailwind utilities;" > src/tailwind.css
   
   # Compilar CSS
   npx tailwindcss -i src/tailwind.css -o assets/css/tailwind-output.css --minify
   ```

3. **Script de Compilación para Producción:**
   ```bash
   # Compilar para producción
   NODE_ENV=production npx tailwindcss -i src/tailwind.css -o assets/css/tailwind-output.css --minify
   ```

## Checklist Final de Conversión

1. **Comprobar estructura de archivos**
   - [ ] Todos los archivos PHP necesarios están creados
   - [ ] Las carpetas de assets están organizadas correctamente
   - [ ] Los archivos de CSS y JS están compilados

2. **Verificar funcionalidad**
   - [ ] Menús de navegación funcionan correctamente
   - [ ] Las páginas de servicios muestran contenido adecuadamente
   - [ ] Los formularios funcionan (contacto, citas)
   - [ ] Las imágenes se cargan correctamente

3. **Optimización para móviles**
   - [ ] El diseño es responsivo
   - [ ] El menú móvil funciona correctamente
   - [ ] Las imágenes se ajustan a diferentes tamaños de pantalla

4. **SEO y Rendimiento**
   - [ ] Títulos y meta descripciones configurados
   - [ ] Imágenes optimizadas
   - [ ] Código CSS y JS minificado
   - [ ] Caché configurado

5. **Funcionalidades Adicionales**
   - [ ] Sistema de citas integrado (Doctoralia)
   - [ ] Mapas y ubicaciones
   - [ ] Enlaces a redes sociales
   - [ ] Formulario de contacto

## Notas Adicionales

- La transición de componentes React a WordPress puede requerir ajustes adicionales según la complejidad.
- Para mantener los efectos de animación, asegúrate de que los estilos CSS estén correctamente importados.
- Considera utilizar plugins como Advanced Custom Fields (ACF) para gestionar campos personalizados.
- Para la integración de Doctoralia, utiliza widgets o iframes como en la versión actual.
