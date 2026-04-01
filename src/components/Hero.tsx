import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=85&fit=crop"
          alt="Luxe gerenoveerde badkamer"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-[#111111]/50" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent" />
      </div>

      {/* Terracotta glow accents */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Meer dan 15 jaar vakmanschap
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Uw woning,{" "}
            <span className="text-primary">
              onze
              <br />
              vakmanschap
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
            Badkamerrenovaties, keukens en maatmeubels op maat — uitgevoerd met
            precisie en oog voor detail.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded text-base transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/20"
            >
              Vraag offerte aan
            </a>
            <a
              href="#portfolio"
              className="border border-white/30 hover:border-primary/50 text-white hover:text-primary font-semibold px-8 py-4 rounded text-base transition-all duration-200"
            >
              Bekijk ons werk →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="animate-bounce"
        >
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
          <rect x="7" y="5" width="2" height="5" rx="1" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
