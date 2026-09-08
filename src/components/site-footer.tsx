import { Link } from "@tanstack/react-router";
import { ORG, MEGUNARODNO } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="topo mt-24 bg-forest-deep text-snow">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md bg-signal font-display font-semibold text-signal-foreground">
              ФП
            </span>
            <span className="font-display text-lg">ФПСМ</span>
          </div>
          <p className="mt-4 max-w-[46ch] text-sm text-snow/70">
            {ORG.name} — кровна организација на планинарските клубови, водичите и
            натпреварувачите во земјата.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {MEGUNARODNO.map((m) => (
              <span
                key={m.code}
                title={m.name}
                className="rounded-md border border-snow/20 px-3 py-1 font-display text-xs tracking-wide text-snow/80"
              >
                {m.code}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-snow/50">Навигација</p>
          <ul className="mt-4 space-y-2 text-sm text-snow/80">
            <li>
              <Link to="/vesti" className="hover:text-signal">
                Новости
              </Link>
            </li>
            <li>
              <Link to="/kalendar" className="hover:text-signal">
                Календар на акции
              </Link>
            </li>
            <li>
              <Link to="/komisii" className="hover:text-signal">
                Комисии на ФПСМ
              </Link>
            </li>
            <li>
              <Link to="/klubovi" className="hover:text-signal">
                Членки и зачленување
              </Link>
            </li>
            <li>
              <Link to="/obuki" className="hover:text-signal">
                Центар за стручно оспособување
              </Link>
            </li>
            <li>
              <Link to="/pateki-domovi" className="hover:text-signal">
                Патеки, домови и информации
              </Link>
            </li>
            <li>
              <Link to="/za-nas" className="hover:text-signal">
                Статут и документи
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-snow/50">Контакт</p>
          <address className="mt-4 space-y-1 text-sm not-italic text-snow/80">
            <p>{ORG.address}</p>
            <p className="pt-2">{ORG.phone}</p>
            <p>{ORG.email}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-snow/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-6 py-5 text-xs text-snow/50">
          <p>© {new Date().getFullYear()} ФПСМ · Сите права задржани</p>
          <p>Редизајн на {ORG.site}</p>
        </div>
      </div>
    </footer>
  );
}
