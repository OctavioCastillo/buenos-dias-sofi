
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function FinalPage({ onRestart }) {
  return (
    <motion.section
      key="final"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 flex w-full max-w-sm flex-col items-center gap-5 rounded-[2rem] border border-[#F0E2BC] bg-white/90 px-7 py-10 text-center shadow-[0_12px_40px_rgba(130,103,46,0.09)]"
    >
      <motion.div
        animate={{ rotate: [0, -8, 8, 0], y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF0B8] text-[#A98122]"
      >
        <Sparkles size={44} strokeWidth={1.5} />
      </motion.div>

      <h1 className="text-4xl font-bold leading-tight">
        Como siempre ☀️
      </h1>

      <p className="text-sm leading-6 text-[#897C65]">
        Espero que tengas un día muy bonito.
      </p>

      <button
        onClick={onRestart}
        className="mt-2 rounded-full border border-[#E8D7B0] px-5 py-3 text-sm font-medium transition hover:bg-[#FFF9E9] active:scale-95"
      >
        Volver al inicio
      </button>
    </motion.section>
  );
}
