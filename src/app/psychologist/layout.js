import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Психолог Анастасия',
  description: 'Психолог для тревожных людей. Работа с тревожностью, ОКР, паническими атаками.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function PsychologistLayout({ children }) {
  return (
    <div lang="ru" className={`${inter.variable} psychologist-layout`}>
      {children}
    </div>
  );
} 