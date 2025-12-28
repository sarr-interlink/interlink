import "@/app/global.css";
import "@/public/assets/css/animate.css";
import "@/public/assets/css/tailwind.css";
import "lineicons/web-font/lineicons.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "aos/dist/aos.css";
import Footer from "./_components/Footer";
import { Inter, Sora } from "next/font/google";
import { SiteHeader } from "./_components/site-header";
import { Metadata } from "next";

// Example of using a Google Font
// const inter = Inter({ subsets: ["latin"], weight: "400" });
const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / Interlink",
    default: "Acceuil / Interlink",
  },
  description: "Interlink.mr",
};


export default function RootLayout({ children }: {children: React.ReactNode})
  {
  return (
    <html lang="en">

      <head>
        {/* Import des styles CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.lineicons.com/2.0/lineicons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"
          integrity="sha512-OQDNdI5rpnZ0BRhhJc+btbbtnxaj+LdQFeh0V9/igiEPDiWE2fG+ZsXl0JEH+bjXKPJ3zcXqNyP4/F/NegVdZg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className={sora.className}>
      
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      
      </body>

    </html>
  );
}
