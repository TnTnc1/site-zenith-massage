import Link from 'next/link';

const Header = () => {
  // Lien WhatsApp général
  const whatsappNumber = "687930098";
  const message = encodeURIComponent("Bonjour, je souhaiterais prendre un rendez-vous pour un massage.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    // Le header est absolu pour se superposer à la vidéo Hero
    <header className="absolute top-0 left-0 w-full z-30">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-serif font-bold text-white drop-shadow-lg">
            Zenith Massage
        </Link>
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Les liens sont en blanc car ils sont initialement sur un fond sombre */}
          <Link href="#services" className="text-white font-medium hover:text-zenith-primary transition duration-300">Les Massages</Link>
          <Link href="#about" className="text-white font-medium hover:text-zenith-primary transition duration-300">À Propos</Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zenith-primary text-white px-6 py-3 md:px-8 rounded-lg shadow-md hover:bg-zenith-primary-dark transition duration-300"
          >
            Réserver
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
