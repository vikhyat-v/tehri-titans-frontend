import {
  ArrowRight,
  Award,
  Brain,
  Calendar,
  Dumbbell,
  MapPin,
  Shield,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const navItems = ["Home", "Players", "Sports", "Academy", "Equipment", "Sponsors", "About"];

const focusAreas = [
  { title: "Table Tennis", subtitle: "Compete, improve, achieve", icon: Trophy },
  { title: "Carrom", subtitle: "Precision and strategy", icon: Target },
  { title: "Chess", subtitle: "Think, plan, dominate", icon: Brain },
  { title: "Athlete Support", subtitle: "Nutrition and recovery", icon: Shield },
];

const players = [
  { name: "Divyansh Srivastava", title: "National Rank #5", stat: "47 Wins" },
  { name: "Jatin Pundir", title: "State Rank #1", stat: "31 Wins" },
  { name: "Ananya Singh", title: "State Rank #3", stat: "29 Wins" },
];

const events = [
  { name: "Uttarakhand Open", status: "Completed", date: "15 Feb 2026" },
  { name: "Titans Training Camp", status: "Registration Open", date: "03 May 2026" },
  { name: "State Chess League", status: "Coming Soon", date: "14 Jun 2026" },
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-2xl font-bold text-white md:text-3xl">{value}</p>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1250px] px-4 py-5 md:px-6 md:py-8">
      <div className="rounded-[28px] border border-orange-400/20 bg-[#071226] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.55)] md:p-6">
        <header className="glass mb-6 flex flex-wrap items-center gap-4 rounded-2xl p-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg border border-orange-400/50 bg-orange-500/15 text-sm font-bold text-orange-300">
              TT
            </div>
            <div>
              <p className="font-display text-2xl leading-none tracking-wide text-white">TEHRI TITANS</p>
              <p className="text-xs text-slate-400">Live and Play with Passion</p>
            </div>
          </div>
          <nav className="mx-auto flex flex-wrap justify-center gap-5 text-sm text-slate-300">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-orange-300">
                {item}
              </a>
            ))}
          </nav>
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-300 px-4 py-2 font-semibold text-slate-900">
            Join Team <ArrowRight size={16} />
          </button>
        </header>

        <section className="grid gap-4 lg:grid-cols-[1.85fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0c1b35] via-[#0a1730] to-[#071226] p-7 md:p-10">
            <div className="absolute -right-16 top-5 h-64 w-64 rounded-full border border-orange-300/25 bg-orange-400/10 blur-[2px]" />
            <div className="absolute -left-10 -bottom-10 h-44 w-44 rounded-full border border-blue-300/15 bg-blue-400/10 blur-[2px]" />
            <p className="font-display text-6xl leading-none tracking-wide text-white md:text-8xl">
              TEHRI <span className="text-gradient-orange">TITANS</span>
            </p>
            <p className="mt-3 text-2xl italic text-slate-200 md:text-3xl">Live and Play with Passion.</p>
            <p className="mt-5 max-w-2xl text-slate-300">
              Tehri Titans is a high-performance sports platform focused on talent growth, tournament exposure,
              and holistic athlete development through coaching, analytics, and community support.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-300 px-5 py-2.5 font-semibold text-slate-900">
                Meet Our Players
              </button>
              <button className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-slate-100 transition hover:bg-white/10">
                Become a Sponsor
              </button>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <Stat label="Athletes in Network" value="125+" />
              <Stat label="Sports Disciplines" value="04" />
              <Stat label="States Reached" value="05" />
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-[#0b1831] p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-orange-300">Live Match</p>
              <span className="rounded-full bg-orange-500/20 px-2 py-1 text-[10px] text-orange-200">68&apos;</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#091427] p-4">
              <p className="text-sm text-slate-400">Uttarakhand League</p>
              <p className="mt-3 text-center text-4xl font-bold">2 - 1</p>
              <p className="text-center text-sm text-slate-400">Titans vs Warriors</p>
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-orange-300">Monthly Impact</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">₹2,30,000+ Raised</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">120+ Athletes</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">18 Events</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">2.5M Reach</div>
            </div>
          </aside>
        </section>

        <section className="mt-4 grid gap-3 md:grid-cols-4">
          {focusAreas.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-[#0b1831] p-4">
              <item.icon className="mb-3 text-orange-300" size={20} />
              <p className="font-semibold text-white">{item.title}</p>
              <p className="text-sm text-slate-400">{item.subtitle}</p>
            </article>
          ))}
        </section>

        <section className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr]">
          <article className="rounded-3xl border border-white/10 bg-[#0b1831] p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-3xl tracking-wide">Featured Players</h2>
              <a href="#" className="text-sm text-orange-300">View all</a>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {players.map((player, index) => (
                <div key={player.name} className="rounded-2xl border border-white/10 bg-[#0d2141] p-3">
                  <div className="mb-3 flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/30 via-orange-500/10 to-blue-500/20">
                    <Users size={24} className="text-orange-200" />
                  </div>
                  <p className="font-semibold text-white">{index + 1}. {player.name}</p>
                  <p className="text-xs text-slate-400">{player.title}</p>
                  <p className="mt-2 inline-flex rounded-full border border-orange-400/30 px-2 py-1 text-[11px] text-orange-200">
                    {player.stat}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0b1831] p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-3xl tracking-wide">Upcoming</h2>
              <Calendar size={18} className="text-orange-300" />
            </div>
            <div className="space-y-3">
              {events.map((event) => (
                <div key={event.name} className="rounded-2xl border border-white/10 bg-[#0d2141] p-3">
                  <p className="font-semibold text-white">{event.name}</p>
                  <p className="text-xs text-slate-400">{event.date}</p>
                  <p className="mt-2 inline-flex rounded-full border border-blue-300/30 px-2 py-1 text-[11px] text-blue-200">
                    {event.status}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0b1831] p-5">
            <h2 className="font-display text-3xl tracking-wide">Achievements</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-[#0d2141] p-4">
                <Award className="mx-auto mb-1 text-orange-300" size={18} />
                <p className="text-xl font-bold text-white">14+</p>
                <p className="text-xs text-slate-400">Awards Won</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0d2141] p-4">
                <Users className="mx-auto mb-1 text-orange-300" size={18} />
                <p className="text-xl font-bold text-white">125+</p>
                <p className="text-xs text-slate-400">Registered Players</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0d2141] p-4">
                <Dumbbell className="mx-auto mb-1 text-orange-300" size={18} />
                <p className="text-xl font-bold text-white">4</p>
                <p className="text-xs text-slate-400">Sports Covered</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0d2141] p-4">
                <MapPin className="mx-auto mb-1 text-orange-300" size={18} />
                <p className="text-xl font-bold text-white">5</p>
                <p className="text-xs text-slate-400">States Reached</p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-5 rounded-3xl border border-orange-400/25 bg-gradient-to-r from-[#0d203e] via-[#132a53] to-[#291b0b] p-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="font-display text-5xl leading-none tracking-wide text-white">Be Part of Our Journey</p>
            <p className="mt-2 text-slate-300">Support young talent, build champions, and shape future athletes.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-300 px-5 py-2.5 font-semibold text-slate-900">
              Become a Sponsor <ArrowRight size={16} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-slate-100">
              Contact Us <Sparkles size={16} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
