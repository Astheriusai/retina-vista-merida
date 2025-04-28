
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
}

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      {image && (
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-clinic-blue hover:text-clinic-teal transition duration-300"
        >
          Ver más
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
