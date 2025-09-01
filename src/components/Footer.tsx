const Footer = () => {
    const currentYear = new Date().getFullYear();
    const email = "contact.tnznc@gmail.com";
    const phone = "+687 93 00 98";

    return (
      <footer className="bg-zenith-text text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif mb-4">Zenith Massage</h3>
                <p className="text-gray-400">L'excellence du massage à domicile en Nouvelle-Calédonie.</p>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Contactez Anthony</h4>
              <div className="flex flex-col space-y-3">
                <a href={`mailto:${email}`} className="text-gray-300 hover:text-zenith-primary transition duration-300">
                    {email}
                </a>
                <a href="tel:+687930098" className="text-gray-300 hover:text-zenith-primary transition duration-300">
                    {phone} (WhatsApp disponible)
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
            <p>&copy; {currentYear} Zenith Massage. Tous droits réservés. | Mentions Légales</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
