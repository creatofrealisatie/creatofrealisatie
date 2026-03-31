const BathroomIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="18" width="32" height="16" rx="2" stroke="#C0622A" strokeWidth="2" fill="none" />
    <path d="M4 22h32" stroke="#C0622A" strokeWidth="1.5" />
    <path d="M8 18V10a4 4 0 014-4v0a4 4 0 014 4v4" stroke="#C0622A" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 34v3M12 34v3" stroke="#C0622A" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="26" r="2" fill="#C0622A" opacity="0.6" />
  </svg>
);

const KitchenIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="32" height="28" rx="2" stroke="#C0622A" strokeWidth="2" fill="none" />
    <path d="M4 20h32" stroke="#C0622A" strokeWidth="1.5" />
    <rect x="8" y="10" width="10" height="6" rx="1" stroke="#C0622A" strokeWidth="1.5" fill="none" />
    <rect x="22" y="10" width="10" height="6" rx="1" stroke="#C0622A" strokeWidth="1.5" fill="none" />
    <path d="M8 26h10M22 26h10" stroke="#C0622A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 28v4M26 28v4" stroke="#C0622A" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const FurnitureIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="4" width="28" height="32" rx="2" stroke="#C0622A" strokeWidth="2" fill="none" />
    <path d="M6 16h28M6 26h28" stroke="#C0622A" strokeWidth="1.5" />
    <circle cx="20" cy="11" r="1.5" fill="#C0622A" />
    <circle cx="20" cy="21" r="1.5" fill="#C0622A" />
    <circle cx="20" cy="31" r="1.5" fill="#C0622A" />
    <path d="M10 36v2M30 36v2" stroke="#C0622A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const services = [
  {
    icon: <BathroomIcon />,
    title: "Badkamer Renovatie",
    description:
      "Van concept tot oplevering verzorgen wij uw complete badkamerrenovatie. Tegels, sanitair, installatie — alles tot in de puntjes afgewerkt.",
    features: ["Volledige renovatie", "Tegels & sanitair", "Elektrische vloerverwarming", "Inloopdouche & bad"],
  },
  {
    icon: <KitchenIcon />,
    title: "Keuken Montage",
    description:
      "Wij plaatsen en installeren uw droomkeuken vakkundig. Of het nu een standaard of volledig maatwerk keuken is — wij zorgen voor een perfecte montage.",
    features: ["Maatwerk & standaard", "Aanrechtbladen op maat", "Apparatuur installatie", "Tegelwerk & afzuiging"],
  },
  {
    icon: <FurnitureIcon />,
    title: "Maatmeubels",
    description:
      "Inbouwkasten, wandmeubels en op maat gemaakte meubels die perfect aansluiten op uw ruimte. Elke centimeter benut, elke wens vervuld.",
    features: ["Inbouwkasten", "Wandmeubels", "Slaapkamer oplossingen", "Kantoor meubels"],
  },
];

export default function Diensten() {
  return (
    <section id="diensten" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Wat wij doen
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Onze Diensten
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-card rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all duration-200"
              >
                Meer info
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
