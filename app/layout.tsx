import type { Metadata } from "next";
import { Inter,Bodoni_Moda } from "next/font/google";
import Navbar from "@/components/layout/navbarMobile";
import NavbarDesk from "@/components/layout/navbar";
import "@/styles/globals.css";
import ReactReduxProvider from "@/redux/provider";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

const Bodoni = Bodoni_Moda({
  variable:'--font-bodoni',
  display:'swap',
  subsets:['latin'],
  weight:'500'
});



export const metadata: Metadata = {
  title: "Cognify",
  description: "Cognify app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${Bodoni.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-100">
        <ReactReduxProvider>
          <Navbar />
          <NavbarDesk />
           {children}
        </ReactReduxProvider>
        </body>
    </html>
  );
}


