import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "raiRabin | Free 1:1 Digital Marketing Consultation",
  description:
    "Get a free 1:1 consultation call and customized digital marketing plan to help your business get more customers online.",
  openGraph: {
    title: "raiRabin | Free 1:1 Digital Marketing Consultation",
    description:
      "Free 1:1 consultation where we analyze your business and show what is stopping your growth and what to do next.",
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
    title: "raiRabin | Free 1:1 Digital Marketing Consultation",
    description:
      "Get a customized marketing plan for your business with a free 1:1 consultation call.",
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
      <body>{children}</body>
    </html>
  );
}
