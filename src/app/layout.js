import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Психолог Анастасия",
  description: "Психолог для тревожных людей. Работа с тревожностью, ОКР, паническими атаками.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
