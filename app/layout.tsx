import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "raiRabin | FREE 1:1 Digital Marketing Consultation Call",
  description:
    "Nepal-based business owners can book a FREE 1:1 digital marketing consultation call and get a customized plan to grow leads, customers, and sales.",
  openGraph: {
    title: "raiRabin | FREE 1:1 Digital Marketing Consultation Call",
    description:
      "Struggling to grow your business? Book a FREE 1:1 Digital Marketing Consultation Call and get a customized plan you can use right away.",
    type: "website",
    images: [
      {
        url: "/rairabin_logo_new.png",
        width: 1200,
        height: 630,
        alt: "raiRabin Digital Marketing Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "raiRabin | FREE 1:1 Digital Marketing Consultation Call",
    description:
      "A conversion-focused consultation page for Nepal-based business owners who want more leads, customers, and sales.",
    images: ["/rairabin_logo_new.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <Script id="facebook-meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1531702638595203');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1531702638595203&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
