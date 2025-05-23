import { Montserrat } from "next/font/google";
import Script from "next/script";
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
  other: {
    'facebook-domain-verification': 'vc0i0o60zp9muc4kkxb5drhvazxk9e',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body>
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '553830737785923');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=553830737785923&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
