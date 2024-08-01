import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soundview Broadcasting",
  description: "SoundView Broadcasting is a fully-equipped, independently-owned, 60,000 sq. ft. global media broadcasting, production, post-production and marketing company based in New York City. We provide media services for over 26 international television channels from countries including India, Pakistan, Bangladesh, Egypt, Sub-Saharan Africa, and the U.S. to audiences across North America, Europe, and the UK.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="black">
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}
