import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next';

// Configuration des polices
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zenith Massage | Massage ayurvédique à domicile en Nouvelle-Calédonie',
  description: 'Réservez votre moment de détente avec Anthony. Massage ayurvédique professionnel livré chez vous à Nouméa et environs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfairDisplay.variable} ${montserrat.variable}`}>
      {/* Application du fond et de la police par défaut */}
      <body className="bg-zenith-bg text-zenith-text font-sans antialiased">
        <Header />
        <main>
            {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
