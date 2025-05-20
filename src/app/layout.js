import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Психолог Анастасия",
  description: "Психолог для тревожных людей. Работа с тревожностью, ОКР, паническими атаками.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 2,
    userScalable: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body>
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
