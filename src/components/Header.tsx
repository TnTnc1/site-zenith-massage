'use client';
import Link from 'next/link';

const Header = () => {
  const whatsappNumber = "687930098";
  const prefilledMessage = encodeURIComponent("Bonjour, je souhaiterais prendre un rendez-vous pour un massage.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-serif font-bold text-white drop-shadow-lg">
            Zenith Massage
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="#services" className="text-white font-medium hover:text-zenith-primary transition duration-300">Les Massages</Link>
          <Link href="#about" className="text-white font-medium hover:text-zenith-primary transition duration-300">À Propos</Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zenith-primary text-white px-8 py-3 rounded-lg shadow-md hover:bg-zenith-primary-dark transition duration-300"
          >
            Réserver
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
