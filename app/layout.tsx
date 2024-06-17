import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Script from "next/script";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ocean Cycles",
  description: "Ocean Cycles online store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
        <Script id="booqable-script">
        {`
          var booqableOptions = {
            company: '6fc6610d-886e-4b27-80d8-955c3be42647'
          };
        `}
        </Script>
        <Script
          src="https://6fc6610d-886e-4b27-80d8-955c3be42647.assets.booqable.com/v2/booqable.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
