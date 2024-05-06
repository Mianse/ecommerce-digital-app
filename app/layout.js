import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "marketplace App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
