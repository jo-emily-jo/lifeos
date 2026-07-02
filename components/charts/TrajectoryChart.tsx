/** Two extrapolated trajectories: drift (oxblood, dashed) vs chosen (umber). */
export function TrajectoryChart({
  drift,
  chosen,
}: {
  drift: number[];
  chosen: number[];
}) {
  const xs = [40, 180, 300, 440];
  const pts = (ys: number[]) => xs.map((x, i) => `${x},${ys[i]}`).join(" ");
  const labels = ["NOW", "1 YR", "3 YR", "10 YR"];

  return (
    <svg viewBox="0 0 480 240" className="block h-auto w-full">
      <line x1={40} y1={200} x2={460} y2={200} stroke="rgba(236,230,216,0.12)" />
      <line x1={40} y1={30} x2={40} y2={200} stroke="rgba(236,230,216,0.12)" />
      <polyline points={pts(drift)} fill="none" stroke="#C06A5C" strokeWidth={2.5} strokeDasharray="5 4" />
      <polyline points={pts(chosen)} fill="none" stroke="#BE8557" strokeWidth={2.5} />
      {xs.map((x, i) => (
        <circle key={`d${i}`} cx={x} cy={drift[i]} r={3.5} fill="#C06A5C" />
      ))}
      {xs.map((x, i) => (
        <circle key={`c${i}`} cx={x} cy={chosen[i]} r={3.5} fill="#BE8557" />
      ))}
      {labels.map((l, i) => (
        <text key={l} x={xs[i]} y={222} textAnchor="middle" fill="#ADA593" fontSize={11} fontFamily="var(--font-mono)">
          {l}
        </text>
      ))}
      <text x={324} y={56} fill="#BE8557" fontSize={11} fontFamily="var(--font-mono)">
        break the loop
      </text>
      <text x={300} y={182} fill="#C06A5C" fontSize={11} fontFamily="var(--font-mono)">
        drift path
      </text>
    </svg>
  );
}
