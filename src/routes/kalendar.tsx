import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { NASTANI } from "@/data/site";

export const Route = createFileRoute("/kalendar")({
  head: () => ({
    meta: [
      { title: "Календар на акции и натпревари — ФПСМ" },
      {
        name: "description",
        content:
          "Календар на планинарски акции, натпревари во турно скијање, скајранинг и качување на мраз, обуки и масовни искачувања во Северна Македонија.",
      },
      { property: "og:title", content: "Календар на акции и натпревари — ФПСМ" },
      {
        property: "og:description",
        content: "Годишен календар на планинарски акции, натпревари и обуки.",
      },
    ],
  }),
  component: Kalendar,
});

function Kalendar() {
  return (
    <>
      <PageHeader
        eyebrow="Календар"
        title="Календар на акции, натпревари и обуки"
        lead="Годишниот календар се утврдува од Претседателството на ФПСМ во соработка со комисиите и клубовите членки."
      />

      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary">
              <tr className="font-display">
                <th className="px-5 py-4">Датум</th>
                <th className="px-5 py-4">Настан</th>
                <th className="px-5 py-4 hidden md:table-cell">Локација</th>
                <th className="px-5 py-4">Статус</th>
              </tr>
            </thead>
            <tbody>
              {NASTANI.map((n) => (
                <tr key={n.title} className="border-t border-border bg-card align-top">
                  <td className="whitespace-nowrap px-5 py-4 font-display text-accent">{n.date}</td>
                  <td className="px-5 py-4">
                    <p className="font-medium">{n.title}</p>
                    <p className="text-xs text-muted-foreground">{n.type}</p>
                  </td>
                  <td className="hidden px-5 py-4 text-muted-foreground md:table-cell">{n.place}</td>
                  <td className="px-5 py-4 text-muted-foreground">{n.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Клубовите членки ги пријавуваат своите акции преку Комисијата за рекреација и спорт за да
          бидат внесени во официјалниот календар.
        </p>
      </section>
    </>
  );
}
