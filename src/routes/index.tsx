import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-planina.jpg";
import { VESTI, NASTANI, KOMISII, MEGUNARODNO } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ФПСМ — Федерација за планинарство на Северна Македонија" },
      {
        name: "description",
        content:
          "Новости, календар на планинарски акции, натпревари, обуки за водичи, клубови членки и документи на Федерацијата за планинарство на Северна Македонија.",
      },
      { property: "og:title", content: "ФПСМ — Федерација за планинарство на Северна Македонија" },
      {
        property: "og:description",
        content:
          "Кровна организација на планинарските клубови, водичите и натпреварувачите во Северна Македонија.",
      },
    ],
  }),
  component: Index,
});

const BRZI = [
  { to: "/kalendar", label: "Календар на акции", desc: "Настани, натпревари и обуки" },
  { to: "/klubovi", label: "Зачленување", desc: "Пристапница за клубови и членови" },
  { to: "/obuki", label: "ЦСО и лиценци", desc: "Обуки за планинарски водичи" },
  { to: "/za-nas", label: "Статут и документи", desc: "Правилници и одлуки" },
] as const;

function Index() {
  const glavna = VESTI[0]!;
  const ostanati = VESTI.slice(1);

  return (
    <>
      {/* ХЕРОЈ */}
      <section className="relative isolate overflow-hidden bg-forest-deep text-snow">
        <img
          src={heroImage}
          alt="Планински гребен на Шар Планина во зори"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/70 to-forest-deep/30" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="eyebrow text-signal">Основана 1948 · UIAA · EUMA · BMU</p>
          <h1 className="mt-4 max-w-[20ch] text-4xl leading-[1.05] md:text-6xl">
            Федерација за планинарство на Северна Македонија
          </h1>
          <p className="mt-5 max-w-[56ch] text-lg text-snow/80">
            Кровна организација на планинарските клубови, водичите, маркацистите и
            натпреварувачите — од Шар Планина и Кораб до Пелистер и Плачковица.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/kalendar"
              className="rounded-md bg-signal px-6 py-3 font-display font-medium text-signal-foreground transition-transform hover:-translate-y-0.5"
            >
              Календар на акции
            </Link>
            <Link
              to="/klubovi"
              className="rounded-md border border-snow/30 px-6 py-3 font-display font-medium text-snow transition-colors hover:bg-snow/10"
            >
              Клубови членки
            </Link>
          </div>

          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-snow/15 bg-snow/15 sm:grid-cols-4">
            {[
              ["60+", "Клубови членки"],
              ["11", "Комисии"],
              ["2764 м", "Кораб — највисок врв"],
              ["3", "Меѓународни унии"],
            ].map(([v, l]) => (
              <div key={l} className="bg-forest-deep/90 px-5 py-5">
                <dt className="font-display text-2xl text-snow">{v}</dt>
                <dd className="mt-1 text-xs text-snow/65">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* БРЗИ ЛИНКОВИ */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BRZI.map((b) => (
            <Link
              key={b.to}
              to={b.to}
              className="card-lift rounded-lg border border-border bg-card p-5"
            >
              <p className="font-display text-lg text-primary">{b.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* НОВОСТИ */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-accent">Новости</p>
            <h2 className="mt-2 text-3xl">Актуелно од Федерацијата</h2>
          </div>
          <Link to="/vesti" className="text-sm text-primary underline-offset-4 hover:underline">
            Сите новости →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="card-lift overflow-hidden rounded-lg border border-border bg-card lg:col-span-2">
            {glavna.image && (
              <img
                src={glavna.image}
                alt={glavna.title}
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-[16/9] w-full object-cover"
              />
            )}
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {glavna.date} · {glavna.category}
              </p>
              <h3 className="mt-3 max-w-[28ch] text-2xl leading-tight">{glavna.title}</h3>
              <p className="mt-3 max-w-[60ch] text-muted-foreground">{glavna.excerpt}</p>
            </div>
          </article>

          <div className="grid gap-4 content-start">
            {ostanati.slice(0, 3).map((v) => (
              <article key={v.slug} className="card-lift rounded-lg border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {v.date} · {v.category}
                </p>
                <h3 className="mt-2 text-lg leading-snug">{v.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* КАЛЕНДАР */}
      <section className="topo bg-forest text-snow">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="eyebrow text-signal">Календар</p>
          <h2 className="mt-2 text-3xl">Наредни акции и натпревари</h2>

          <ol className="mt-10 space-y-6 border-l-2 border-snow/20 pl-6">
            {NASTANI.slice(0, 4).map((n) => (
              <li key={n.title} className="relative">
                <span className="absolute -left-[1.9rem] top-1.5 size-3.5 rounded-full bg-signal ring-4 ring-forest" />
                <p className="font-display text-sm tracking-wide text-signal">{n.date}</p>
                <p className="mt-1 text-lg">{n.title}</p>
                <p className="text-sm text-snow/65">
                  {n.place} · {n.type} · {n.status}
                </p>
              </li>
            ))}
          </ol>

          <Link
            to="/kalendar"
            className="mt-10 inline-block rounded-md border border-snow/30 px-5 py-2.5 text-sm text-snow hover:bg-snow/10"
          >
            Целосен календар
          </Link>
        </div>
      </section>

      {/* КОМИСИИ */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="eyebrow text-accent">Стручни тела</p>
        <h2 className="mt-2 text-3xl">Комисии на ФПСМ</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {KOMISII.slice(0, 6).map((k) => (
            <div key={k.name} className="rounded-lg border border-border bg-card p-5">
              <p className="font-display text-base text-primary">{k.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{k.desc}</p>
            </div>
          ))}
        </div>
        <Link
          to="/komisii"
          className="mt-8 inline-block text-sm text-primary underline-offset-4 hover:underline"
        >
          Сите комисии →
        </Link>
      </section>

      {/* МЕЃУНАРОДНО */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-10">
          <p className="max-w-[40ch] font-display text-xl text-primary">
            ФПСМ е членка на меѓународните планинарски унии
          </p>
          <div className="flex flex-wrap gap-3">
            {MEGUNARODNO.map((m) => (
              <div key={m.code} className="rounded-md border border-border bg-card px-5 py-3">
                <p className="font-display text-lg text-primary">{m.code}</p>
                <p className="text-xs text-muted-foreground">{m.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
