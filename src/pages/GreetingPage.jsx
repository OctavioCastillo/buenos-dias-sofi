
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sun } from "lucide-react";
import monito from "../assets/images/monito.png";

const sleepPositions = [
  { x: -65, y: 0 },
  { x: 65, y: 0 },
  { x: -35, y: -5 },
  { x: 35, y: 5 },
  { x: 0, y: -8 },
  { x: 0, y: 8 },
];

export default function GreetingPage({ onContinue }) {
  const [tiredVisible, setTiredVisible] = useState(true);
  const [showTiredImage, setShowTiredImage] = useState(false);
  const [sleepPosition, setSleepPosition] = useState({
    x: 0,
    y: 0,
  });

  function moveSleepButton() {
    setSleepPosition((previous) => {
      const currentIndex = sleepPositions.findIndex(
        (position) =>
          position.x === previous.x && position.y === previous.y
      );

      let nextIndex;

      do {
        nextIndex = Math.floor(Math.random() * sleepPositions.length);
      } while (nextIndex === currentIndex);

      return sleepPositions[nextIndex];
    });
  }

  function handleTiredClick() {
    setTiredVisible(false);
    setShowTiredImage(true);
  }

  return (
    <motion.section
      key="greeting"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 flex w-full max-w-sm flex-col items-center gap-6 rounded-[2rem] border border-[#F0E2BC] bg-white/90 px-6 py-9 text-center shadow-[0_12px_40px_rgba(130,103,46,0.09)]"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF0B8] text-[#A98122]"
      >
        <Sun size={46} strokeWidth={1.5} />
      </motion.div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold leading-tight">
          ¿Cómo amaneciste?
        </h1>
      </div>

      <div className="flex w-full flex-col items-center gap-3">
        <AnimatePresence>
          {tiredVisible && (
            <motion.button
              key="tired"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                height: 0,
                padding: 0,
              }}
              onClick={handleTiredClick}
              className="w-full rounded-full border border-[#E8D7B0] bg-[#FFF9E9] px-5 py-3 font-medium transition active:scale-95"
            >
              Cansada 😴
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showTiredImage && (
            <motion.div
              key="tired-image"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.4 }}
              className="flex w-full flex-col items-center gap-2"
            >
              <img
                src={monito}
                alt="Monito"
                className="h-32 w-32 rounded-2xl object-contain"
              />

            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative flex min-h-14 w-full items-center justify-center">
          <motion.button
            animate={sleepPosition}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 18,
            }}
            onClick={moveSleepButton}
            className="rounded-full border border-[#D9E4C7] bg-[#EAF0DF] px-5 py-3 font-medium text-[#4E6240] active:scale-95"
          >
            Con ganas de cheetos con frijol
          </motion.button>
        </div>

        <button
          onClick={onContinue}
          className="w-full rounded-full bg-[#F3D777] px-5 py-3 font-semibold transition hover:bg-[#EBCB5D] active:scale-95"
        >
          Bonita ☀️
        </button>
      </div>
    </motion.section>
  );
}
