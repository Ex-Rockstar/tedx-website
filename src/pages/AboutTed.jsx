import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

/* ======================================================
   DATA
====================================================== */

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
];

const kineticWords = [
  { text: "CREATE", color: "text-white" },
  { text: "MOVE", color: "text-red-600" },
  { text: "QUESTION", color: "text-orange-400" },
  { text: "BUILD", color: "text-neutral-300" },
  { text: "EXPRESS", color: "text-red-500" },
  { text: "EVOLVE", color: "text-white" },
];

const tedxBlocks = [
  {
    kicker: "SPEAKERS",
    title: "Voices That Matter",
    text: "From innovators and educators to artists and leaders — every speaker brings lived experience, not theory.",
    glow:
      "bg-[radial-gradient(circle_at_30%_30%,rgba(230,43,30,0.25),transparent_60%)]",
  },
  {
    kicker: "EXPERIENCE",
    title: "More Than Talks",
    text: "A carefully curated blend of talks, performances, silence and emotion — designed as a complete stage experience.",
    glow:
      "bg-[radial-gradient(circle_at_30%_30%,rgba(255,122,24,0.22),transparent_60%)]",
  },
  {
    kicker: "COMMUNITY",
    title: "Built at Sairam",
    text: "Organized by Sri Sairam Engineering College — driven by student energy, institutional vision and creativity.",
    glow:
      "bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]",
  },
];

/* ======================================================
   HOME
====================================================== */

export default function Home() {
  /* HERO */
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { amount: 0.5 });
  const heroControls = useAnimation();

  /* STAGE */
  const stageRef = useRef(null);
  const stageInView = useInView(stageRef, { amount: 0.6 });
  const bgControls = useAnimation();
  const textControls = useAnimation();

  /* TEDx */
  const tedxRef = useRef(null);
  const tedxInView = useInView(tedxRef, { amount: 0.45 });
  const tedxControls = useAnimation();

  useEffect(() => {
    heroInView
      ? heroControls.start("visible")
      : heroControls.start("hidden");
  }, [heroInView]);

  useEffect(() => {
    if (stageInView) {
      bgControls.start("visible").then(() => {
        textControls.start("visible");
      });
    } else {
      bgControls.start("hidden");
      textControls.start("hidden");
    }
  }, [stageInView]);

  useEffect(() => {
    tedxInView
      ? tedxControls.start("visible")
      : tedxControls.start("hidden");
  }, [tedxInView]);

  return (
    <>
      {/* ======================================================
          HERO SECTION
      ======================================================= */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ delay: i * 0.15, duration: 1 }}
              className="bg-cover bg-center scale-[1.08] grayscale contrast-110 brightness-90"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

        <motion.div
          initial="hidden"
          animate={heroControls}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.9 },
            },
          }}
          className="relative z-10 max-w-7xl mx-auto px-16 pt-48"
        >
          <h1 className="text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[0.95]">
            Not one passion.
            <br />
            <span className="text-red-600">Every single one.</span>
          </h1>

          <p className="mt-8 max-w-xl text-white/70 text-lg">
            Arts · Sports · Education · Technology · Culture
            <br />
            Different worlds. One stage.
          </p>
        </motion.div>
      </section>

      {/* ======================================================
          STAGE SECTION
      ======================================================= */}
      <section
        ref={stageRef}
        className="relative h-screen min-h-[100svh] bg-black overflow-hidden"
      >
        <motion.div
          initial="hidden"
          animate={bgControls}
          variants={{
            hidden: { opacity: 0, scale: 1.25, filter: "brightness(0.25)" },
            visible: {
              opacity: 1,
              scale: 1.05,
              filter: "brightness(1)",
              transition: { duration: 2 },
            },
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/section2bg.jpg)" }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center gap-2">
          {kineticWords.map((w, i) => (
            <motion.h2
              key={w.text}
              initial="hidden"
              animate={textControls}
              variants={{
                hidden: { opacity: 0, x: i % 2 ? 200 : -200 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: i * 0.22, duration: 0.8 },
                },
              }}
              className={`text-[clamp(1.6rem,4.5vw,3.1rem)] font-black ${w.color}`}
            >
              {w.text}
            </motion.h2>
          ))}
        </div>
      </section>

      {/* ======================================================
          TEDx AT SAIRAM — CONCEPT 2
      ======================================================= */}
      <section
        ref={tedxRef}
        className="relative min-h-[100svh] bg-black text-white overflow-hidden flex items-center"
      >
        {/* ambient wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 45%, rgba(230,43,30,0.14) 0%, rgba(0,0,0,0) 60%)",
          }}
        />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial="hidden"
            animate={tedxControls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-center"
          >
            <p className="text-[10px] tracking-[0.45em] text-white/55">
              TEDx AT SRI SAIRAM ENGINEERING COLLEGE
            </p>

            <h2 className="mt-6 text-[clamp(2.4rem,5.5vw,4.6rem)] font-extrabold">
              A Stage Built for
              <br />
              <span className="text-red-600">Ideas in Motion</span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-white/70">
              TEDx at Sri Sairam Engineering College is a licensed independent
              TEDx event that brings powerful ideas, voices and stories onto one
              transformative stage.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={tedxControls}
            variants={{
              visible: {
                transition: { staggerChildren: 0.18, delayChildren: 0.5 },
              },
            }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {tedxBlocks.map((b) => (
              <motion.div
                key={b.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7 },
                  },
                }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8"
              >
                <div className={`absolute inset-0 ${b.glow}`} />
                <div className="relative z-10">
                  <p className="text-[11px] tracking-[0.4em] text-white/55">
                    {b.kicker}
                  </p>
                  <h3 className="mt-4 text-xl font-bold">{b.title}</h3>
                  <p className="mt-3 text-white/75 text-sm">{b.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
