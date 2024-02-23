import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Container } from "@mui/material";
import MobileMenu from "@/components/shared/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News Forest",
  description: "A news portal website developed by bappy - (build with next js)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="md:hidden z-10">
          <MobileMenu/>
        </div>
        <div className="min-h-screen   mx-auto">
          <Container maxWidth="xl">
            {children}
          </Container>
        </div>
        <Footer />
      </body>
    </html>
  );
}
