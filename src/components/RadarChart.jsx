export default function RadarChart({ data, size = 320 }) {
  const cx = size / 2, cy = size / 2, r = size * 0.38;
  const n = data.length;
  const angle = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const pt = (i, pct) => ({
    x: cx + r * pct * Math.cos(angle(i)),
    y: cy + r * pct * Math.sin(angle(i)),
  });
  const gridPts = (pct) =>
    data.map((_, i) => pt(i, pct)).map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[0.25, 0.5, 0.75, 1].map((g) => (
        <polygon
          key={g}
          points={gridPts(g)}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}
      {data.map((_, i) => {
        const p = pt(i, 1);
        return (
          <line
            key={i}
            x1={cx} y1={cy} x2={p.x} y2={p.y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        );
      })}
      <polygon
        points={data.map((d, i) => { const p = pt(i, d.value / 100); return `${p.x},${p.y}`; }).join(" ")}
        fill="rgba(110,231,183,0.15)"
        stroke="#6EE7B7"
        strokeWidth="2"
      />
      {data.map((d, i) => {
        const p = pt(i, d.value / 100);
        const label = pt(i, 1.18);
        return (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4" fill="#6EE7B7" />
            <text
              x={label.x} y={label.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fill="#6B7A99"
              fontFamily="DM Sans, sans-serif"
            >
              {d.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
