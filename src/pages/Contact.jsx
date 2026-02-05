import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-black text-white pt-40 pb-24">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.4em] text-white/50 mb-4">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Contact <span className="text-red-600">TEDxSairam</span>
          </h1>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Email */}
          <motion.a
            href="mailto:tedxsairam@sairam.edu.in" // 🔴 CHANGE IF NEEDED
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="
              group
              relative
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-10
              transition
              hover:border-red-600/40
            "
          >
            <div className="flex items-center justify-between mb-6">
              <EmailIcon className="text-red-600" fontSize="large" />
              <ArrowOutwardIcon className="text-white/40 group-hover:text-red-600 transition" />
            </div>

            <h2 className="text-xl font-medium mb-3">Email Us</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              For queries related to the event, partnerships, or participation,
              reach out to us via email.
            </p>

            <p className="mt-6 text-sm tracking-wider text-red-500">
              tedxsairam@sairam.edu.in
            </p>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/tedxsairam" // 🔴 CHANGE IF NEEDED
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="
              group
              relative
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-10
              transition
              hover:border-red-600/40
            "
          >
            <div className="flex items-center justify-between mb-6">
              <InstagramIcon className="text-red-600" fontSize="large" />
              <ArrowOutwardIcon className="text-white/40 group-hover:text-red-600 transition" />
            </div>

            <h2 className="text-xl font-medium mb-3">Instagram</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Follow us on Instagram for updates, speaker reveals, and behind-the-scenes moments.
            </p>

            <p className="mt-6 text-sm tracking-wider text-red-500">
              @tedxsairam
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
