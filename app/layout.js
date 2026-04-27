import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CSC Lok Vigyan Kendra Palanpur | Community Science Center",
  description:
    "Community Science Center - Lok Vigyan Kendra Palanpur. Promoting science literacy, energy conservation, Urja Rakshaks initiatives under Banas Gram Vikas Samiti.",
  keywords: [
    "CSC Palanpur",
    "Lok Vigyan Kendra",
    "Community Science Center",
    "Palanpur",
    "science",
    "energy conservation",
    "Urja Rakshaks",
    "Banas Gram Vikas Samiti",
  ],
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "CSC Lok Vigyan Kendra Palanpur",
    description:
      "Community Science Center promoting science and energy conservation in Palanpur.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${geistMono.variable} font-sans min-h-screen antialiased flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
