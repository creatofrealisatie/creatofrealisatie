const reviews = [
  {
    name: "Johan de Vries",
    role: "Badkamerrenovatie",
    rating: 5,
    text: "Uitstekend werk! De badkamer is prachtig geworden. Echt vakmanschap van het hoogste niveau. Het team werkte netjes en hield zich aan de planning.",
    initial: "J",
  },
  {
    name: "Maria Bakker",
    role: "Keuken montage",
    rating: 5,
    text: "Mijn nieuwe keuken is precies zoals ik het wilde. Nette afwerking, alles zit op de millimeter. Erg blij met het resultaat en de service.",
    initial: "M",
  },
  {
    name: "Peter Smits",
    role: "Maatmeubels",
    rating: 5,
    text: "De maatkasten in de slaapkamer zijn perfect. Elke millimeter benut en het ziet er fantastisch uit. Aanrader voor iedereen!",
    initial: "P",
  },
  {
    name: "Sandra Jansen",
    role: "Badkamerrenovatie",
    rating: 5,
    text: "Professioneel team, op tijd klaar en binnen budget. Ze luisterden goed naar onze wensen. Echt aan te raden!",
    initial: "S",
  },
  {
    name: "Robert Hendriks",
    role: "Badkamerrenovatie",
    rating: 5,
    text: "Fantastische badkamerrenovatie. Het team werkte netjes en efficiënt. Elke dag werd alles opgeruimd achtergelaten. Top service!",
    initial: "R",
  },
  {
    name: "Lisa van den Berg",
    role: "Keuken montage",
    rating: 5,
    text: "Mooie keuken op maat gemaakt. Precies wat we voor ogen hadden. Creatof denkt echt mee en komt met slimme oplossingen.",
    initial: "L",
  },
  {
    name: "Thomas Visser",
    role: "Maatmeubels",
    rating: 5,
    text: "Creatof Realisatie heeft onze verwachtingen overtroffen. Top vakmanschap en vriendelijk personeel. De wandkast is prachtig!",
    initial: "T",
  },
  {
    name: "Anna Mulder",
    role: "Maatmeubels",
    rating: 5,
    text: "De inbouwkasten zijn geweldig. Veel opbergruimte en ziet er stijlvol uit. Echt een upgrade voor onze woning!",
    initial: "A",
  },
  {
    name: "Michael de Groot",
    role: "Keuken & Badkamer",
    rating: 5,
    text: "Al de tweede keer dat we Creatof inschakelen. Altijd tevreden! Betrouwbaar, netjes en kwalitatief hoogstaand werk.",
    initial: "M",
  },
];

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#C0622A">
    <path d="M8 1l1.854 3.756L14 5.525l-3 2.924.708 4.129L8 10.527l-3.708 2.05L5 8.449 2 5.525l4.146-.769L8 1z" />
  </svg>
);

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Klantervaring
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Wat klanten zeggen
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className="text-white font-semibold">5.0</span>
            <span className="text-gray-500 text-sm">· 500+ beoordelingen</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={`${review.name}-${review.role}`}
              className="bg-card rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => <StarIcon key={i} />)}
              </div>

              {/* Review text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {review.initial}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-gray-500 text-xs">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
