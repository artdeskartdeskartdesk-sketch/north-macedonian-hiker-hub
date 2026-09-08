import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/vesti", label: "Новости" },
  { to: "/kalendar", label: "Календар" },
  { to: "/komisii", label: "Комисии" },
  { to: "/klubovi", label: "Членки" },
  { to: "/obuki", label: "ЦСО / Обуки" },
  { to: "/pateki-domovi", label: "Патеки и домови" },
  { to: "/za-nas", label: "За нас" },
  { to: "/kontakt", label: "Контакт" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-deep/40 bg-forest-deep/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-md bg-signal font-display text-lg font-semibold text-signal-foreground">
            ФП
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-wide text-snow">
              ФПСМ
            </span>
            <span className="block text-[11px] text-snow/60">
              Федерација за планинарство на Северна Македонија
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-snow/75 transition-colors hover:text-snow"
              activeProps={{ className: "text-signal" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/klubovi"
            className="hidden rounded-md bg-signal px-4 py-2 font-display text-sm font-medium text-signal-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Зачленување
          </Link>
          <button
            type="button"
            aria-label="Мени"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-snow/25 px-3 py-2 text-sm text-snow xl:hidden"
          >
            Мени
          </button>
        </div>
      </div>

      {open && (
        <nav className="grid gap-1 border-t border-snow/10 px-6 pb-4 pt-2 xl:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-snow/80 hover:bg-snow/10 hover:text-snow"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
