import { useEffect } from 'react';

const TextToSpeech = ({ text }: { text: string }) => {
  useEffect(() => {
    if (!text) {
      console.warn('No text provided for speech synthesis');
      return;
    }

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      console.log('Speaking text:', text);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported in this browser');
    }
  }, [text]);

  return null;
};

export default TextToSpeech;
