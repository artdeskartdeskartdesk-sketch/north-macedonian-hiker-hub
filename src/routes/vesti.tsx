import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { VESTI } from "@/data/site";

export const Route = createFileRoute("/vesti")({
  head: () => ({
    meta: [
      { title: "Новости — ФПСМ" },
      {
        name: "description",
        content:
          "Актуелни новости, соопштенија и повици од Федерацијата за планинарство на Северна Македонија и нејзините комисии.",
      },
      { property: "og:title", content: "Новости — ФПСМ" },
      {
        property: "og:description",
        content: "Соопштенија, повици и извештаи од планинарските акции и натпревари.",
      },
    ],
  }),
  component: Vesti,
});

function Vesti() {
  return (
    <>
      <PageHeader
        eyebrow="Новости"
        title="Соопштенија, повици и извештаи"
        lead="Актуелности од Федерацијата, комисиите и клубовите членки."
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-14 md:grid-cols-2 lg:grid-cols-3">
        {VESTI.map((v) => (
          <article
            key={v.slug}
            className="card-lift flex flex-col overflow-hidden rounded-lg border border-border bg-card"
          >
            {v.image && (
              <img
                src={v.image}
                alt={v.title}
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
            )}
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {v.date} · {v.category}
              </p>
              <h2 className="mt-2 text-xl leading-snug">{v.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{v.excerpt}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
