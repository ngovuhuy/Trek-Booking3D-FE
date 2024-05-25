'use client'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Navbar from '../components/Navbar';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
                {children}
        <ToastContainer/>
        </body>
    </html>
  );
}
