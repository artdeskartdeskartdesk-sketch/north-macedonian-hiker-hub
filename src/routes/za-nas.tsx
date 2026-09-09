import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { DOKUMENTI, MEGUNARODNO } from "@/data/site";

export const Route = createFileRoute("/za-nas")({
  head: () => ({
    meta: [
      { title: "За Федерацијата, водство и документи — ФПСМ" },
      {
        name: "description",
        content:
          "За Федерацијата за планинарство на Северна Македонија: улога, органи и водство, Статут, правилници и меѓународно членство во UIAA, EUMA и BMU.",
      },
      { property: "og:title", content: "За Федерацијата — ФПСМ" },
      {
        property: "og:description",
        content: "Органи, статут, правилници и меѓународно членство на ФПСМ.",
      },
    ],
  }),
  component: ZaNas,
});

const ORGANI = [
  { name: "Собрание", desc: "Највисок орган составен од претставници на клубовите членки." },
  { name: "Претседателство", desc: "Ги спроведува одлуките на Собранието и ги формира комисиите." },
  { name: "Претседател", desc: "Ја претставува и застапува Федерацијата." },
  { name: "Надзорен одбор", desc: "Врши контрола на материјално-финансиското работење." },
];

function ZaNas() {
  return (
    <>
      <PageHeader
        eyebrow="За нас"
        title="Федерација за планинарство на Северна Македонија"
        lead="Национален сојуз на планинарските клубови што ги координира планинарството, алпинизмот, спортското качување, скајранингот и турно скијањето во земјата."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Улога и дејност</h2>
            <p className="mt-4 max-w-[62ch] text-muted-foreground">
              ФПСМ ги обединува планинарските клубови, ја води евиденцијата на лиценцирани
              планинарски водичи и маркацисти, го утврдува годишниот календар на акции и натпревари,
              се грижи за планинарските патеки и домови и ја претставува земјата во меѓународните
              планинарски организации.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {MEGUNARODNO.map((m) => (
                <div key={m.code} className="rounded-md border border-border bg-card px-4 py-3">
                  <p className="font-display text-primary">{m.code}</p>
                  <p className="text-xs text-muted-foreground">{m.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl">Органи и водство</h2>
            <div className="mt-4 grid gap-3">
              {ORGANI.map((o) => (
                <div key={o.name} className="rounded-lg border border-border bg-card p-5">
                  <p className="font-display text-lg text-primary">{o.name}</p>
                  <p className="text-sm text-muted-foreground">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="eyebrow text-accent">Документи</p>
          <h2 className="mt-2 text-3xl">Статут, правилници и обрасци</h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {DOKUMENTI.map((d) => (
              <li
                key={d.name}
                className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card px-5 py-4"
              >
                <span>
                  <span className="block font-medium text-primary">{d.name}</span>
                  <span className="block text-xs text-muted-foreground">{d.meta}</span>
                </span>
                <span className="shrink-0 rounded-md border border-border px-3 py-1 text-xs text-muted-foreground">
                  PDF
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Документите се достапни по барање во архивата на Федерацијата.
          </p>
        </div>
      </section>
    </>
  );
}
