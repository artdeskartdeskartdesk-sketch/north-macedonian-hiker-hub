import vest1 from "@/assets/vest-1.jpg";
import vest2 from "@/assets/vest-2.jpg";
import vest3 from "@/assets/vest-3.jpg";

export const ORG = {
  name: "Федерација за планинарство на Северна Македонија",
  short: "ФПСМ",
  address:
    "Дом на хуманитарни организации „Даре Џамбаз“, Бул. 11-ти Октомври 42, 1000 Скопје",
  email: "info@fpsm.org.mk",
  phone: "02 316 5540",
  site: "www.fpsm.org.mk",
};

export type Vest = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image?: string;
};

export const VESTI: Vest[] = [
  {
    slug: "korab-2764",
    date: "24.08.2026",
    category: "Акции",
    title: "36-то традиционално искачување на Кораб 2764 м",
    excerpt:
      "ПК „Ај лав хајкинг груп Маседониа“ и ПК „Кораб“ ги повикуваат сите љубители на планината на традиционалното масовно искачување на највисокиот врв во земјата.",
    image: vest1,
  },
  {
    slug: "martin-dameski-skyrunning",
    date: "21.07.2026",
    category: "Натпревари",
    title: "Мартин Дамески петти на Светското првенство во својата категорија",
    excerpt:
      "Од 3 до 5 јули во Arêches-Beaufort, Савоја, Франција се одржа Светското првенство во скајранинг — Мастерс, со одличен настап на нашиот претставник.",
    image: vest2,
  },
  {
    slug: "balkansko-prvenstvo-planinsko-trcanje",
    date: "08.07.2026",
    category: "Натпревари",
    title: "Македонија со подиум на Балканското првенство",
    excerpt:
      "Репрезентацијата на Македонија освои подиум на првото Балканско првенство во планинско трчање во Бајина Башта, Тара, во организација на БМУ.",
  },
  {
    slug: "obuka-vodici-leto-a-standard",
    date: "20.04.2026",
    category: "Обуки",
    title: "Обука за планинарски водичи во летни услови (А стандард)",
    excerpt:
      "Комисијата за планинарски водичи при ФПСМ распишува повик за нова генерација кандидати за лиценца „Планинарски водич“ по А стандард.",
    image: vest3,
  },
  {
    slug: "izborno-sobranie-2026",
    date: "29.04.2026",
    category: "Федерација",
    title: "Повик за предлог-кандидати за Изборно собрание на ФПСМ 2026",
    excerpt:
      "Согласно член 51 од Статутот, Претседателството на ФПСМ ги повикува клубовите членки да достават предлог-кандидати за органите на Федерацијата.",
  },
  {
    slug: "100-godini-skijanje-sarplanina",
    date: "26.02.2026",
    category: "Настани",
    title: "100 години од првото скијање на Шар Планина",
    excerpt:
      "Планинарската и турно-ски акција на врвот Љуботен беше посветена на јубилејот — сто години од првото скијање во Македонија.",
  },
];

export const NASTANI = [
  {
    date: "07–08.03.2026",
    title: "Турно ски куп Пелистер",
    place: "Пелистер, Битола",
    type: "Натпревар",
    status: "Откажан поради недостиг на снег",
  },
  {
    date: "21–22.02.2026",
    title: "Турно школа Љуботен",
    place: "Шар Планина",
    type: "Обука",
    status: "Реализирано",
  },
  {
    date: "10.05.2026",
    title: "Организирани планинарски акции — 150 години од Разловечкото востание",
    place: "Разловци, Малешевија",
    type: "Акција",
    status: "Отворени пријави",
  },
  {
    date: "24.08.2026",
    title: "36-то традиционално искачување на Кораб",
    place: "Кораб, 2764 м",
    type: "Масовна акција",
    status: "Отворени пријави",
  },
  {
    date: "Ноември 2026",
    title: "Државно првенство во натпреварувачко качување на мраз",
    place: "Вртешка, Плачковица",
    type: "Натпревар",
    status: "Најава",
  },
];

export type Komisija = {
  slug: string;
  name: string;
  desc: string;
  zadaci: string[];
};

export const KOMISII: Komisija[] = [
  {
    slug: "statutarno-pravna",
    name: "Статутарно-правна комисија",
    desc: "Статут, правилници и правни акти на Федерацијата.",
    zadaci: [
      "Подготовка и толкување на Статутот и правилниците на ФПСМ.",
      "Разгледување на барањата за зачленување на нови клубови.",
      "Правна помош при усогласување на актите на клубовите членки.",
      "Предлози за одлуки до Претседателството и Собранието.",
    ],
  },
  {
    slug: "planinarski-vodici",
    name: "Комисија за планинарски водичи",
    desc: "Лиценцирање и обука на водичи по А и Б стандард.",
    zadaci: [
      "Организирање обуки за планинарски водичи по стандард А и Б.",
      "Издавање, обновување и евиденција на лиценци.",
      "Водење на националниот регистар на лиценцирани водичи.",
      "Соработка со ЦСО и меѓународните стандарди на UIAA.",
    ],
  },
  {
    slug: "planinarski-pateki",
    name: "Комисија за планинарски патеки",
    desc: "Маркација, стандарди и национален регистар на патеки.",
    zadaci: [
      "Дефинирање стандарди за маркирање и обележување патеки.",
      "Водење на националниот регистар на планинарски патеки.",
      "Координација на акции за чистење и обнова на маркации.",
      "Обука на маркачи и издавање упатства за клубовите.",
    ],
  },
  {
    slug: "planinarski-domovi",
    name: "Комисија за планинарски домови",
    desc: "Состојба, легализација и одржување на домовите.",
    zadaci: [
      "Евиденција на состојбата на планинарските домови и бивци.",
      "Помош при легализација и имотно-правни прашања.",
      "Стандарди за категоризација и услуги во домовите.",
      "Поддршка на клубовите при реновирање и одржување.",
    ],
  },
  {
    slug: "visokogorstvo-ekspedicii",
    name: "Комисија за високогорство и експедиции",
    desc: "Алпинизам, високогорски и странски експедиции.",
    zadaci: [
      "Развој на алпинизмот и високогорското планинарење.",
      "Одобрување и поддршка на националните експедиции.",
      "Школи за зимско планинарење и техники на качување.",
      "Евиденција на успеси и врвови на македонските алпинисти.",
    ],
  },
  {
    slug: "skyrunning",
    name: "Комисија за SKYRUNNING",
    desc: "Планинско трчање, национален календар и репрезентација.",
    zadaci: [
      "Изготвување на националниот календар за планинско трчање.",
      "Правилници за натпревари и рангирање на натпреварувачите.",
      "Избор и подготовка на националната репрезентација.",
      "Соработка со меѓународните скајранинг федерации.",
    ],
  },
  {
    slug: "turno-skijanje",
    name: "Комисија за турно скијање",
    desc: "Турно ски куп, школи и натпреварувачки календар.",
    zadaci: [
      "Организација на Турно ски куп на Северна Македонија.",
      "Школи за турно скијање и лавинска безбедност.",
      "Правилници и котизации за натпреварите.",
      "Соработка со ски центрите и службите за спасување.",
    ],
  },
  {
    slug: "medicinska",
    name: "Медицинска комисија",
    desc: "Здравствени стандарди и планинска медицина.",
    zadaci: [
      "Здравствени стандарди за учество во планинарски активности.",
      "Обуки за прва помош во планински услови.",
      "Препораки за висока планина и аклиматизација.",
      "Медицинска поддршка на натпревари и експедиции.",
    ],
  },
  {
    slug: "zivotna-sredina",
    name: "Комисија за животна средина",
    desc: "Заштита на планинските екосистеми и добри пракси.",
    zadaci: [
      "Промоција на принципите „Не оставај трага“.",
      "Учество во јавни расправи за заштитени подрачја.",
      "Еколошки акции и чистење на планините.",
      "Едукативни програми за клубовите и младите.",
    ],
  },
  {
    slug: "mladi",
    name: "Комисија за млади",
    desc: "Млади планинари, кампови и училишни програми.",
    zadaci: [
      "Организација на летни и зимски кампови за млади.",
      "Училишни програми и школи за планинарство.",
      "Поддршка на младинските секции во клубовите.",
      "Меѓународни размени за млади планинари.",
    ],
  },
  {
    slug: "rekreacija-sport",
    name: "Комисија за рекреација и спорт",
    desc: "Рекреативно планинарење и масовни акции.",
    zadaci: [
      "Координација на масовните планинарски акции.",
      "Промоција на рекреативното планинарење.",
      "Систем на признанија за поминати врвови и патеки.",
      "Соработка со клубовите за заеднички календар.",
    ],
  },
];

export const DOKUMENTI = [
  { name: "Статут на ФПСМ", meta: "Бр. 01-90/5 од 19.10.2024" },
  { name: "Правилник за работа на комисиите", meta: "Бр. 01-44/3 од 29.04.2021" },
  { name: "Правилник на статутарно-правната комисија", meta: "Јануари 2026" },
  { name: "Правилник на Комисијата за планинарски патеки", meta: "Јануари 2026" },
  { name: "Правилник за планинарски водичи", meta: "Интегрирана лиценца" },
  { name: "Пристапница за зачленување на клуб", meta: "Образец" },
  { name: "Барање за категоризација на спортист", meta: "Министерство за спорт" },
];

export type KomDokument = { name: string; url: string };

/** Документи по комисија, преземени од fpsm.org.mk */
export const KOMISIJA_DOKUMENTI: Record<string, KomDokument[]> = {
  "statutarno-pravna": [
    {
      name: "Правилник на Статутарно-правната комисија",
      url: "https://www.fpsm.org.mk/%d0%bf%d1%80%d0%b0%d0%b2%d0%b8%d0%bb%d0%bd%d0%b8%d0%ba-%d0%bd%d0%b0-%d1%81%d1%82%d0%b0%d1%82%d1%83%d1%82%d0%b0%d1%80%d0%bd%d0%be-%d0%bf%d1%80%d0%b0%d0%b2%d0%bd%d0%b0-%d0%ba%d0%be%d0%bc%d0%b8-2/",
    },
  ],
  "planinarski-vodici": [
    {
      name: "Правилник за планинарски водичи при ФПСМ (16.06.2025, пречистен текст)",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2025/09/1.-Правилник-на-КПВ-16.06.2025_пречистен-текст.pdf",
    },
    {
      name: "Правилник за лиценцирање на образовен кадар при КПВ",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2025/09/2.-Правилник-за-лиценцирање-на-образовен-кадар-при-Комисијата-за-планинарски-водичи-на-ФПСМ.pdf",
    },
    {
      name: "Програма за обука на планинарски водичи во летни услови",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2025/09/3.-Програма-за-обука-на-планинарски-водичи-во-летни-услови-во-ФПСМ.pdf",
    },
    {
      name: "Програма за обука на планинарски водичи во зимски услови",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2025/09/4.-Програма-за-обука-на-планинарски-водичи-во-зимски-услови.pdf",
    },
    {
      name: "Протокол за лиценцирање планинарски водичи на ФПСМ",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2025/09/5.-Протокол-за-лиценцирање-планинарски-водичи-на-ФПСМ.pdf",
    },
    {
      name: "Протокол за ментори на приправници за планинарски водичи",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2026/01/Протокол-за-МЕНТОРИ-на-приправници-за-планинарски-водичи-при-ФПСМ.pdf",
    },
    {
      name: "Правилник за организација и водење планинарски акции, походи и маршеви",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2025/09/6.-Правилник-за-организација-и-водење-планинарски-акции-походи-и-маршеви-на-ФПСМ.pdf",
    },
    {
      name: "Дисциплински правилник за водичите на ФПСМ",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2025/09/7.-Дисциплински-правилник-за-водичите-на-ФПСМ-конечен.pdf",
    },
    {
      name: "Регистрирани UIAA планинарски водичи на ФПСМ",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2023/01/1-registrirani-planinarski-vodici-fpsm-18-01-2023-mk.pdf",
    },
    {
      name: "Registered UIAA Mountain Guides at FPSM (English)",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2023/01/1-registered-mountaineering-guides-fpsm-18-01-2023-engl.pdf",
    },
    {
      name: "Движење низ планина во зимски услови",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2021/12/dvizenje-niz-planina-vo-zimski-uslovi.pdf",
    },
    {
      name: "За безбедна посета на планините во зима",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2021/12/za-bezbedna-poseta-na-planinite-vo-zima.pdf",
    },
    {
      name: "Организирање на планинарски акции во зимска сезона",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2021/12/organiziranje-na-planinarski-akcii-vo-zimska-sezona.pdf",
    },
    {
      name: "Препораки за организација на големи традиционални планинарски акции",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2017/04/preporaki-za-organizacija-vo-golemi-tradicionalni-planinarski-akcii.pdf",
    },
    {
      name: "Употреба на мобилни телефони на планина",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2017/04/upotreba-na-mobilni-telefoni-vo-planina.pdf",
    },
    {
      name: "Препораки од КПВ за користење радио комуникации",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2017/05/preporaki-od-kpv-za-koristenje-radio-komunikacii.pdf",
    },
    {
      name: "За сигурна посета на планините",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2018/07/fpsm-za-sigurna-poseta-na-planinite.pdf",
    },
  ],
  "planinarski-pateki": [
    {
      name: "Правилник на Комисијата за планинарски патеки",
      url: "https://www.fpsm.org.mk/%d0%bf%d1%80%d0%b0%d0%b2%d0%b8%d0%bb%d0%bd%d0%b8%d0%ba-%d0%bd%d0%b0-%d0%ba%d0%be%d0%bc%d0%b8%d1%81%d0%b8%d1%98%d0%b0%d1%82%d0%b0-%d0%b7%d0%b0-%d0%bf%d0%bb%d0%b0%d0%bd%d0%b8%d0%bd%d0%b0%d1%80%d1%81/",
    },
    {
      name: "Образец – опис на патека (2022)",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2025/09/OBRAZEC-OPIS-NA-PATEKA-2022-FINAL.docx",
    },
    {
      name: "Закон за планински патеки",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2014/09/ZAKON-ZA-PLANINSKI-PATEKI.pdf",
    },
    {
      name: "Прирачник за маркацисти",
      url: "http://planinarskipateki.mk/wp-content/uploads/2018/01/PRIRACNIK-ZA-MARKACISTI-FINAL.pdf",
    },
    {
      name: "Маркацисти 2018 – листа со контакти",
      url: "https://www.fpsm.org.mk/%d1%81%d0%bf%d0%b8%d1%81%d0%be%d0%ba-%d0%bc%d0%b0%d1%80%d0%ba%d0%b0%d1%86%d0%b8%d1%81%d1%82%d0%b8-2018/",
    },
    {
      name: "Брошура за планинарско-пешачки маркации низ Европа",
      url: "https://www.fpsm.org.mk/%d0%b1%d1%80%d0%be%d1%88%d1%83%d1%80%d0%b0-%d0%b7%d0%b0-%d0%bf%d0%bb%d0%b0%d0%bd%d0%b8%d0%bd%d0%b0%d1%80%d1%81%d0%ba%d0%be-%d0%bf%d0%b5%d1%88%d0%b0%d1%87%d0%ba%d0%b8-%d0%bc%d0%b0%d1%80%d0%ba%d0%b0/",
    },
  ],
  "planinarski-domovi": [
    {
      name: "Правилник на Комисијата за планинарски домови",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2026/01/pravilnik-kpd.pdf",
    },
    {
      name: "Правилник за управување, работење и опремување на планинарските куќи",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2026/01/pravilnik-za-planinarski-kuki-so-vneseni-korekcii-.pdf",
    },
    {
      name: "Формулар за опис на планинарски дом",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2026/01/formular-za-opis-na-pl.dom_.docx",
    },
  ],
  "visokogorstvo-ekspedicii": [
    {
      name: "Правилник за Комисијата за високогорство и експедиционизам",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2024/10/Pravilnik-KV2.pdf",
    },
    {
      name: "Правилник за категоризација",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2024/10/pravilnik-za-kategorizacija.pdf",
    },
    {
      name: "Предлог категоризација за високогорско планинарење",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2024/10/Predlog-Kategorizacija-za-Visokogorsko-planinarenje-1.pdf",
    },
    {
      name: "Критериуми за верификација на високогорски успех (20.02.2025)",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2025/09/Критериуми-за-верификација-на-високогорски-успех-20.02.2025.pdf",
    },
    {
      name: "Формулар за високогорци",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2017/03/ФОРМУЛАР-ВИСОКОГОРЦИ.doc",
    },
  ],
  "turno-skijanje": [
    {
      name: "Правилник на КТС за организирање и одржување натпревари во Македонскиот куп",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2024/12/KTS-pravilnik-2024_1-10.12.2024.pdf",
    },
    {
      name: "Одлука за именување на Комисија за турно скијање",
      url: "https://www.fpsm.org.mk/wp-content/uploads/2025/02/Одлука-за-именување-на-Комисија-за-турно-скијање.pdf",
    },
  ],
  medicinska: [
    {
      name: "Правилник на Медицинската комисија",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2021/04/unnamed-file.pdf",
    },
  ],
  mladi: [
    {
      name: "Правилник на Младинската комисија",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2017/04/pravilnik-mladinska-komisija.pdf",
    },
    {
      name: "Пријава за Младинската комисија",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2017/04/prijava-mladinska-komisija-1.doc",
    },
    {
      name: "Младински планинарски лидери",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2017/04/mladinski-planinarski-lideri.pdf",
    },
  ],
  "rekreacija-sport": [
    {
      name: "Правилник за планинарска ориентација",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2022/04/pravilnik-fpsm-2020.pdf",
    },
    {
      name: "Пријава за Лигата во ориентација",
      url: "http://www.fpsm.org.mk/wp-content/uploads/2022/04/2022-planinarska-orientacija.docx",
    },
  ],
};

export const MEGUNARODNO = [
  { code: "UIAA", name: "Меѓународна унија на планинарски асоцијации" },
  { code: "EUMA", name: "Европска планинарска асоцијација" },
  { code: "BMU", name: "Балканска планинарска унија" },
];
