const InstagramLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="30%" stopColor="#DD2A7B" />
        <stop offset="65%" stopColor="#8134AF" />
        <stop offset="100%" stopColor="#515BD4" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="44" height="44" rx="12" stroke="url(#ig-gradient)" strokeWidth="3" fill="none" />
    <circle cx="24" cy="24" r="9" stroke="url(#ig-gradient)" strokeWidth="3" fill="none" />
    <circle cx="35" cy="13" r="3" fill="url(#ig-gradient)" />
  </svg>
);

export default function Instagram() {
  return (
    <section className="py-24 bg-[#0E0E0E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
          Sociale media
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Volg ons op Instagram
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
          Bekijk onze nieuwste projecten, renovaties en maatmeubels rechtstreeks op
          Instagram. Laat u inspireren door ons werk.
        </p>

        {/* Big CTA card */}
        <a
          href="https://www.instagram.com/creatofrealisatie"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col items-center gap-6 bg-card border border-white/10 hover:border-white/20 rounded-3xl px-12 py-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 w-full sm:w-auto"
        >
          {/* Animated Instagram logo */}
          <div className="transition-transform duration-300 group-hover:scale-110">
            <InstagramLogo />
          </div>

          {/* Handle */}
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F58529] group-hover:via-[#DD2A7B] group-hover:to-[#8134AF] transition-all duration-300">
              @creatofrealisatie
            </div>
            <div className="text-gray-500 text-sm mt-1">instagram.com/creatofrealisatie</div>
          </div>

          {/* Button */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all duration-200 group-hover:shadow-lg group-hover:shadow-pink-900/30">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
            Bekijk ons werk op Instagram
          </div>
        </a>
      </div>
    </section>
  );
}
