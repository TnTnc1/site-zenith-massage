'use client';
import Image from 'next/image';

interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
  description?: string;
}

interface MassageCardProps {
    imageUrl: string; 
    service: Service;
}

const MassageCard = ({ service, imageUrl }: MassageCardProps) => {
    const whatsappNumber = "687930098";
    const prefilledMessage = encodeURIComponent(`Bonjour, je suis intéressé(e) par le "${service.name}".`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

    return (
      <div className="bg-white shadow-xl rounded-xl overflow-hidden transition duration-500 hover:shadow-2xl flex flex-col">
        <div className="relative h-64 w-full">
            <Image src={imageUrl} alt={service.name} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-serif mb-4">{service.name}</h3>
          <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
          <div className="flex justify-between items-center mb-8">
            <span className="text-sm font-medium text-gray-500">{service.duration} minutes</span>
            <span className="text-xl font-bold text-zenith-primary">{service.price.toLocaleString()} XPF</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-zenith-primary text-white text-center py-3 rounded-md hover:bg-zenith-primary-dark transition duration-300 mt-auto"
          >
            Choisir ce massage
          </a>
        </div>
      </div>
    );
};
export default MassageCard;
