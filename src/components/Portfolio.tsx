const portfolioItems = [
  { id: 1, title: "Moderne Badkamer", category: "Badkamer", color: "#1E1E1E" },
  { id: 2, title: "Strakke Keuken", category: "Keuken", color: "#1C1A18" },
  { id: 3, title: "Walk-in Closet", category: "Maatmeubels", color: "#1A1C1E" },
  { id: 4, title: "Luxe Badkamer Suite", category: "Badkamer", color: "#1E1C1A" },
  { id: 5, title: "Open Keuken Eiland", category: "Keuken", color: "#181E1C" },
  { id: 6, title: "Inbouwkasten", category: "Maatmeubels", color: "#1C1E18" },
];

const categoryColor: Record<string, string> = {
  Badkamer: "#C0622A",
  Keuken: "#8B7355",
  Maatmeubels: "#5E6E5C",
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Ons werk
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Portfolio
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
          <p className="text-gray-400 max-w-xl mx-auto mt-6">
            Een selectie van onze meest recente projecten. Elk project vertelt het verhaal van vakmanschap en aandacht voor detail.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
              style={{ backgroundColor: item.color }}
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity={0.2}>
                  <rect x="4" y="4" width="40" height="40" rx="4" stroke="white" strokeWidth="2" />
                  <circle cx="16" cy="16" r="5" stroke="white" strokeWidth="2" />
                  <path d="M4 32l10-10 8 8 6-6 16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-white/20 text-sm font-medium">Foto volgt</span>
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category badge */}
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: categoryColor[item.category] + "99" }}
              >
                {item.category}
              </div>

              {/* Title on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-1">Bekijk project →</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Wilt u uw eigen foto&apos;s zien? Plaats ze in <code className="text-primary">/public/images/portfolio/</code></p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-primary/40 hover:bg-primary/10 text-primary font-semibold px-8 py-3 rounded transition-all duration-200"
          >
            Bespreek uw project
          </a>
        </div>
      </div>
    </section>
  );
}
