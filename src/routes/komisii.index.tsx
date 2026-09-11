import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { KOMISII } from "@/data/site";

export const Route = createFileRoute("/komisii/")({
  head: () => ({
    meta: [
      { title: "Комисии на ФПСМ" },
      {
        name: "description",
        content:
          "Стручни комисии на Федерацијата за планинарство: водичи, патеки, домови, високогорство, скајранинг, турно скијање, медицина, млади и животна средина.",
      },
      { property: "og:title", content: "Комисии на ФПСМ" },
      {
        property: "og:description",
        content: "Единаесет стручни комисии што ја водат работата на Федерацијата.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Komisii,
});

function Komisii() {
  return (
    <>
      <PageHeader
        eyebrow="Стручни тела"
        title="Комисии на ФПСМ"
        lead="Комисиите работат согласно Правилникот за работа на комисиите и одлуките на Претседателството. Изберете комисија за детали."
      />
      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {KOMISII.map((k, i) => (
          <Link
            key={k.slug}
            to="/komisii/$slug"
            params={{ slug: k.slug }}
            className="card-lift block rounded-lg border border-border bg-card p-6"
          >
            <p className="font-display text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-2 text-xl leading-snug text-primary">{k.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{k.desc}</p>
            <p className="mt-4 text-sm text-signal">Отвори →</p>
          </Link>
        ))}
      </section>
    </>
  );
}
