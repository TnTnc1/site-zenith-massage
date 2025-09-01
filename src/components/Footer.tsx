import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "687930098";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p className="font-serif text-2xl mb-4">Zenith Massage</p>
        <p className="mb-4">Massage Ayurvédique à domicile en Nouvelle-Calédonie</p>
        <p className="mb-4">
          Contact & Réservation :{' '}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-zenith-primary hover:underline">
            (+687) 93.00.98
          </a>
        </p>
        <p className="text-sm text-gray-400 mt-8">
          &copy; {currentYear} Zenith Massage. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
