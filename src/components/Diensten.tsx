import Image from "next/image";

const services = [
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80&fit=crop",
    imageAlt: "Moderne badkamer renovatie",
    title: "Badkamer Renovatie",
    description:
      "Van concept tot oplevering verzorgen wij uw complete badkamerrenovatie. Tegels, sanitair, installatie — alles tot in de puntjes afgewerkt.",
    features: ["Volledige renovatie", "Tegels & sanitair", "Elektrische vloerverwarming", "Inloopdouche & bad"],
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&fit=crop",
    imageAlt: "Moderne keuken montage",
    title: "Keuken Montage",
    description:
      "Wij plaatsen en installeren uw droomkeuken vakkundig. Of het nu een standaard of volledig maatwerk keuken is — wij zorgen voor een perfecte montage.",
    features: ["Maatwerk & standaard", "Aanrechtbladen op maat", "Apparatuur installatie", "Tegelwerk & afzuiging"],
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    imageAlt: "Elegante maatmeubels op maat",
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
              className="relative bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Image header */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                {/* Terracotta top border accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Content */}
              <div className="p-8">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
