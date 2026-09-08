export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="topo bg-forest text-snow">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="eyebrow text-signal">{eyebrow}</p>
        <h1 className="mt-3 max-w-[24ch] text-4xl leading-tight md:text-5xl">{title}</h1>
        {lead && <p className="mt-4 max-w-[58ch] text-lg text-snow/75">{lead}</p>}
      </div>
    </section>
  );
}
