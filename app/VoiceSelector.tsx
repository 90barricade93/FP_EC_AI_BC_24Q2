"use client";
import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Provider } from "./provider";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

interface Voice {
  name: string;
  lang: string;
}

function VoiceSelector({
  onSelectVoice,
  onClose,
}: {
  onSelectVoice: (voice: SpeechSynthesisVoice) => void;
  onClose: () => void;
}) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");

  useEffect(() => {
    const synth = window.speechSynthesis;
    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    synth.onvoiceschanged = loadVoices;
  }, []);

  const handleVoiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const voice = voices.find((voice) => voice.name === event.target.value);
    if (voice) {
      setSelectedVoice(voice.name);
      onSelectVoice(voice);
      onClose();
    }
  };

  return (
    <div className="fixed top-0 right-0 m-4 p-4 bg-white shadow-md z-50">
      <label htmlFor="voices" className="block text-sm font-medium text-gray-700">
        Select Voice:
      </label>
      <select
        id="voices"
        value={selectedVoice}
        onChange={handleVoiceChange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isVoiceSelectorVisible, setVoiceSelectorVisible] = useState(true);

  useEffect(() => {
    const text = document.body.innerText || document.body.textContent;
    if (text && selectedVoice) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice;
      synth.speak(utterance);
    }
  }, [selectedVoice]);

  return (
    <html lang="en" style={{ userSelect: "none" }}>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Provider>
           <div className="flex-grow flex flex-col">
            <main className="flex-grow">
              {isVoiceSelectorVisible && (
                <VoiceSelector
                  onSelectVoice={setSelectedVoice}
                  onClose={() => setVoiceSelectorVisible(false)}
                />
              )}
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
