import type { Metadata } from "next";
import "./globals.css";
import { yekan } from "../app/utils/fonts";
import Navbar from "./components/navbar/Navbar";
import SignupModal from "./components/modals/SignupModal";
import LoginModal from "./components/modals/LoginModal";
import { Providers } from "./providers/Providers";
import SearchModal from "./components/modals/SearchModal";
import AddPropertyModal from "./components/modals/AddPropertyModal";
import Footer from "./components/footer/Footer";


export const metadata: Metadata = {
  title: "گیلان جان",
  description: " رزرو لحظه ای خانه، رستوران، کافی شاپ و.. در استان گیلان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={yekan.className}>
      <body className={yekan.className}>
        <Providers>
          <Navbar/> 
            <div className="pt-32">{children}</div>
            <LoginModal />
            <SignupModal />
            <SearchModal />
            <AddPropertyModal />
           <Footer/>
        </Providers>
      </body>
    </html>
  );
}
