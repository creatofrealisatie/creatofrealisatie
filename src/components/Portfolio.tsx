import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Moderne Badkamer",
    category: "Badkamer",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80&fit=crop",
  },
  {
    id: 2,
    title: "Strakke Eilandkeuken",
    category: "Keuken",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&fit=crop",
  },
  {
    id: 3,
    title: "Walk-in Closet",
    category: "Maatmeubels",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop",
  },
  {
    id: 4,
    title: "Luxe Badkamer Suite",
    category: "Badkamer",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&fit=crop",
  },
  {
    id: 5,
    title: "Open Keuken Design",
    category: "Keuken",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80&fit=crop",
  },
  {
    id: 6,
    title: "Inbouwkasten op Maat",
    category: "Maatmeubels",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80&fit=crop",
  },
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
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category badge */}
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm"
                style={{ backgroundColor: categoryColor[item.category] + "CC" }}
              >
                {item.category}
              </div>

              {/* Title — always visible at bottom, more prominent on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg drop-shadow">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Bekijk project →
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
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
