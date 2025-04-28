
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-16">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-clinic-blue mb-6">404</h1>
        <p className="text-xl text-gray-600 mb-8">Página no encontrada</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido removida.
        </p>
        <Link to="/" className="bg-clinic-blue px-8 py-3 rounded-md text-white font-medium hover:bg-clinic-teal transition duration-300">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
