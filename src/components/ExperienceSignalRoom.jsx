import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ExperienceSignalRoom() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const logs = [
    "Initializing signal pipeline",
    "Stage frequency detected",
    "Audience resonance rising",
    "Emotion amplitude stabilizing",
    "Idea transmission in progress",
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] bg-black text-white overflow-hidden flex items-center"
    >
      {/* ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 45%, rgba(230,43,30,0.18) 0%, rgba(0,0,0,0) 65%)",
        }}
      />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
        }}
      />

      {/* content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT — SIGNAL ROOM TEXT */}
          <div>
            <p className="text-[10px] tracking-[0.45em] text-white/55">
              EXPERIENCE ZONE
            </p>

            <h2 className="mt-6 text-[clamp(2.4rem,5.5vw,4.6rem)] font-extrabold leading-[0.95]">
              Signal Room
              <br />
              <span className="text-red-600">Live Transmission</span>
            </h2>

            <p className="mt-6 max-w-xl text-white/70 text-sm md:text-base leading-relaxed">
              TEDx is not just heard — it is felt. Every idea passes through
              emotion, silence, tension and resonance before it reaches you.
            </p>

            <p className="mt-4 max-w-xl text-white/60 text-sm leading-relaxed">
              This space visualizes the invisible journey — from speaker to
              stage, from stage to audience.
            </p>
          </div>

          {/* RIGHT — LIVE CONSOLE */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.8 },
              },
            }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-xl overflow-hidden"
          >
            {/* top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-red-600 to-red-700" />

            <div className="relative z-10 p-6 md:p-7">
              {/* header */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="text-[10px] tracking-[0.45em] text-white/55">
                  LIVE CONSOLE
                </div>
                <div className="text-[10px] tracking-[0.45em] text-white/45">
                  SYNC: STAGE / AUDIENCE
                </div>
              </div>

              {/* logs */}
              <div className="mt-4 space-y-2">
                {logs.map((line, idx) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: 10 }}
                    animate={controls}
                    variants={{
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.9 + idx * 0.12,
                          duration: 0.4,
                        },
                      },
                      hidden: { opacity: 0, x: 10 },
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                    <p className="text-white/75 text-[13px]">
                      {line}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* ================= AUDIO WAVE ================= */}
              <div className="mt-6 flex items-end gap-[3px] h-14 overflow-hidden">
                {Array.from({ length: 26 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ height: 6 }}
                    animate={{
                      height: [6, 28, 12, 40, 16, 32],
                    }}
                    transition={{
                      duration: 1.3,
                      repeat: Infinity,
                      delay: i * 0.05,
                      ease: "easeInOut",
                    }}
                    className="w-[4px] rounded-sm bg-gradient-to-t from-red-600 via-orange-500 to-red-400"
                  />
                ))}
              </div>

              {/* divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={controls}
                variants={{
                  hidden: { scaleX: 0 },
                  visible: {
                    scaleX: 1,
                    transition: { delay: 1.7, duration: 0.7 },
                  },
                }}
                className="mt-6 h-[2px] w-44 bg-red-600 origin-left rounded-full"
              />

              <p className="mt-4 text-[10px] tracking-[0.45em] text-white/45">
                OUTPUT: ONE IDEA THAT STAYS
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
