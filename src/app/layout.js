import Header from "./components/Header";

import { Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Open_Sans({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ai Chat - Dashboard",
  description: "Designed and developed by Matías Wasyluk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
