
import { useState } from 'react';
import { Whatsapp } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, buen día quisiera más información sobre…");
    window.open(`https://wa.me/529997398637?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        {isHovered && (
          <div className="absolute bottom-16 left-0 bg-white text-gray-800 p-3 rounded-lg shadow-lg text-sm w-48 animate-fade-in">
            ¡Chatea con nosotros!
          </div>
        )}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Chat por WhatsApp"
        >
          <Whatsapp className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
