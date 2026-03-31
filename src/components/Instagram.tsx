const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
);

const placeholderPosts = [
  { id: 1, bg: "#1E1A17" },
  { id: 2, bg: "#171A1E" },
  { id: 3, bg: "#1A1E17" },
  { id: 4, bg: "#1E171A" },
  { id: 5, bg: "#171E1A" },
  { id: 6, bg: "#1A171E" },
];

export default function Instagram() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              Volg ons
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Instagram</h2>
          </div>
          <a
            href="https://instagram.com/creatofrealisatie"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-white/10 hover:border-primary/40 px-6 py-3 rounded-full text-white hover:text-primary transition-all duration-200 group"
          >
            <span className="text-primary group-hover:scale-110 transition-transform duration-200">
              <InstagramIcon />
            </span>
            <span className="font-semibold">@creatofrealisatie</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {placeholderPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/creatofrealisatie"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-lg overflow-hidden group"
              style={{ backgroundColor: post.bg }}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <InstagramIcon />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com/creatofrealisatie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E1306C] to-[#C13584] hover:from-[#C13584] hover:to-[#833AB4] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
          >
            <InstagramIcon />
            Volg ons op Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
