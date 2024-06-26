import { Inter } from "next/font/google";
import { Toaster } from "../components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coming Soon | Papel Water",
  description: "Papel Water Pre-Launch Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Toaster />
    </html>
  );
}
