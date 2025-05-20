import { Merriweather } from "next/font/google";
import Navigation from "../components/Navigation";

const merriweather = Merriweather({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '700'],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata = {
  title: "Хроническая тревога | Психолог Анастасия",
  description: "Хроническая тревога на выходных? Что поможет, когда медитации и советы не работают. Консультация психолога при хронической тревоге.",
};

export default function ChronicAnxietyLayout({ children }) {
  return (
    <div className={merriweather.variable}>
      {children}
    </div>
  );
} 