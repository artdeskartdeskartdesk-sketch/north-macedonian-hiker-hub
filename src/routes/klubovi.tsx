import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/klubovi")({
  head: () => ({
    meta: [
      { title: "Клубови членки и зачленување — ФПСМ" },
      {
        name: "description",
        content:
          "Регистар на планинарски клубови членки на ФПСМ и постапка за зачленување на нов клуб или индивидуален член.",
      },
      { property: "og:title", content: "Клубови членки и зачленување — ФПСМ" },
      {
        property: "og:description",
        content: "Како клуб да стане членка на Федерацијата за планинарство.",
      },
    ],
  }),
  component: Klubovi,
});

const KLUBOVI = [
  { name: "ПК „Кораб“", city: "Скопје" },
  { name: "ПК „Ај лав хајкинг груп Маседониа“", city: "Скопје" },
  { name: "ПСК „Аргентус Моунт“", city: "Тетово" },
  { name: "КК „Астибо“", city: "Штип" },
];

const CEKORI = [
  "Одлука на органите на клубот за пристапување кон ФПСМ.",
  "Доставување пристапница со статут, решение од Централен регистар и список на членови.",
  "Разгледување на барањето од Статутарно-правната комисија.",
  "Одлука на Претседателството и упис во регистарот на членки.",
];

function Klubovi() {
  return (
    <>
      <PageHeader
        eyebrow="Членство"
        title="Клубови членки и зачленување"
        lead="ФПСМ обединува над 60 планинарски и качувачки клубови од целата држава."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl">Дел од клубовите членки</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KLUBOVI.map((k) => (
            <div key={k.name} className="rounded-lg border border-border bg-card p-5">
              <p className="font-display text-lg text-primary">{k.name}</p>
              <p className="text-sm text-muted-foreground">{k.city}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Целосниот регистар на клубови членки се води во архивата на Федерацијата и се ажурира по
          секое Собрание.
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
