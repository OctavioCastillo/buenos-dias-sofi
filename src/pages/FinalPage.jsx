import { motion } from "motion/react";
import { Sun } from "lucide-react";

export default function FinalPage({ onContinue }) {
  return (
    <motion.section
      key="final"
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
          Como siempre
        </h1>

        <p className="text-sm leading-6 text-[#897C65]">
          Espero que tengas un día bonito.
        </p>
      </div>

      <button
        type="button"
        onClick={onContinue}
        className="w-full rounded-full bg-[#F3D777] px-5 py-3 font-semibold transition hover:bg-[#EBCB5D] active:scale-95"
      >
        Volver al inicio
      </button>
    </motion.section>
  );
}