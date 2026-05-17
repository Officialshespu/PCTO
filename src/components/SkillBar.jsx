import { useState, useEffect } from "react";

export default function SkillBar({ name, value, color = "#6EE7B7", delay = 0 }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(value), 200 + delay);
    return () => clearTimeout(t);
  }, [value, delay]);

  return (
    <div className="s-skill">
      <div className="s-skill-row">
        <span>{name}</span>
        <span className="s-skill-pct">{value}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${width}%`, background: color }} />
      </div>
    </div>
  );
}
