'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import StreamlitEmbed from '../streamlitembed';
import VoiceSelector from '..VoiceSelector';

export default function PersonalPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [showVoiceSelector, setShowVoiceSelector] = useState(true);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const mainContent = document.querySelector("main");
    const text = mainContent ? mainContent?.innerText || mainContent?.textContent : "";

    if (text && selectedVoice) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice;
      synth.speak(utterance);
      setShowVoiceSelector(false); // Hide VoiceSelector after reading text
    }
  }, [selectedVoice]);

  return (
    <div className="relative min-h-screen flex flex-col">
      
          
            <main className="flex flex-col items-center justify-center flex-grow mt-20 space-y-4">
        <h1>Welcome, {session?.user?.name || "User"} </h1>
        <p>This is your personal learning page.</p>
        <div className="flex justify-center space-x-4 w-full max-w-[1800px]">
          <div className="flex-1 w-[800px] h-[550px] rounded-md bg-gray-200 p-4 text-center">
            <StreamlitEmbed />
          </div>
          <div className="flex-1 w-[800px] h-[550px] rounded-md bg-gray-200 p-4 text-center">
            <p className="text-3xl font-semibold">COMPONENT</p>
          </div>
        </div>
      </main>
    </div>
  );
}
