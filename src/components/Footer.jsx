// Footer.jsx
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* subtle top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]
        bg-gradient-to-r from-transparent via-red-600/60 to-transparent"
      />

      {/* ambient fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(40% 30% at 50% 0%, rgba(230,43,30,0.18), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">
              TEDx <span className="text-red-600">Sairam</span>
            </h3>

            <p className="mt-2 text-sm text-white/60 max-w-sm leading-relaxed">
              An independently organized TEDx event hosted by
              Sri Sairam Engineering College — where ideas meet impact.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 text-sm text-white/70">
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
            <a href="#speakers" className="hover:text-white transition">
              Speakers
            </a>
            <a href="#program" className="hover:text-white transition">
              Program
            </a>
            <a href="#attend" className="hover:text-white transition">
              Attend
            </a>
          </div>
        </div>

        {/* divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* copyright */}
          <p className="text-xs text-white/50 tracking-wide">
            © {new Date().getFullYear()} TEDx Sairam.{" "}
            This independent TEDx event is operated under license from TED.
          </p>

          {/* socials */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: <FaInstagram />,
                link: "https://instagram.com/tedxsairam",
                label: "Instagram",
              },
              {
                icon: <FaEnvelope />,
                link: "mailto:tedxsairam@sairam.edu.in",
                label: "Email",
              },
              {
                icon: <FaWhatsapp />,
                link: "https://wa.me/919342639631",
                label: "WhatsApp",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="
                  h-9 w-9 rounded-full
                  border border-white/15
                  bg-white/[0.04]
                  backdrop-blur-xl
                  flex items-center justify-center
                  text-white/70
                  hover:text-white
                  hover:border-red-600/60
                  hover:shadow-[0_0_18px_rgba(230,43,30,0.45)]
                  transition
                "
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
