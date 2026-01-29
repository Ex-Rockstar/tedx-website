import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-02-14T09:00:00");

function getTime() {
  const now = new Date();
  const diff = EVENT_DATE - now;

  return {
    d: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
    h: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
    m: Math.max(Math.floor((diff / 1000 / 60) % 60), 0),
    s: Math.max(Math.floor((diff / 1000) % 60), 0),
  };
}

export default function CountdownSignal() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const t = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[100svh] bg-black overflow-hidden flex items-center justify-center text-white perspective-[1600px]">

      {/* ===== PANORAMIC WALLS ===== */}
      <div className="absolute inset-0 flex justify-between pointer-events-none">

        {/* Left wall */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="
            w-[45vw] h-full
            bg-gradient-to-r from-red-600/15 to-transparent
            transform
            origin-right
            rotate-y-[35deg]
          "
        />

        {/* Right wall */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="
            w-[45vw] h-full
            bg-gradient-to-l from-red-600/15 to-transparent
            transform
            origin-left
            rotate-y-[-35deg]
          "
        />
      </div>

      {/* ===== STAGE FLOOR ===== */}
      <div
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          w-[140%] h-[45%]
          bg-[linear-gradient(to_top,rgba(230,43,30,0.18),transparent)]
          transform rotate-x-[70deg]
          origin-bottom
        "
      />

      {/* ===== MOVING SPOTLIGHTS ===== */}
      <motion.div
        animate={{ x: ["-40%", "40%", "-40%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="
          absolute top-0 left-0 w-full h-full
          bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.15),transparent_55%)]
          mix-blend-screen
        "
      />

      {/* ===== CENTER TIMER ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-20 text-center"
      >
        <p className="text-[11px] tracking-[0.5em] text-white/60 mb-4">
          STAGE COUNTDOWN
        </p>

        {/* DIGITAL CLOCK */}
        <div className="font-mono tracking-[0.2em] text-red-600 text-[clamp(3rem,7vw,6rem)] drop-shadow-[0_0_40px_rgba(230,43,30,0.65)]">
          {String(time.d).padStart(2, "0")} :
          {String(time.h).padStart(2, "0")} :
          {String(time.m).padStart(2, "0")} :
          {String(time.s).padStart(2, "0")}
        </div>

        <div className="mt-4 flex justify-center gap-8 text-[10px] tracking-[0.4em] text-white/60">
          <span>DAYS</span>
          <span>HRS</span>
          <span>MIN</span>
          <span>SEC</span>
        </div>

        {/* horizon glow */}
        <div className="mt-10 h-[2px] w-72 mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent" />

        <p className="mt-6 text-[11px] tracking-[0.45em] text-white/50">
          TEDx SAIRAM · FEBRUARY 14 · 2026
        </p>
      </motion.div>
    </section>
  );
}
