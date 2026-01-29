// CountdownSignal.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const pad2 = (n) => String(n).padStart(2, "0");
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

function computeCountdown(target) {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0)
    return { done: true, days: 0, hours: 0, minutes: 0, seconds: 0 };

  const t = Math.floor(diff / 1000);

  return {
    done: false,
    days: Math.floor(t / 86400),
    hours: Math.floor((t % 86400) / 3600),
    minutes: Math.floor((t % 3600) / 60),
    seconds: t % 60,
  };
}

function Tile({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl border border-white/10
        bg-white/[0.04] backdrop-blur-xl
        shadow-[0_18px_45px_rgba(0,0,0,0.55)]
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </div>
  );
}

function Waveform({ data }) {
  return (
    <div className="flex items-end justify-center gap-[3px] h-9">
      {data.map((v, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full"
          style={{
            height: `${8 + v * 32}px`,
            background:
              "linear-gradient(to top,#ff7a18,#e62b1e,#ffffff55)",
          }}
        />
      ))}
    </div>
  );
}

export default function CountdownSignal() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35 });
  const controls = useAnimation();

  const target = useMemo(
    () => new Date("2026-02-14T00:00:00+05:30"),
    []
  );

  const [cd, setCd] = useState(() => computeCountdown(target));
  const [wave, setWave] = useState(
    Array.from({ length: 32 }, () => Math.random())
  );

  useEffect(() => {
    const t1 = setInterval(
      () => setCd(computeCountdown(target)),
      1000
    );

    const t2 = setInterval(
      () => setWave((w) => w.map(() => clamp(Math.random(), 0.25, 1))),
      140
    );

    return () => {
      clearInterval(t1);
      clearInterval(t2);
    };
  }, [target]);

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="h-[100svh] bg-black flex items-center text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          hidden: { opacity: 0, y: 30 },
        }}
        className="
          w-full max-w-7xl mx-auto px-6
          grid grid-cols-12 grid-rows-[auto_auto_auto]
          gap-3
        "
      >
        {/* MIC CONTROL */}
        <Tile className="col-span-3 p-4">
          <p className="text-[10px] tracking-[0.45em] text-white/55 mb-3">
            MIC CONTROL
          </p>

          {["MIC 01", "MIC 02", "MIC 03", "HOST"].map((m, i) => (
            <div key={m} className="mb-2">
              <div className="flex justify-between text-[11px] text-white/60">
                <span>{m}</span>
                <span>{55 + i * 6}%</span>
              </div>
              <div className="mt-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full"
                  style={{
                    width: `${55 + i * 6}%`,
                    background:
                      "linear-gradient(to right,#ff7a18,#e62b1e)",
                  }}
                />
              </div>
            </div>
          ))}
        </Tile>

        {/* COUNTDOWN CORE */}
        <Tile className="col-span-6 row-span-2 flex flex-col items-center justify-center p-4">
          <p className="text-[10px] tracking-[0.45em] text-white/55">
            TIME TO TEDx
          </p>

          <div className="mt-2 text-[3.2rem] font-mono font-black">
            {pad2(cd.hours)}:{pad2(cd.minutes)}:{pad2(cd.seconds)}
          </div>

          <div className="mt-1 text-red-600 tracking-[0.35em]">
            T–{cd.days} DAYS
          </div>

          <div className="mt-3">
            <Waveform data={wave} />
          </div>
        </Tile>

        {/* STAGE STATUS */}
        <Tile className="col-span-3 p-4">
          <p className="text-[10px] tracking-[0.45em] text-white/55 mb-3">
            STAGE STATUS
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>LIGHT RIG</span>
              <span className="text-red-500">ONLINE</span>
            </div>
            <div className="flex justify-between">
              <span>AUDIO</span>
              <span className="text-orange-400">ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>STREAM</span>
              <span className="text-white/70">READY</span>
            </div>
          </div>
        </Tile>

        {/* QUOTE */}
        <Tile className="col-span-3 p-4">
          <p className="text-[10px] tracking-[0.45em] text-white/55 mb-2">
            THE INVITATION
          </p>

          <h3 className="text-base font-semibold leading-snug">
            Ideas don’t change the world.
            <br />
            <span className="text-red-600">
              People who hear them do.
            </span>
          </h3>

          <p className="mt-1 text-sm text-white/65">
            Enter the TEDx Sairam experience.
          </p>
        </Tile>

        {/* MAP */}
        <Tile className="col-span-3">
          <iframe
            title="map"
            className="w-full h-full grayscale brightness-75"
            src="https://www.google.com/maps?q=Sri+Sairam+Engineering+College&output=embed"
          />
        </Tile>

        {/* LIVE CONSOLE */}
        <Tile className="col-span-6 p-4">
          <p className="text-[10px] tracking-[0.45em] text-white/55 mb-2">
            LIVE CONSOLE
          </p>

          {[
            "Audio bus armed",
            "Speaker queue locked",
            "Crowd energy synced",
          ].map((l) => (
            <div key={l} className="flex gap-3 text-sm">
              <span className="text-red-600">●</span>
              {l}
            </div>
          ))}
        </Tile>

        {/* META STRIP */}
        <Tile className="col-span-6 px-5 py-3 flex items-center justify-between text-[10px] tracking-[0.45em] text-white/60">
          <span>LOCATION — SRI SAIRAM ENGINEERING COLLEGE</span>
          <span>FEB 14 · 2026 · TEDx SAIRAM</span>
        </Tile>
      </motion.div>
    </section>
  );
}
