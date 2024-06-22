import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
const inter = Inter({ subsets: ["latin"] });
import { Roboto } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
          strategy="afterInteractive"
        />
      </head>
      <body className={roboto.className}>
      <Navbar title=""></Navbar> 
      <ToastContainer/>
        {children}
         <Footer/>
       
        </body>
    </html>
  );
}
