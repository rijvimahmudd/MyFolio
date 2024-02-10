"use client"
import { Montserrat,  } from "next/font/google";
import "../styles/globals.css";
import localFont from 'next/font/local'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/loader";
const monts = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-montserrat" });

const proto = localFont(
  {
    src: [
      {
        path: '../assets/font/ProtestRiot-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
    ],
    variable: "--font-proto",
  }
)



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     if(loading) return;
  },[loading])
  return (
    <html lang="en">
      <body className={`${monts.className} `}>
        {/* {loading && isHome ? (<Loader isLoading={(isLoading) => setLoading(isLoading)} loading={loading}/> ) : (
        <> */}
          {children}
        {/* </>) } */}
      </body>
    </html>
  );
}
