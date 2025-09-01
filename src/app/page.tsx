import Image from 'next/image';
import MassageCard from '@/components/MassageCard';

// Interface pour définir la structure d'un service
interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
  description: string;
}

// Données des massages
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
        duration: 90,
        price: 13000,
        description: "Notre soin le plus complet. Une immersion profonde dans le bien-être, alliant des manœuvres expertes et des techniques ancestrales pour une relaxation absolue.",
        imageUrl: "https://images.unsplash.com/photo-1542848285-f1588b447173?q=80&w=800" 
    },
];

export default function Home() {
  return (
    <>
      <HeroSection videoUrl="https://res.cloudinary.com/drjkiqihn/video/upload/v1756698225/4k_video_ultra_202509011441_akayv_eonnaz.mp4" />
      
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

      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square max-h-[600px] rounded-xl overflow-hidden shadow-lg">
                <Image src="https://i.postimg.cc/DfJvYJFZ/Gemini-Generated-Image-fgw95lfgw95lfgw9.png" alt="Photo de Anthony, masseur ayurvédique" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="md:w-1/2">
              {/* --- LIGNE MODIFIÉE --- */}
              <h2 className="text-5xl font-serif mb-6">Anthony, Votre Praticien</h2>
              {/* -------------------- */}
              <h3 className="text-xl font-semibold mb-4 text-zenith-primary">Ma Philosophie</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Le massage ayurvédique n’est pas seulement une technique de relaxation, c’est une véritable philosophie de vie. Héritée de l’Ayurveda, science millénaire indienne, cette pratique considère l’être humain dans sa globalité : corps, esprit et énergie.</p>
              <h3 className="text-xl font-semibold mb-4 text-zenith-primary">Parcours & Certifications</h3>
              <p className="text-gray-700 leading-relaxed">En 2014, j’ai voyagé en Inde pour me former au massage ayurvédique. J'ai ensuite exercé pendant neuf ans à Paris. Aujourd’hui, je mets ce parcours au service de mes clients en Nouvelle-Calédonie, en proposant des séances à domicile qui allient tradition indienne et adaptation moderne.</p>
            </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-zenith-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-serif mb-16">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-xl shadow-lg text-left italic border-l-8 border-zenith-primary">
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">"Un pur moment de sérénité ! Le massage ayurvédique m’a permis de relâcher des tensions que je traînais depuis des mois. Je n’avais jamais ressenti une détente aussi profonde."</p>
              <p className="font-semibold not-italic">- Sophie M., Nouméa</p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg text-left italic border-l-8 border-zenith-primary">
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">"Professionnel, ponctuel et à l’écoute, Anthony a su adapter le massage à mes besoins. Moi qui pratique beaucoup de sport, j’ai trouvé un vrai soulagement musculaire après la séance."</p>
              <p className="font-semibold not-italic">- Julien R., Nouméa</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Composant pour la section "Héros" avec la vidéo
const HeroSection = ({ videoUrl }: { videoUrl: string }) => {
  return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
          <video src={videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">L'excellence du massage, livrée chez vous.</h1>
        <p className="text-xl font-light mb-12">Vivez une expérience de bien-être unique en Nouvelle-Calédonie.</p>
        <HeroCTAButton />
      </div>
    </section>
  );
}

// Le composant bouton pour la section Héros (avec le lien WhatsApp)
const HeroCTAButton = () => {
  'use client';
  const whatsappNumber = "687930098";
  const prefilledMessage = encodeURIComponent("Bonjour, je souhaiterais prendre un rendez-vous pour un massage.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;
  
  return (
      <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zenith-primary text-white text-lg px-12 py-4 rounded-lg shadow-2xl hover:bg-zenith-primary-dark transition duration-300 transform hover:scale-105"
      >
          Réserver mon massage
      </a>
  );
}
