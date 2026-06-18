```typescript
import { ArrowRight, CalendarDays, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

    const content = {
      "name": "Local Service Studio",
      "headline": "Built for visitors who decide quickly and quietly",
      "summary": "create a landing page for my coacching businees",
      "audience": "The primary users implied by the prompt and selected app archetype.",
      "cta": "Book a Free Call",
      "heroNote": "A focused first screen, clear proof, and one obvious next step for visitors.",
      "theme": "Coastal Blue",
      "heroImage": "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1400&q=80",
      "heroImageAlt": "Distributed team working",
      "aboutImage": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
      "aboutImageAlt": "Bright product workspace",
      "proof": [
        "Fast to understand",
        "Easy to trust",
        "Built for action"
      ],
      "about": "This page introduces the business with a human voice, a clear offer, and a simple path toward the next step. It keeps the first screen focused so visitors can quickly decide whether this feels right for them.",
      "services": [
        [
          "Focused Offer",
          "A clear service card that explains the main value without jargon."
        ],
        [
          "Personal Guidance",
          "A second offer for people who want support, direction, or a tailored next step."
        ],
        [
          "Ongoing Support",
          "A third offer for longer-term help, maintenance, or deeper work."
        ]
      ],
      "problems": [
        "Visitors scan quickly and leave when the offer is unclear.",
        "Important details are often buried below the first screen.",
        "The next action needs to feel obvious on mobile."
      ],
      "steps": [
        [
          "Discover",
          "A sharp opening section explains who this is for and why it matters."
        ],
        [
          "Trust",
          "Proof, process, and personal context remove hesitation."
        ],
        [
          "Book",
          "One clear call to action stays available across the page."
        ]
      ],
      "testimonials": [
        [
          "Maya R.",
          "The page made the offer clear in seconds. I knew exactly what to do next."
        ],
        [
          "Jordan P.",
          "It feels polished without being noisy. The layout makes the business easy to trust."
        ],
        [
          "Sam K.",
          "The mobile flow is direct, warm, and built around conversion."
        ]
      ]
    } as const;

    type Step = readonly [string, string];
    type Service = readonly [string, string];
    type Testimonial = readonly [string, string];

    function Nav() {
      return (
        <header className="sticky top-0 z-30 border-b border-black/10 bg-[#eef7f8]/90 backdrop-blur">
          <nav data-tb-section="nav" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <a href="#top" data-tb-anchor="nav.logo" data-tb-kind="nav" className="font-serif text-xl font-bold tracking-normal text-[#0b2b3c]">
              {content.name}
            </a>
            <div className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
              <a href="#about" data-tb-anchor="nav.about" data-tb-kind="link" className="hover:text-slate-950">About</a>
              <a href="#services" data-tb-anchor="nav.services" data-tb-kind="link" className="hover:text-slate-950">Services</a>
              <a href="#process" data-tb-anchor="nav.process" data-tb-kind="link" className="hover:text-slate-950">Process</a>
              <a href="#testimonials" data-tb-anchor="nav.testimonials" data-tb-kind="link" className="hover:text-slate-950">Testimonials</a>
            </div>
            <a
              href="#contact"
              data-tb-anchor="nav.cta"
              data-tb-kind="cta"
              className="inline-flex items-center gap-2 rounded-full bg-[#0b2b3c] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#164863]"
            >
              <CalendarDays className="h-4 w-4" />
              {content.cta}
            </a>
          </nav>
        </header>
      );
    }

    function Hero() {
      return (
        <section id="top" data-tb-section="hero" className="mx-auto grid min-h-[calc(100vh-76px)] max-w-6xl items-center gap-10 px-5 py-10 md:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7dd3fc]/40 bg-white/70 px-3 py-1 text-sm font-semibold text-[#0369a1]">
              <Sparkles className="h-4 w-4" />
              Website ready for {content.audience}
            </div>
            <h1 data-tb-anchor="hero.headline" data-tb-kind="text" className="font-serif text-5xl font-bold leading-[1.02] tracking-normal text-[#0b2b3c] md:text-7xl">
              {content.headline}
            </h1>
            <p data-tb-anchor="hero.subtitle" data-tb-kind="text" className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
              {content.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                data-tb-anchor="hero.cta"
                data-tb-kind="cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#38bdf8] px-6 py-3 text-base font-bold text-[#082f49] shadow-lg shadow-slate-900/10 transition hover:bg-[#0ea5e9]"
              >
                {content.cta}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-base font-semibold text-slate-800 transition hover:bg-white"
              >
                See how it works
              </a>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {content.proof.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#047857]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#0b2b3c] shadow-2xl shadow-slate-900/15">
            <img
              data-tb-anchor="hero.image"
              data-tb-kind="image"
              src={content.heroImage}
              alt={content.name}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b3c] via-[#0b2b3c]/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="rounded-2xl bg-white/92 p-5 shadow-xl backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0369a1]">Why it works</p>
                <p data-tb-anchor="hero.note" data-tb-kind="text" className="mt-2 text-lg font-semibold leading-7 text-slate-900">{content.heroNote}</p>
              </div>
            </div>
          </div>
        </section>
      );
    }

    function About() {
      return (
        <section id="about" data-tb-section="about" className="border-y border-black/10 bg-[#ffffff]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] bg-[#bae6fd]">
              <img
                src={content.aboutImage}
                alt={content.aboutImageAlt}
                className="h-full min-h-[340px] w-full object-cover mix-blend-multiply opacity-90"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0369a1]">About</p>
              <h2 className="mt-3 font-serif text-4xl font-bold tracking-normal text-[#0b2b3c] md:text-5xl">
                A steady place to set down what has been heavy.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">{content.about}</p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Sessions are conversational, respectful, and centered on what matters in your real life.
              </p>
            </div>
          </div>
        </section>
      );
    }

    function Services() {
      return (
        <section id="services" data-tb-section="services" className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0369a1]">Services</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-normal text-[#0b2b3c] md:text-5xl">
              Support that feels clear, private, and human.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {content.services.map((service: Service) => (
              <article key={service[0]} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#bae6fd] text-[#0b2b3c]">
                  <CheckCircle2 className="h-6 w-6 text-[#047857]" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{service[0]}</h3>
                <p className="mt-3 leading-7 text-slate-700">{service[1]}</p>
              </article>
            ))}
          </div>
        </section>
      );
    }

    function Process() {
      return (
        <section id="process" data-tb-section="process" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0369a1]">How it works</p>
              <h2 className="mt-3 font-serif text-4xl font-bold tracking-normal text-[#0b2b3c]">
                A simple path from first impression to action.
              </h2>
            </div>
            <div className="grid gap-4">
              {content.steps.map((step: Step, index) => (
                <article key={step[0]} className="grid gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:grid-cols-[56px_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b2b3c] text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">{step[0]}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{step[1]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      );
    }

    function Testimonials() {
      return (
        <section id="testimonials" data-tb-section="testimonials" className="bg-[#0b2b3c] text-white">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#67e8f9]">Testimonials</p>
              <h2 className="mt-3 font-serif text-4xl font-bold tracking-normal md:text-5xl">
                Real words from people who felt the difference.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {content.testimonials.map((testimonial: Testimonial) => (
                <article key={testimonial[0]} className="rounded-2xl border border-white/10 bg-white/10 p-6">
                  <Quote className="h-7 w-7 text-[#67e8f9]" />
                  <p className="mt-5 leading-7 text-white/90">{testimonial[1]}</p>
                  <p className="mt-6 font-bold text-white">{testimonial[0]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      );
    }

    function Contact() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitMessage, setSubmitMessage] = useState('');

      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        // In a real application, you would send this data to a backend API.
        // For this example, we'll simulate a successful submission after a delay.
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', { name, email, phone });

        setIsSubmitting(false);
        setSubmitMessage('Thank you for your message! We will be in touch soon.');
        setName('');
        setEmail('');
        setPhone('');
      };

      return (
        <section id="contact" data-tb-section="contact" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-900/10 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0369a1]">Final CTA</p>
              <h2 data-tb-anchor="contact.headline" data-tb-kind="text" className="mt-3 font-serif text-4xl font-bold tracking-normal text-[#0b2b3c] md:text-5xl">
                Ready to turn attention into a real conversation?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                Keep the next step simple and visible. A clear call, a short promise, and a warm handoff make this page easy to act on.
              </p>
            </div>
            <div className="flex flex-col items-center md:justify-end">
              <form onSubmit={handleSubmit} className="w-full space-y-4 md:w-auto">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                  data-tb-anchor="contact.form.name"
                  data-tb-kind="input"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                  data-tb-anchor="contact.form.email"
                  data-tb-kind="input"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                  data-tb-anchor="contact.form.phone"
                  data-tb-kind="input"
                />
                <button
                  type="submit"
                  data-tb-anchor="contact.form.submit"
                  data-tb-kind="cta"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#38bdf8] px-7 py-4 text-base font-bold text-[#082f49] shadow-lg shadow-slate-900/10 transition hover:bg-[#0ea5e9] disabled:opacity-50 sm:w-auto"
                >
                  {isSubmitting ? 'Submitting...' : content.cta}
                  <CalendarDays className="h-5 w-5" />
                </button>
              </form>
              {submitMessage && (
                <p className="mt-4 text-sm text-green-600">{submitMessage}</p>
              )}
            </div>
          </div>
        </section>
      );
    }

    export default function App() {
      return (
        <main>
          <Nav />
          <Hero />
          <About />
          <Services />
          <Process />
          <Testimonials />
          <Contact />
        </main>
      );
    }
```