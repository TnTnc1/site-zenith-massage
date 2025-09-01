import Image from 'next/image';

// Type simplifié pour les services
export interface Service {
    id: number;
    name: string;
    duration: number;
    price: number;
    description?: string;
}

interface MassageCardProps {
    service: Service;
    imageUrl: string;
}

const MassageCard = ({ service, imageUrl }: MassageCardProps) => {
    // Construction du lien WhatsApp spécifique
    const whatsappNumber = "687930098";
    const message = encodeURIComponent(`Bonjour, je suis intéressé(e) par le '${service.name}'.`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
      <div className="bg-white shadow-xl rounded-xl overflow-hidden transition duration-500 hover:shadow-2xl">
        <div className="relative h-64">
          <Image src={imageUrl} alt={service.name} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-serif mb-4">{service.name}</h3>
          <p className="text-gray-600 mb-6">{service.description}</p>
          <div className="flex justify-between items-center mb-8">
            <span className="text-sm font-medium text-gray-500">{service.duration} minutes</span>
            <span className="text-xl font-bold text-zenith-primary">{service.price.toLocaleString()} XPF</span>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full bg-zenith-primary text-white py-3 rounded-md hover:bg-zenith-primary-dark transition duration-300"
          >
            Choisir ce massage
          </a>
        </div>
      </div>
    );
  };
export default MassageCard;
