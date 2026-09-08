import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="topo mt-24 bg-forest-deep text-snow">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md bg-signal font-display font-semibold text-signal-foreground">
              ФП
            </span>
            <span className="font-display text-lg">ФПСМ</span>
          </div>
          <p className="mt-4 max-w-[42ch] text-sm text-snow/70">
            Федерација за планинарски спорт на Северна Македонија — кровна организација на
            планинарските клубови, водичите и натпреварувачите во земјата.
          </p>
        </div>

        <div>
          <p className="eyebrow text-snow/50">Навигација</p>
          <ul className="mt-4 space-y-2 text-sm text-snow/80">
            <li>
              <Link to="/vesti" className="hover:text-signal">
                Вести
              </Link>
            </li>
            <li>
              <Link to="/kalendar" className="hover:text-signal">
                Календар на настани
              </Link>
            </li>
            <li>
              <Link to="/klubovi" className="hover:text-signal">
                Клубови членки
              </Link>
            </li>
            <li>
              <Link to="/obuki" className="hover:text-signal">
                Обуки и лиценци
              </Link>
            </li>
            <li>
              <Link to="/za-nas" className="hover:text-signal">
                За нас и документи
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-snow/50">Контакт</p>
          <address className="mt-4 space-y-1 text-sm not-italic text-snow/80">
            <p>ул. Кузман Јосифовски Питу бр. 17</p>
            <p>1000 Скопје, Северна Македонија</p>
            <p className="pt-2">+389 2 3246 000</p>
            <p>info@fpsm.org.mk</p>
          </address>
          <div className="mt-4 flex gap-2">
            {["ФБ", "ИГ", "ЈТ"].map((s) => (
              <span
                key={s}
                className="grid size-9 place-items-center rounded-md border border-snow/20 text-xs text-snow/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-snow/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-6 py-5 text-xs text-snow/50">
          <p>© {new Date().getFullYear()} ФПСМ · Сите права задржани</p>
          <p>Податоците на страницата се демонстративни</p>
        </div>
      </div>
    </footer>
  );
}
