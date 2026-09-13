import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { KOMISII, KOMISIJA_DOKUMENTI, ORG } from "@/data/site";

function vidNaDokument(url: string) {
  const clean = url.split("?")[0] ?? "";
  if (clean.endsWith(".pdf")) return "PDF";
  if (clean.endsWith(".docx") || clean.endsWith(".doc")) return "DOC";
  if (clean.endsWith(".xlsx") || clean.endsWith(".xls")) return "XLS";
  return "ВЕБ";
}

export const Route = createFileRoute("/komisii/$slug")({
  loader: ({ params }) => {
    const komisija = KOMISII.find((k) => k.slug === params.slug);
    if (!komisija) throw notFound();
    return { komisija };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Комисијата не е најдена — ФПСМ" }, { name: "robots", content: "noindex" }],
      };
    }
    const { komisija } = loaderData;
    return {
      meta: [
        { title: `${komisija.name} — ФПСМ` },
        { name: "description", content: komisija.desc },
        { property: "og:title", content: `${komisija.name} — ФПСМ` },
        { property: "og:description", content: komisija.desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: KomisijaNemaNajdena,
  component: KomisijaDetal,
});

function KomisijaNemaNajdena() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-3xl">Комисијата не е најдена</h1>
      <Link to="/komisii" className="mt-6 inline-block text-signal hover:underline">
        ← Сите комисии
      </Link>
    </section>
  );
}

function KomisijaDetal() {
  const { komisija } = Route.useLoaderData();
  const drugi = KOMISII.filter((k) => k.slug !== komisija.slug).slice(0, 6);
  const dokumenti = KOMISIJA_DOKUMENTI[komisija.slug] ?? [];

  return (
    <>
      <PageHeader eyebrow="Стручно тело" title={komisija.name} lead={komisija.desc} />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <Link to="/komisii" className="text-sm text-muted-foreground hover:text-signal">
          ← Сите комисии
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl">Надлежности и задачи</h2>
            <ul className="mt-5 space-y-3">
              {komisija.zadaci.map((z) => (
                <li key={z} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-signal" />
                  <span className="text-sm">{z}</span>
                </li>
              ))}
            </ul>

            {dokumenti.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl">Документи на комисијата</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {dokumenti.length} документи — правилници, програми, протоколи и обрасци.
                </p>
                <ul className="mt-5 divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
                  {dokumenti.map((d) => (
                    <li key={d.url}>
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 px-4 py-4 transition-colors hover:bg-secondary"
                      >
                        <span className="shrink-0 rounded border border-signal/40 px-2 py-1 font-display text-[11px] tracking-wide text-signal">
                          {vidNaDokument(d.url)}
                        </span>
                        <span className="text-sm">{d.name}</span>
                        <span className="ml-auto shrink-0 text-muted-foreground">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 rounded-lg border border-border bg-secondary p-6">
              <h3 className="font-display text-lg text-primary">Контакт со комисијата</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Пишете на{" "}
                <a className="text-signal hover:underline" href={`mailto:${ORG.email}`}>
                  {ORG.email}
                </a>{" "}
                со назнака за оваа комисија, или јавете се на {ORG.phone}.
              </p>
            </div>
          </div>

          <aside>
            <h3 className="font-display text-lg text-primary">Други комисии</h3>
            <ul className="mt-4 space-y-2">
              {drugi.map((k) => (
                <li key={k.slug}>
                  <Link
                    to="/komisii/$slug"
                    params={{ slug: k.slug }}
                    className="block rounded-md border border-border bg-card px-4 py-3 text-sm hover:border-signal"
                  >
                    {k.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
