import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/obuki")({
  head: () => ({
    meta: [
      { title: "ЦСО — обуки и лиценци за планинарски водичи — ФПСМ" },
      {
        name: "description",
        content:
          "Центар за стручно оспособување при ФПСМ: обуки за планинарски водичи по А и Б стандард, лиценцирање на образовен кадар и обуки за маркацисти.",
      },
      { property: "og:title", content: "ЦСО — обуки и лиценци — ФПСМ" },
      {
        property: "og:description",
        content: "Обуки за планинарски водичи, маркацисти и образовен кадар.",
      },
    ],
  }),
  component: Obuki,
});

const PROGRAMI = [
  {
    name: "Планинарски водич — А стандард (летни услови)",
    desc: "Основна обука за водење групи во летни услови: ориентација, безбедност, прва помош и водичка етика.",
    tag: "Летен циклус",
  },
  {
    name: "Планинарски водич — Б стандард (зимски услови)",
    desc: "Надградба за зимски терен: лавинска безбедност, техники со дереза и цепин, зимско бивакување.",
    tag: "Зимски циклус",
  },
  {
    name: "Лиценцирање на образовен кадар",
    desc: "Обука за инструктори и предавачи ангажирани во програмите на Центарот за стручно оспособување.",
    tag: "Инструктори",
  },
  {
    name: "Маркацисти",
    desc: "Обука за обележување и одржување на планинарски патеки според европските стандарди за маркација.",
    tag: "Патеки",
  },
];

function Obuki() {
  return (
    <>
      <PageHeader
        eyebrow="Центар за стручно оспособување"
        title="Обуки, лиценци и едукација"
        lead="ЦСО при ФПСМ спроведува верификувани програми и издава интегрирана лиценца „Планинарски водич“."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {PROGRAMI.map((p) => (
            <article key={p.name} className="card-lift rounded-lg border border-border bg-card p-6">
              <span className="rounded-md bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
                {p.tag}
              </span>
              <h2 className="mt-4 text-xl leading-snug text-primary">{p.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-accent/40 bg-accent/10 p-6">
          <h2 className="text-xl text-primary">Премин кон интегрирана лиценца</h2>
          <p className="mt-2 max-w-[70ch] text-sm text-muted-foreground">
            Постојните водичи го продолжуваат образованието согласно известувањето на Комисијата за
            планинарски водичи и преминуваат кон интегрираната лиценца „Планинарски водич“.
          </p>
        </div>
      </section>
    </>
  );
}
