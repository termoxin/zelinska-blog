import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "./components/Navigation";
import { PostHogProvider } from "./components/PostHogProvider";

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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#4f46e5' }
    ]
  },
  manifest: '/site.webmanifest',
  other: {
    'facebook-domain-verification': 'vc0i0o60zp9muc4kkxb5drhvazxk9e',
    'msapplication-TileColor': '#4f46e5',
    'theme-color': '#4f46e5'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <head>
        {/* Additional favicon links for better browser support */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body>
        <PostHogProvider>
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
          {/* <Navigation gi/> */}
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
