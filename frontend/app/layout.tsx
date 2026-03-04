import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FoodForNeed — Fighting Hunger, Not Waste",
    template: "%s | FoodForNeed",
  },
  description:
    "FoodForNeed is a free, non-profit food redistribution platform connecting local food surplus with shelters, orphanages, and people in need — powered by community volunteers.",
  keywords: [
    "food donation",
    "food rescue",
    "non-profit",
    "food redistribution",
    "fight hunger",
    "volunteer",
    "food surplus",
    "community food",
  ],
  authors: [{ name: "FoodForNeed" }],
  creator: "FoodForNeed",
  metadataBase: new URL("https://foodforneed.org"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://foodforneed.org",
    siteName: "FoodForNeed",
    title: "FoodForNeed — Fighting Hunger, Not Waste",
    description:
      "Connecting food surplus with local need. Zero cost. 100% non-profit. Run by community volunteers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FoodForNeed — Fighting Hunger, Not Waste",
    description:
      "Connecting food surplus with local need. Zero cost. 100% non-profit. Run by community volunteers.",
    creator: "@foodforneed",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
