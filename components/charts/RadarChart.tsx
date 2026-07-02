import type { Driver } from "@/types";

/** Pentagon radar: stated (dust, dashed) vs revealed (umber, filled). */
export function RadarChart({ drivers }: { drivers: Driver[] }) {
  const cx = 150,
    cy = 145,
    R = 105,
    N = drivers.length;
  const ang = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / N;
  const pt = (i: number, v: number) => {
    const r = (R * v) / 100;
    return [cx + r * Math.cos(ang(i)), cy + r * Math.sin(ang(i))];
  };
  const poly = (fn: (d: Driver) => number) =>
    drivers.map((d, i) => pt(i, fn(d)).map(Math.round).join(",")).join(" ");
  const rings = [0.25, 0.5, 0.75, 1].map((f) =>
    drivers
      .map((_, i) => [cx + R * f * Math.cos(ang(i)), cy + R * f * Math.sin(ang(i))].map(Math.round).join(","))
      .join(" ")
  );

  return (
    <svg viewBox="0 0 300 300" className="h-[260px] w-[260px] md:h-[300px] md:w-[300px]">
      {rings.map((r, i) => (
        <polygon key={i} points={r} fill="none" stroke="rgba(236,230,216,0.07)" />
      ))}
      {drivers.map((_, i) => {
        const [x, y] = pt(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(236,230,216,0.07)" />;
      })}
      <polygon points={poly((d) => d.stated)} fill="rgba(143,160,182,0.10)" stroke="#8FA0B6" strokeWidth={1.5} strokeDasharray="4 3" />
      <polygon points={poly((d) => d.revealed)} fill="rgba(190,133,87,0.16)" stroke="#BE8557" strokeWidth={2} />
      {drivers.map((d, i) => {
        const lr = R + 20;
        const x = cx + lr * Math.cos(ang(i));
        const y = cy + lr * Math.sin(ang(i)) + 4;
        const anchor = Math.cos(ang(i)) > 0.3 ? "start" : Math.cos(ang(i)) < -0.3 ? "end" : "middle";
        return (
          <text key={i} x={x} y={y} textAnchor={anchor} fill="#ADA593" fontSize={11} fontFamily="var(--font-mono)" letterSpacing="0.08em">
            {d.key.toUpperCase()}
          </text>
        );
      })}
    </svg>
  );
}
