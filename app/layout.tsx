import dynamic from "next/dynamic";
import "@/app/globals.css";
import type { Metadata } from "next";
import { CardImage, description, keywords, title, url } from "@/constant";
import { Roboto_Slab } from "next/font/google";
import { Toaster } from "react-hot-toast";
// import Script from "next/script";

// Fonts
const poppins = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Meta Data

export const metadata: Metadata = {
  title: `${title}`,
  description: description,
  keywords: keywords,
  robots: "index follow",
  twitter: {
    card: "summary_large_image",
    site: title,
    title: `${title} Apk Download`,
    description: description,
    images: CardImage,
  },
  openGraph: {
    type: "website",
    siteName: `${title} Apk Download`,
    description: description,
    url: url,
    countryName: "USA",
    images: CardImage,
  },
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
  publisher: "Truepub Media",
  icons: "/favicon.ico",
};

// Main HTML
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Navbar = dynamic(() => import("@/components/navigation/Navbar"), {
    ssr: true,
  });
  const Footer = dynamic(() => import("@/components/footer/Footer"), {
    ssr: true,
  });
  const ScrollToTop = dynamic(() => import("@/components/etc/ScrollToTop"), {
    ssr: false,
  });

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} overflow-x-hidden`}>
        {/* <Script async crossOrigin="anonymous" strategy="beforeInteractive" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2320529624102171" /> */}
        <Toaster position="top-center" />
        {/* <Notification /> */}
        <Navbar />
        <div className="mt-16 md:mt-20">{children}</div>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
