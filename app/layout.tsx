import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AOSInit } from "@/components/Aos";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fikrad Technology Solutions",
  description:
    "We are passionate and experienced web development agency, dedicated to creating visually stunning and highly functional websites. Explore our portfolio to see the power of effective design in action.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9035225907331043"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-site-verification"
          content="sGKlcEYW_B2Q_UTNYZ_uA0Bkn9E7-8zUOex6GqrARnQ"
        />
      </head>
      <body className={`bg-peach-600 ${manrope.className}`}>
        <NextTopLoader color="#5700FF" showSpinner={false} />
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
