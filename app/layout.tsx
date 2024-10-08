import Script from "next/script";
import { Roboto_Slab } from "next/font/google";
import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";

import LoadingWrapper from "@/components/wrappers/loading-wrapper";
import { CardImage, description, keywords, title, url } from "@/constant";

import "@/app/globals.css";
import Footer from "@/components/footer/Footer";
import InterstitialAd from "@/components/ads/interstitial-ad";
import AnchorAd from "@/components/ads/anchor-ad";
import ClientWrapper from "@/components/wrappers/client-wrapper";
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
    title: `${title}`,
    description: description,
    images: CardImage,
  },
  openGraph: {
    type: "website",
    siteName: `${title}`,
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <Script
          async
          strategy="beforeInteractive"
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7881445598590993"
          async
          strategy="beforeInteractive"
        ></Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TKHE64ET5C"
          async
          strategy="beforeInteractive"
        ></Script>
        <Script id="tags" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TKHE64ET5C');`}
        </Script>
        <Script
          src="https://truepubmedia.com/scripts/script-tag-876.js"
          strategy="afterInteractive"
        ></Script>
        <Toaster position="top-center" />
        <LoadingWrapper />
        {children}
        <Footer />
        <ClientWrapper>
          <>
            <InterstitialAd />
            <AnchorAd />
          </>
        </ClientWrapper>
      </body>
    </html>
  );
}
