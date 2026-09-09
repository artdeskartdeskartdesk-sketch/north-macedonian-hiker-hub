import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ORG } from "@/data/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Контакт — ФПСМ" },
      {
        name: "description",
        content:
          "Контакт со Федерацијата за планинарство на Северна Македонија: адреса, телефон, е-пошта и формулар за прашања.",
      },
      { property: "og:title", content: "Контакт — ФПСМ" },
      { property: "og:description", content: "Обратете се до Федерацијата за планинарство." },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <>
      <PageHeader
        eyebrow="Контакт"
        title="Обратете се до Федерацијата"
        lead="За членство, обуки, патеки, домови или соработка."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl">Канцеларија</h2>
          <address className="mt-4 space-y-2 not-italic text-muted-foreground">
            <p className="text-foreground">{ORG.name}</p>
            <p>{ORG.address}</p>
            <p>Телефон: {ORG.phone}</p>
            <p>Е-пошта: {ORG.email}</p>
          </address>
          <div className="mt-6 rounded-lg border border-border bg-card p-5">
            <p className="font-display text-lg text-primary">Работно време</p>
            <p className="mt-1 text-sm text-muted-foreground">Понеделник – петок, 09:00 – 16:00</p>
          </div>
          <div className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 p-5">
            <p className="font-display text-lg">Итен повик во планина</p>
            <p className="mt-1 text-sm text-muted-foreground">
              单 112 — центар за итни повици и планинско спасување.
            </p>
          </div>
        </div>

        <form
          className="rounded-lg border border-border bg-card p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-2xl">Прашање до Федерацијата</h2>
          <div className="mt-5 grid gap-4">
            <label className="grid gap-1.5 text-sm">
              Име и презиме
              <input
                type="text"
                required
                className="rounded-md border border-input bg-background px-3 py-2 outline-none focus:border-ring"
              />
            </label>
            <label className="grid gap-1.5 text-sm">
              Е-пошта
              <input
                type="email"
                required
                className="rounded-md border border-input bg-background px-3 py-2 outline-none focus:border-ring"
              />
            </label>
            <label className="grid gap-1.5 text-sm">
              Порака
              <textarea
                rows={5}
                required
                className="rounded-md border border-input bg-background px-3 py-2 outline-none focus:border-ring"
              />
            </label>
            <button
              type="submit"
              className="rounded-md bg-primary px-5 py-2.5 font-display font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Испрати
            </button>
            <p className="text-xs text-muted-foreground">
              Формуларот сè уште не праќа пораки — можам да го поврзам со е-пошта на ваше барање.
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
