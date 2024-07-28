"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { Provider } from "../components/provider";
import ".;

import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import VoiceSelector from "../components/VoiceSelector";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const text = document.body.innerText || document.body.textContent;
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  return (
    <html lang="en" style={{ userSelect: "none" }}>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Provider>
          <Header />
          <div className="flex-grow flex flex-col">
            <main className="flex-grow">
              <div className="flex-grow flex flex-col">
                <VoiceSelector children={undefined} />
              </div>
              {children}
            </main>
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
