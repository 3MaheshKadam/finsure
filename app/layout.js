import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Finsure Solutions | Your Trusted Financial Partner",
    template: "%s | Finsure Solutions"
  },
  description: "Your trusted financial partner for accessible and transparent loan solutions. Get personal loans, business loans, home loans, and insurance services.",
  keywords: "loans, finance, personal loan, business loan, home loan, insurance, loan solutions, financial services",
  authors: [{ name: "Finsure Solutions" }],
  creator: "Finsure Solutions",
  publisher: "Finsure Solutions",
  metadataBase: new URL('https://finsuresolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Finsure Solutions | Your Trusted Financial Partner",
    description: "Your trusted financial partner for accessible and transparent loan solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Finsure Solutions",
    url: "https://finsuresolutions.com",
    images: [
      {
        url: '/og-image.jpg', // Add your OG image path
        width: 1200,
        height: 630,
        alt: 'Finsure Solutions',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finsure Solutions | Your Trusted Financial Partner",
    description: "Your trusted financial partner for accessible and transparent loan solutions.",
    images: ['/twitter-image.jpg'], // Add your Twitter image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest', // Optional: if you have a web manifest
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add additional head tags here if needed */}
      </head>
      <body className={`${montserrat.variable} antialiased font-montserrat`}>
        {children}
      </body>
    </html>
  );
}