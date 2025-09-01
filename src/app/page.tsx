import Image from 'next/image';
import MassageCard, { Service } from '@/components/MassageCard';

// Données des massages avec les nouvelles images
const massagesData: (Service & { imageUrl: string })[] = [
    { 
        id: 1, 
        name: "Massage Californien Relaxant", 
        duration: 60, 
        price: 9000, 
        description: "Un massage doux et enveloppant pour une relaxation profonde du corps et de l'esprit.", 
        imageUrl: "https://i.postimg.cc/Y2YcW1M1/Gemini-Generated-Image-wumxswwumxswwumx.png" 
    },
    { 
        id: 2, 
        name: "Deep Tissue & Récupération", 
        duration: 90, 
        price: 13000, 
        description: "Idéal pour soulager les tensions musculaires profondes et favoriser la récupération après l'effort.", 
        imageUrl: "https://i.postimg.cc/ZRsGxc0c/nb-gpt.png" 
    },
    { 
        id: 3, 
        name: "Soin Signature Zénith", 
        duration: 120, 
        price: 15000, 
        description: "L'expérience ultime combinant techniques ancestrales et huiles essentielles rares.", 
        imageUrl: "https://images.unsplash.com/photo-1542848285-f1588b447173?q=80&w=800" 
    },
  ];

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Section Les Massages */}
      <section id="services" className="py-24 bg-zenith-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-serif text-center mb-16">Nos Prestations</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {massagesData.map((massage) => (
              <MassageCard key={massage.id} service={massage} imageUrl={massage.imageUrl} />
            ))}
          </div>
        </div>
      </section>

      {/* Section À Propos */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square max-h-[600px] rounded-xl overflow-hidden shadow-lg">
                <Image 
                    src="https://i.postimg.cc/DfJvYJFZ/Gemini-Generated-Image-fgw95lfgw95lfgw9.png" 
                    alt="Portrait d'Anthony, Praticien en massage ayurvédique" 
                    fill 
                    style={{ objectFit: "cover" }} 
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-5xl font-serif mb-6">Anthony, Votre Praticien</h2>
              <h3 className="text-xl font-semibold mb-6 text-zenith-primary">Une approche holistique du bien-être</h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                    Le massage ayurvédique est une philosophie de vie héritée de la science millénaire indienne, considérant l'être humain dans sa globalité (corps, esprit, énergie). Mon approche vise à rétablir l'équilibre naturel pour favoriser la santé et l'harmonie intérieure.
                </p>
                <p>
                    Formé en Inde en 2014 pour apprendre l'art du soin à la source. Neuf ans d'exercice à Paris auprès d'une clientèle exigeante. Aujourd'hui installé en Nouvelle-Calédonie, j'allie tradition indienne et adaptation moderne pour des soins à domicile.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section id="testimonials" className="py-24 bg-zenith-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-serif mb-16">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Témoignage 1 */}
            <div className="bg-white p-10 rounded-xl shadow-lg italic text-left">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                "Un pur moment de sérénité ! Le massage ayurvédique m’a permis de relâcher des tensions que je traînais depuis des mois. Une détente profonde, et le luxe de recevoir le soin à la maison m'a permis de rester dans ma bulle de bien-être."
              </p>
              <p className="font-semibold not-italic text-right">- Sophie M., Nouméa</p>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-white p-10 rounded-xl shadow-lg italic text-left">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                "Professionnel, ponctuel et à l’écoute, Anthony a su adapter le massage à mes besoins sportifs. J’ai trouvé un vrai soulagement musculaire, mais au-delà du corps, c’est l’esprit qui s’apaise. Une expérience à renouveler."
              </p>
              <p className="font-semibold not-italic text-right">- Julien R., Nouméa</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

// Section Hero avec Vidéo d'arrière-plan
const HeroSection = () => {
    // Lien WhatsApp général pour le CTA principal
    const whatsappNumber = "687930098";
    const message = encodeURIComponent("Bonjour, je souhaiterais prendre un rendez-vous pour un massage.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    const videoUrl = "https://res.cloudinary.com/drjkiqihn/video/upload/v1756698225/4k_video_ultra_202509011441_akayv_eonnaz.mp4";

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vidéo d'ambiance */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={videoUrl}
          >
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
          {/* Overlay sombre pour améliorer la lisibilité du texte */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">
            L'excellence du massage, livrée chez vous.
          </h1>
          <p className="text-xl font-light mb-12">
            Vivez une expérience de bien-être unique en Nouvelle-Calédonie.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-zenith-primary text-white text-lg px-12 py-4 rounded-lg shadow-2xl hover:bg-zenith-primary-dark transition duration-300 transform hover:scale-105"
          >
            Réserver mon massage
          </a>
        </div>
      </section>
    );
}
