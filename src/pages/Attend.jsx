export default function Attend() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-black text-white flex flex-col items-center justify-center text-center">
      
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-2xl">

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Ticket Booking <span className="text-red-600">Paused</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-neutral-400 mb-10">
          We’re temporarily closing registrations to process current bookings.
          <br />
          Don’t worry — this is just a short break.
        </p>

        {/* Resume Time Box */}
        <div className="border border-red-600/40 bg-red-600/10 backdrop-blur-sm rounded-2xl px-10 py-8 inline-block">
          <p className="text-sm uppercase tracking-widest text-red-400 mb-3">
            Registrations Resume At
          </p>
          <p className="text-4xl md:text-5xl font-mono font-bold text-white">
            3:00 PM
          </p>
        </div>

        {/* Extra Drama Line */}
        <p className="mt-12 text-neutral-500 text-sm">
          Same place. Same energy. Be ready.
        </p>

      </div>
    </div>
  );
}
