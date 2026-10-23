
import { motion } from "motion/react";
import { Sun, Sparkles, Cloud, Flower2 } from "lucide-react";

export default function Decorations() {
  return (
    <>
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-7 top-12 text-[#D9B84F]"
      >
        <Sun size={34} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="pointer-events-none absolute right-8 top-24 text-[#A8BD8A]"
      >
        <Cloud size={34} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ rotate: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="pointer-events-none absolute bottom-20 left-8 text-[#C5A477]"
      >
        <Flower2 size={30} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="pointer-events-none absolute bottom-28 right-9 text-[#D9B84F]"
      >
        <Sparkles size={27} strokeWidth={1.5} />
      </motion.div>
    </>
  );
}
