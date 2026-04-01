"use client";

import { useState } from "react";

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.2 3.6a1 1 0 01-.274 1.055L7.5 9.5a11.05 11.05 0 004.95 4.95l1.162-1.654a1 1 0 011.055-.274l3.6 1.2A1 1 0 0119 14.72V17a2 2 0 01-2 2C7.163 19 1 12.837 1 5a2 2 0 012-2z" stroke="#C0622A" strokeWidth="1.5" fill="none" />
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="1" y="4" width="18" height="13" rx="2" stroke="#C0622A" strokeWidth="1.5" />
    <path d="M1 7l9 6 9-6" stroke="#C0622A" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);


export default function Contact() {
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    email: "",
    typeWerk: "",
    bericht: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#111111] border border-white/10 focus:border-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors duration-200 text-sm";

  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Neem contact op
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Vraag een offerte aan
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col justify-center gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contactgegevens</h3>
              <div className="space-y-5">
                {[
                  { icon: <PhoneIcon />, label: "Telefoon", value: "06 84 64 35 96" },
                  { icon: <EmailIcon />, label: "E-mail", value: "creatofrealisatie@gmail.com" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">{item.label}</div>
                      <div className="text-white font-medium text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promise */}
            <div className="bg-card rounded-2xl p-6 border border-white/5">
              <h4 className="text-white font-semibold mb-3">Onze belofte</h4>
              <ul className="space-y-2">
                {[
                  "Reactie binnen 24 uur",
                  "Vrijblijvende offerte",
                  "Vaste prijs, geen verrassingen",
                  "Professioneel & betrouwbaar",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="#C0622A" strokeWidth="1.5" />
                      <path d="M5 8l2 2 4-4" stroke="#C0622A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-card rounded-2xl p-12 border border-primary/20 text-center flex flex-col items-center gap-4 h-full justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 16l5 5 11-11" stroke="#C0622A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Bedankt!</h3>
                <p className="text-gray-400 max-w-sm">
                  Uw aanvraag is ontvangen. We nemen binnen 24 uur contact met u op.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 border border-white/5 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5" htmlFor="naam">
                      Naam <span className="text-primary">*</span>
                    </label>
                    <input
                      id="naam"
                      name="naam"
                      type="text"
                      required
                      placeholder="Jan de Vries"
                      value={form.naam}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5" htmlFor="telefoon">
                      Telefoonnummer <span className="text-primary">*</span>
                    </label>
                    <input
                      id="telefoon"
                      name="telefoon"
                      type="tel"
                      required
                      placeholder="+31 6 12345678"
                      value={form.telefoon}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5" htmlFor="email">
                    E-mailadres <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jan@voorbeeld.nl"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5" htmlFor="typeWerk">
                    Type werk <span className="text-primary">*</span>
                  </label>
                  <select
                    id="typeWerk"
                    name="typeWerk"
                    required
                    value={form.typeWerk}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="badkamer">Badkamer renovatie</option>
                    <option value="keuken">Keuken montage</option>
                    <option value="maatmeubels">Maatmeubels op maat</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5" htmlFor="bericht">
                    Bericht
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={4}
                    placeholder="Beschrijf uw project of stelt uw vraag..."
                    value={form.bericht}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-primary/20"
                >
                  Offerte aanvragen
                </button>

                <p className="text-center text-xs text-gray-600">
                  Door te verzenden gaat u akkoord met onze privacybeleid. Geen spam, beloofd.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
