import { useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

import Decorations from "./components/Decorations";
import WelcomePage from "./pages/WelcomePage";
import GreetingPage from "./pages/GreetingPage";
import FinalPage from "./pages/FinalPage";
import sapito from "./assets/audio/sapito.mp3";

export default function App() {
  const [page, setPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  function handleWelcomeContinue() {
    const audio = audioRef.current;

    if (audio) {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }

    setPage(1);
  }

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF9E9] px-4 py-10 text-[#554A37]">
      <audio
        ref={audioRef}
        src={sapito}
        loop
        preload="auto"
      />

      <Decorations />

      <AnimatePresence mode="wait">
        {page === 0 && (
          <WelcomePage
            key="welcome"
            onContinue={handleWelcomeContinue}
          />
        )}

        {page === 1 && (
          <GreetingPage
            key="greeting"
            onContinue={() => setPage(2)}
          />
        )}

        {page === 2 && (
          <FinalPage
            key="final"
            onContinue={() => setPage(0)}
          />
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        title={isPlaying ? "Pausar música" : "Reproducir música"}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#E8D7B0] bg-white/95 text-[#8C743C] shadow-md transition hover:scale-105 active:scale-95"
      >
        {isPlaying ? (
          <Volume2 size={22} />
        ) : (
          <VolumeX size={22} />
        )}
      </button>
    </main>
  );
}