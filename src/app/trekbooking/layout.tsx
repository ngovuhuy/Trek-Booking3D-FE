'use client'
import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto } from 'next/font/google'
import Footer from "../components/footer";
import "../../../public/css/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
         <Navbar></Navbar> 
        {children}
        <ToastContainer/>
         <Footer/> 
        </body>
    </html>
  );
}
