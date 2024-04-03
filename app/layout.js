import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coming Soon | Papel Water",
  description: "Papel Water Pre-Launch Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <img
          src="/papel-llogoo.png"
          alt="logo"
          className="absolute top-8 w-[50px] left-12 xs:max-md:w-[80px] xs:max-md:relative xs:max-md:mx-auto xs:max-md:top-[40px] xs:max-md:left-0"
        />
        {children}
      </body>
    </html>
  );
}
