import { motion } from "framer-motion";

export default function Pricing({ onSelect }) {
  const plans = [
    {
      id: "C",
      title: "SILVER",
      price: "₹300",
      note: "Balcony Seating",
      disabled: true, // 👈 Disabled plan
      features: [
        "Event Access",
        "Balcony Seating",
        "Refreshments",
        "Event Kit",
      ],
    },
    {
      id: "B",
      title: "GOLD",
      price: "₹400",
      note: "Standard Seating",
      features: [
        "Event Access",
        "Standard Seating",
        "Refreshments",
        "Goodies",
      ],
    },
    {
      id: "A",
      title: "DIAMOND",
      price: "₹600",
      popular: true,
      note: "Premium Experience",
      features: [
        "Front Row Seating",
        "Exclusive Guest Interaction",
        "Refreshments",
        "Goodies",
      ],
    },
  ];

  return (
    <section className="w-full max-w-6xl mb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Choose Your <span className="text-red-600">Experience</span>
        </h1>
        <p className="mt-4 text-white/60 tracking-widest text-sm">
          TEDx SAIRAM · FEB 14, 2026
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            whileHover={{ y: -6 }}
            className={`
              relative
              rounded-2xl
              border
              ${plan.popular ? "border-red-600" : "border-white/10"}
              bg-white/[0.05]
              backdrop-blur-xl
              p-8
              flex flex-col
            `}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-xs px-4 py-1 rounded-full tracking-widest">
                MOST POPULAR
              </div>
            )}

            <h3 className="text-xl tracking-widest font-bold mb-2">
              {plan.title}
            </h3>

            {/* PRICE */}
            <div className="text-4xl font-extrabold mb-1 text-red-500">
              {plan.price}
            </div>

            <p className="text-white/60 text-sm mb-6">
              {plan.note}
            </p>

            <ul className="space-y-2 text-sm text-white/70 mb-8">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <button
              disabled={plan.disabled}
              onClick={() => !plan.disabled && onSelect(plan.id)}
              className={`
                mt-auto
                py-3
                rounded-lg
                font-bold
                tracking-widest
                text-sm
                transition
                ${
                  plan.disabled
                    ? "bg-neutral-700 cursor-not-allowed opacity-50"
                    : plan.popular
                    ? "bg-red-600 hover:bg-red-700"
                    : "border border-white/30 hover:bg-white/10"
                }
              `}
            >
              {plan.disabled ? "SOLD OUT" : "SELECT PLAN"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
