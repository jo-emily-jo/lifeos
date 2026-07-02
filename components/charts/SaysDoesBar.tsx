/** Says (dust) vs Does (umber) comparison bars. */
export function SaysDoesBar({ says, does }: { says: number; does: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Bar value={says} color="#8FA0B6" />
      <Bar value={does} color="#BE8557" />
    </div>
  );
}

function Bar({ value, color }: { value: number; color: string }) {
  return (
    <div className="h-[5px] overflow-hidden rounded-sm bg-[rgba(236,230,216,0.06)]">
      <div
        className="h-full rounded-sm transition-[width] duration-500"
        style={{ width: `${value}%`, background: color }}
      />
    </div>
  );
}
