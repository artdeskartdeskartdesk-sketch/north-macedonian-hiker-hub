import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { KOMISII } from "@/data/site";

export const Route = createFileRoute("/komisii")({
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
        lead="Комисиите работат согласно Правилникот за работа на комисиите и одлуките на Претседателството."
      />
      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {KOMISII.map((k, i) => (
          <article key={k.name} className="card-lift rounded-lg border border-border bg-card p-6">
            <p className="font-display text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-2 text-xl leading-snug text-primary">{k.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{k.desc}</p>
          </article>
        ))}
      </section>
    </>
  );
}
