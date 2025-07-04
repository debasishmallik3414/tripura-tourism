import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "./styles/main.css";
// import "remixicon/fonts/remixicon.css";
// In your main layout or _app.jsx
import "leaflet/dist/leaflet.css";
import RouteChangeLoader from './components/RouteChangeLoader';

import Navbar from "./components/Navbar";
// import "./signin";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tripura Tourism",
  description: "Generated by tripura tourism devlopment ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
