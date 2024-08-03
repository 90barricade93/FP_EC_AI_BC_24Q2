'use client';
import { Provider } from "../lib/provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Provider>
          <Header />
          <div className="flex-grow flex flex-col">
            <main className="flex-grow">
              {children}
            </main>
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
