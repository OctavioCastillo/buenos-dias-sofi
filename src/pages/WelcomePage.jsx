
import { motion } from "motion/react";
import { Sun } from "lucide-react";

export default function WelcomePage({ onContinue }) {
  return (
    <motion.section
      key="welcome"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.35 }}
      className="relative z-10 flex w-full max-w-sm flex-col items-center gap-5 rounded-[2rem] border border-[#F0E2BC] bg-white/90 px-7 py-10 text-center shadow-[0_12px_40px_rgba(130,103,46,0.09)]"
    >
      <motion.div
        animate={{ rotate: [0, 8, -8, 0], y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF0B8] text-[#A98122]"
      >
        <Sun size={46} strokeWidth={1.5} />
      </motion.div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#AD8C3E]">
          Un saludito para tí
        </p>

        <h1 className="text-3xl font-bold leading-tight tracking-tight">
          Buenos díasss, Sofi
        </h1>
      </div>

      <button
        type="button"
        onClick={onContinue}
        className="mt-2 w-full rounded-full bg-[#F3D777] px-6 py-4 font-semibold text-[#574A30] shadow-sm transition duration-200 hover:bg-[#EBCB5D] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AD8C3E]"
      >
        Presiona aquí 🐸
      </button>

      <p className="text-xs text-[#A69A83]">
        Hecho especialmente para ti
      </p>
    </motion.section>
  );
}
