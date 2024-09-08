import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Anek_Telugu} from "next/font/google";
import {cn} from "@/lib/utils";

const AnekTelugu = Anek_Telugu({
  subsets:["latin"],
  variable: "--font-caption"
});

const GeistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const GeistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hanakhin Nouni-Massotte • Web Developer ",
  description: "Web Developer,Designer working with React, Nextjs and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'h-full'}>
      <body
        className={cn(GeistSans.variable, AnekTelugu.variable,GeistMono.variable, "font-sans h-full bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
