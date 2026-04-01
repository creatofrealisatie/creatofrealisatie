const Logo = () => (
  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="16" width="6" height="6" fill="#C0622A" transform="rotate(45 3 19)" />
    <text x="14" y="18" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14" fill="#C0622A" letterSpacing="1">CREATOF</text>
    <text x="14" y="32" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="10" fill="#FFFFFF" letterSpacing="3">REALISATIE</text>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
    <path d="M13 10h2.5l-.5 2H13v6h-2v-6H9v-2h2V9a3 3 0 013-3h2v2h-1.5A.5.5 0 0013 8.5V10z" fill="currentColor" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo />
            <p className="text-gray-500 text-sm mt-4 max-w-xs leading-relaxed">
              Uw specialist in badkamerrenovaties, keukeninstallaties en maatmeubels. Vakmanschap met meer dan 15 jaar ervaring.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/creatofrealisatie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary text-gray-400 flex items-center justify-center transition-all duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com/creatofrealisatie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary text-gray-400 flex items-center justify-center transition-all duration-200"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigatie</h4>
            <ul className="space-y-3">
              {[
                { href: "#diensten", label: "Diensten" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#reviews", label: "Reviews" },
                { href: "#contact", label: "Contact" },
                { href: "#", label: "Privacy" },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-primary text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0684643596" className="text-gray-500 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 3.5A1.5 1.5 0 013.5 2h1.21a.75.75 0 01.71.512l.9 2.7a.75.75 0 01-.206.791L5.25 6.75a8.288 8.288 0 003.712 3.713l.748-1.866a.75.75 0 01.791-.206l2.7.9A.75.75 0 0113 10V11.5A1.5 1.5 0 0111.5 13C5.701 13 1 8.299 1 2.5" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  06 84 64 35 96
                </a>
              </li>
              <li>
                <a href="mailto:creatofrealisatie@gmail.com" className="text-gray-500 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M1 5l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  creatofrealisatie@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Creatof Realisatie. Alle rechten voorbehouden.
          </p>
          <p className="text-gray-700 text-xs">
            Vakmanschap van het hoogste niveau
          </p>
        </div>
      </div>
    </footer>
  );
}
