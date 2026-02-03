// SECTION 1 — ORIGIN (HORIZONTAL STORY SCROLLER)
// COMPLETELY DIFFERENT PARADIGM:
// No hero. No vertical reading. User scrolls HORIZONTALLY through meaning.

import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-black text-white">
      <HorizontalOrigin />
    </main>
  );
}

/* ==================================================
   ORIGIN — HORIZONTAL IDEA JOURNEY
   Vertical scroll → horizontal narrative
================================================== */
function HorizontalOrigin() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section className="relative h-[400vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full w-[400vw]"
        >
          <Panel
            bg="bg-gradient-to-br from-black via-[#120000] to-black"
            title="NOT A FEST"
            subtitle="No stalls. No noise."
          />
          <Panel
            bg="bg-gradient-to-br from-[#120000] via-black to-black"
            title="NOT A REQUIREMENT"
            subtitle="No checklists. No obligations."
          />
          <Panel
            bg="bg-gradient-to-br from-black via-[#120000] to-black"
            title="A RESPONSE"
            subtitle="To a need felt inside SSEC."
          />
          <Panel
            bg="bg-gradient-to-br from-[#120000] via-black to-black"
            title="IDEAS NEED SPACE"
            subtitle="This is why TEDx exists here."
          />
        </motion.div>
      </div>

      {/* Minimal instruction */}
      <div className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 text-[11px] tracking-widest text-gray-500">
        SCROLL
      </div>
    </section>
  );
}

/* ==================================================
   PANEL
================================================== */
function Panel({ title, subtitle, bg }) {
  return (
    <div className={`w-screen h-full flex items-center justify-center ${bg}`}>
      <div className="text-center px-6">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
