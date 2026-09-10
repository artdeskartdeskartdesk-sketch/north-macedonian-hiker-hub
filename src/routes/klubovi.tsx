import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/page-header";
import { KLUBOVI_DRUGI, KLUBOVI_SKOPJE, type Klub } from "@/data/klubovi";

export const Route = createFileRoute("/klubovi")({
  head: () => ({
    meta: [
      { title: "Членки на ФПСМ — планинарски клубови" },
      {
        name: "description",
        content:
          "Регистар на планинарските и качувачките клубови членки на ФПСМ од Скопје и другите градови, со претседател, адреса и контакт, плус постапка за зачленување.",
      },
      { property: "og:title", content: "Членки на ФПСМ — планинарски клубови" },
      {
        property: "og:description",
        content:
          "Список на клубови членки на Федерацијата за планинарски спортови на Северна Македонија со контакт податоци.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Klubovi,
});

const CEKORI = [
  "Одлука на органите на клубот за пристапување кон ФПСМ.",
  "Доставување пристапница со статут, решение од Централен регистар и список на членови.",
  "Разгледување на барањето од Статутарно-правната комисија.",
  "Одлука на Претседателството и упис во регистарот на членки.",
];

function KlubKarta({ k, index }: { k: Klub; index: number }) {
  return (
    <article className="card-hover flex gap-4 rounded-lg border border-border bg-card p-5">
      <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-muted">
        {k.logo ? (
          <img
            src={k.logo}
            alt={`Лого на ${k.name}`}
            loading="lazy"
            className="size-full object-contain p-1"
          />
        ) : (
          <span className="font-display text-sm text-muted-foreground">{index}</span>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-lg leading-tight text-primary">{k.name}</h3>
        <p className="text-sm text-muted-foreground">{k.city}</p>
        <dl className="mt-3 space-y-1 text-sm">
          {k.president && (
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Претседател:</dt>
              <dd>{k.president}</dd>
            </div>
          )}
          {k.address && (
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Адреса:</dt>
              <dd className="break-words">{k.address}</dd>
            </div>
          )}
          {k.phone && (
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Тел.:</dt>
              <dd>{k.phone}</dd>
            </div>
          )}
          {k.email && (
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Е-пошта:</dt>
              <dd className="break-all">
                <a className="hover:text-signal" href={`mailto:${k.email}`}>
                  {k.email}
                </a>
              </dd>
            </div>
          )}
          {k.web && (
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Веб:</dt>
              <dd className="break-all">
                <a
                  className="text-signal hover:underline"
                  href={k.web}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {k.web.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}

function match(k: Klub, q: string) {
  if (!q) return true;
  const hay = [k.name, k.president, k.city, k.address, k.email].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase().trim());
}

function Klubovi() {
  const [q, setQ] = useState("");

  const skopje = useMemo(() => KLUBOVI_SKOPJE.filter((k) => match(k, q)), [q]);
  const drugi = useMemo(() => KLUBOVI_DRUGI.filter((k) => match(k, q)), [q]);
  const vkupno = KLUBOVI_SKOPJE.length + KLUBOVI_DRUGI.length;

  return (
    <>
      <PageHeader
        eyebrow="Членство"
        title="Членки на ФПСМ"
        lead={`Регистар на ${vkupno} планинарски и качувачки клубови членки на Федерацијата, од Скопје и од другите градови.`}
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-signal">Пребарување</p>
            <h2 className="mt-1 text-2xl">Најди клуб</h2>
          </div>
          <label className="w-full max-w-sm">
            <span className="sr-only">Пребарај клуб</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Име на клуб, град или претседател…"
              className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-signal"
            />
          </label>
        </div>

        <h3 className="mt-12 font-display text-xl">
          Клубови од Скопје{" "}
          <span className="text-muted-foreground">({skopje.length})</span>
        </h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skopje.map((k, i) => (
            <KlubKarta key={k.name} k={k} index={i + 1} />
          ))}
        </div>
        {skopje.length === 0 && (
          <p className="mt-4 text-sm text-muted-foreground">Нема резултати во Скопје.</p>
        )}

        <h3 className="mt-14 font-display text-xl">
          Клубови од другите градови{" "}
          <span className="text-muted-foreground">({drugi.length})</span>
        </h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {drugi.map((k, i) => (
            <KlubKarta key={k.name} k={k} index={i + 1} />
          ))}
        </div>
        {drugi.length === 0 && (
          <p className="mt-4 text-sm text-muted-foreground">Нема резултати во другите градови.</p>
        )}

        <p className="mt-8 text-sm text-muted-foreground">
          Податоците се ажурираат по секое Собрание. За промена на контакт податоци, известете ја
          канцеларијата на Федерацијата.
        </p>
      </section>

      <section className="topo bg-forest text-snow">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="eyebrow text-signal">Постапка</p>
          <h2 className="mt-2 text-3xl">Зачленување во ФПСМ</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {CEKORI.map((c, i) => (
              <li key={c} className="rounded-lg border border-snow/15 bg-snow/5 p-5">
                <span className="font-display text-signal">Чекор {i + 1}</span>
                <p className="mt-2 text-snow/85">{c}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-snow/70">
            Прашања за членство: <span className="text-signal">info@fpsm.org.mk</span>
          </p>
        </div>
      </section>
    </>
  );
}
