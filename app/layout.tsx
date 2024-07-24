import type { Metadata } from "next";
import { Provider } from "./provider";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accessible Learning",
  description: "For inclusive learning for all!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ userSelect: "none" }}>
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
