const navItems = [
  "Home",
  "Players",
  "Sports",
  "Academy",
  "Equipment",
  "Sponsors",
  "About Us",
  "Contact",
];

const featurePills = [
  { title: "Table Tennis", subtitle: "Compete. Improve. Achieve." },
  { title: "Carrom", subtitle: "Focus. Strategy. Fun." },
  { title: "Chess", subtitle: "Think. Plan. Win." },
  { title: "Athlete Support", subtitle: "Nutrition & Physio." },
  { title: "AI in Sports", subtitle: "Analyze. Improve. Perform." },
];

const playerCards = [
  { name: "Divyansh Srivastava", sport: "Table Tennis", rank: "National Rank #5" },
  { name: "Jatin Pundir", sport: "Table Tennis", rank: "State Rank #1" },
  { name: "Ananya Singh", sport: "Table Tennis", rank: "State Rank #3" },
];

const sportCards = [
  { title: "Table Tennis", details: "National & State Players", tag: "Upcoming Academy" },
  { title: "Carrom", details: "Uttarakhand Tournament Conducted", tag: "Completed" },
  { title: "Chess", details: "Uttarakhand Tournament Coming Soon", tag: "Join Waitlist" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1300px] p-4 md:p-6">
      <section className="rounded-[26px] border border-orange-500/20 bg-[#071326]/95 p-4 shadow-[0_20px_100px_rgba(0,0,0,0.5)] md:p-6">
        <header className="mb-4 flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-[#08152a]/90 px-4 py-3 text-sm md:mb-6 md:px-6">
          <div className="flex min-w-[180px] items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg border border-orange-500/40 bg-[#0b1b32] text-sm font-bold text-orange-400">
              TT
            </div>
            <div>
              <p className="font-display text-2xl leading-none tracking-wide text-orange-400">
                TEHRI TITANS
              </p>
              <p className="text-xs text-slate-400">Live and Play with Passion.</p>
            </div>
          </div>
          <nav className="flex flex-1 flex-wrap justify-center gap-4 text-slate-300">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="transition hover:text-orange-400"
              >
                {item}
              </a>
            ))}
          </nav>
          <button className="rounded-full border border-orange-500/40 bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-2 font-semibold text-slate-900 transition hover:brightness-110">
            Join the Team
          </button>
        </header>

        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#091730] via-[#091a36] to-[#07162f] p-6 md:p-8">
            <div className="pointer-events-none absolute -right-12 top-8 h-64 w-64 rounded-full border border-orange-400/30 bg-orange-500/10 blur-sm" />
            <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full border border-blue-400/20 bg-blue-500/10 blur-sm" />
            <p className="font-display text-6xl leading-none tracking-wide text-white md:text-7xl">
              TEHRI <span className="text-gradient-orange">TITANS</span>
            </p>
            <p className="mt-2 text-3xl italic text-slate-200">Live and Play with Passion.</p>
            <p className="mt-4 max-w-xl text-slate-300">
              A platform for sports, growth and community. Building talent,
              promoting teamwork and supporting athletes on and off the field.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-2.5 font-semibold text-slate-900">
                Meet Our Players
              </button>
              <button className="rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-slate-100">
                Become a Sponsor
              </button>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">125+ Players</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">3 Sports</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">5 States</div>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-[#0b1b32]/90 p-5">
            <p className="text-xs uppercase tracking-widest text-orange-400">Live Match</p>
            <p className="mt-2 text-sm text-slate-400">Uttarakhand League</p>
            <div className="mt-4 rounded-xl border border-white/10 bg-[#09162a] p-4">
              <p className="text-center text-3xl font-bold">2 - 1</p>
              <p className="mt-1 text-center text-sm text-slate-400">Titans vs Warriors</p>
            </div>
            <p className="mt-5 text-xs uppercase tracking-widest text-orange-400">This Month Impact</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">₹2,30,000</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">120+ Athletes</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">18 Events</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">2.5M+ Reach</div>
            </div>
          </aside>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-5">
          {featurePills.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#0a1a32]/90 p-3"
            >
              <p className="font-semibold text-orange-300">{item.title}</p>
              <p className="text-xs text-slate-400">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr]">
          <section className="rounded-2xl border border-white/10 bg-[#0a1a32]/90 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-2xl tracking-wide">Featured Players</h2>
              <a href="#" className="text-xs text-orange-300">View All</a>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {playerCards.map((player, index) => (
                <article key={player.name} className="rounded-xl border border-white/10 bg-[#0b203f]/90 p-3">
                  <div className="mb-2 h-24 rounded-lg bg-gradient-to-br from-orange-500/35 to-blue-500/20" />
                  <p className="font-semibold">{index + 1}. {player.name}</p>
                  <p className="text-xs text-slate-400">{player.sport}</p>
                  <p className="mt-2 inline-block rounded-full border border-orange-500/30 px-2 py-1 text-[11px] text-orange-300">
                    {player.rank}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#0a1a32]/90 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-2xl tracking-wide">Our Sports</h2>
              <a href="#" className="text-xs text-orange-300">View All</a>
            </div>
            <div className="grid gap-3">
              {sportCards.map((sport) => (
                <article key={sport.title} className="rounded-xl border border-white/10 bg-[#0b203f]/90 p-3">
                  <div className="mb-2 h-20 rounded-lg bg-gradient-to-br from-amber-500/35 to-slate-700/40" />
                  <p className="font-semibold">{sport.title}</p>
                  <p className="text-xs text-slate-400">{sport.details}</p>
                  <p className="mt-2 inline-block rounded-full border border-blue-400/30 px-2 py-1 text-[11px] text-blue-200">
                    {sport.tag}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#0a1a32]/90 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-2xl tracking-wide">Our Achievements</h2>
              <a href="#" className="text-xs text-orange-300">View All</a>
            </div>
            <div className="grid grid-cols-2 gap-3 text-center text-sm">
              <div className="rounded-xl border border-white/10 bg-[#0b203f]/90 p-4"><p className="text-2xl font-bold text-orange-300">14+</p><p>Awards Won</p></div>
              <div className="rounded-xl border border-white/10 bg-[#0b203f]/90 p-4"><p className="text-2xl font-bold text-orange-300">125+</p><p>Registered Players</p></div>
              <div className="rounded-xl border border-white/10 bg-[#0b203f]/90 p-4"><p className="text-2xl font-bold text-orange-300">3</p><p>Sports Covered</p></div>
              <div className="rounded-xl border border-white/10 bg-[#0b203f]/90 p-4"><p className="text-2xl font-bold text-orange-300">5</p><p>States Represented</p></div>
            </div>
          </section>
        </div>

        <footer className="mt-4 rounded-2xl border border-orange-500/20 bg-gradient-to-r from-[#0c1c35] via-[#101f3e] to-[#1c1308] p-5 md:flex md:items-center md:justify-between">
          <div>
            <p className="font-display text-4xl leading-none tracking-wide">Be a Part of Our Journey</p>
            <p className="text-slate-400">Support young talent. Build champions.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-2.5 font-semibold text-slate-900">
              Become a Sponsor
            </button>
            <button className="rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-slate-100">
              Contact Us
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}
