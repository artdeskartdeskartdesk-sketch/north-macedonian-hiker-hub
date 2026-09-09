import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/pateki-domovi")({
  head: () => ({
    meta: [
      { title: "Планинарски патеки, домови и информации — ФПСМ" },
      {
        name: "description",
        content:
          "Планинарски патеки и маркација, планинарски домови во Македонија и практични информации за безбедно движење во планина.",
      },
      { property: "og:title", content: "Патеки, домови и информации — ФПСМ" },
      {
        property: "og:description",
        content: "Маркација на патеки, мрежа на планинарски домови и совети за безбедност.",
      },
    ],
  }),
  component: PatekiDomovi,
});

const PLANINI = [
  { name: "Кораб", h: "2764 м", note: "Највисок врв во земјата, традиционално масовно искачување" },
  { name: "Шар Планина", h: "2748 м", note: "Титов Врв и Љуботен, турно ски терени" },
  { name: "Пелистер", h: "2601 м", note: "Национален парк, молика и Големо Езеро" },
  { name: "Јакупица (Солунска Глава)", h: "2540 м", note: "Караџица, високогорски терени" },
  { name: "Плачковица", h: "1754 м", note: "Вртешка — качување на мраз" },
  { name: "Скопска Црна Гора", h: "1651 м", note: "Систематизирани и GPS-евидентирани патеки" },
];

function PatekiDomovi() {
  return (
    <>
      <PageHeader
        eyebrow="Планини"
        title="Патеки, домови и информации за планинари"
        lead="Комисијата за планинарски патеки и Комисијата за планинарски домови работат на стандардизација, маркација и одржување на планинската инфраструктура."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl">Планински масиви</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLANINI.map((p) => (
            <article key={p.name} className="card-lift rounded-lg border border-border bg-card p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl text-primary">{p.name}</h3>
                <span className="font-display text-sm text-accent">{p.h}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="topo bg-forest text-snow">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="eyebrow text-signal">Патеки</p>
            <h2 className="mt-2 text-3xl">Маркација по европски стандард</h2>
            <ul className="mt-6 space-y-3 text-snow/80">
              <li>Национален ден на планинарските патеки — акција на сите клубови членки.</li>
              <li>Брошура за планинарско-пешачки маркации низ Европа (Еразмус+ / ЕУМА).</li>
              <li>GPS-евиденција и систематизација на патеките по масиви.</li>
              <li>Повици за нови маркацисти и обуки за обележување.</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-signal">Домови</p>
            <h2 className="mt-2 text-3xl">Мрежа на планинарски домови</h2>
            <ul className="mt-6 space-y-3 text-snow/80">
              <li>Анализа на состојбата и управувањето со планинарските објекти.</li>
              <li>Легализација на домовите — Караџица, Кулата на Титов Врв и други објекти.</li>
              <li>Соработка со Владата, општините и националните паркови.</li>
              <li>Работна група ДОМОВИ во рамките на Еразмус+ и ЕУМА.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl">Информации за планинари</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Пред тргнување", "Проверете прогноза, најавете ја акцијата и понесете доволно вода и топла облека."],
            ["Во планина", "Движете се по маркирани патеки, не оставајте отпад и почитувајте ги режимите на националните паркови."],
            ["Во случај на несреќа", "Јавете се на 112 и на најблиската служба за планинско спасување; останете на местото ако е безбедно."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-lg border border-border bg-card p-5">
              <h3 className="text-lg text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
