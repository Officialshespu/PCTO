import { stages } from "../data/stages";

export default function Footer({ navigate }) {
  const visibleStages = stages.filter((stage) => !stage.hidden);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">PCTO Experience</div>
          <p className="footer-sub">
            Il mio percorso di crescita professionale attraverso tre stage formativi.
          </p>
        </div>
        <div className="footer-col">
          <h4>Navigazione</h4>
          {visibleStages.map((s) => (
            <button key={s.id} onClick={() => navigate("stage", s.id)}>
              Stage {s.number} — {s.shortTitle}
            </button>
          ))}
        </div>
        <div className="footer-col">
          <h4>Contatti</h4>
          <a href="mailto:simone.pangrazio@ittterni.org">simone.pangrazio@ittterni.org</a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 PCTO Experience · Simone · Tutti i diritti riservati.
      </div>
    </footer>
  );
}
