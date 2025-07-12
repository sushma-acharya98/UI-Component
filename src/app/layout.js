import { Outfit, Geist, Geist_Mono } from "next/font/google";
// import Outfit from "next/font/google";
import './fonts.css';
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: "Create Next",
  description: "Frontend Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.variable}
      >
        {children}
      </body>
    </html>
  );
}
