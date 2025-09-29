"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// export const metadata = {
//   title: "Finsure Solutions",
//   description: "Your trusted financial partner for accessible and transparent loan solutions.",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased font-montserrat`}>
        {!isAdminRoute && <Header />}
        {children}
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}