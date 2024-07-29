'use client';
import { Provider } from "./provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

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
