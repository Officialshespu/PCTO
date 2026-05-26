import { stages } from "../data/stages";
import Footer from "../components/Footer";

export default function Home({ navigate }) {
  const visibleStages = stages.filter((stage) => !stage.hidden);
  const acquiredSkillCount = visibleStages.reduce((total, stage) => total + stage.skills.length, 0);

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" style={{ padding: "0 1rem" }}>
          <div>
            <p className="hero-eyebrow">Portfolio FSL 25-26</p>
            <h1 className="hero-title">
              Esperienza <em>FSL</em>
            </h1>
            <p className="hero-body">
              studente appassionato di tutto ciò che riguarda il mondo scientifico. Benvenuto nel mio portfolio FSL —
              il racconto di tre esperienze professionali che hanno segnato la mia crescita.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">3</span>
                <span className="stat-label">Stage</span>
              </div>
              <div className="stat">
                <span className="stat-num">420h</span>
                <span className="stat-label">Formazione</span>
              </div>
              <div className="stat">
                <span className="stat-num">{acquiredSkillCount}</span>
                <span className="stat-label">Competenze</span>
              </div>
            </div>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => navigate("stage", 1)}>
                Scopri il Percorso →
              </button>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-avatar">👤</div>
            <div className="profile-name">Simone</div>
            <div className="profile-role">Studente · Sviluppatore Junior</div>
            <div className="profile-tags">
              <span className="tag green">System Admin</span>
              <span className="tag blue">Reti Wireless</span>
              <span className="tag pink">Access Point</span>
            </div>
            <div className="quick-line">
              <div className="ql-item"><strong>La Coruña</strong>Stage 1</div>
              <div className="ql-item"><strong>Terni</strong>Stage 2 e 3</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chi sono */}
      <section className="section">
        <div className="section-header">
          <p className="section-label">Chi Sono</p>
          <h2 className="section-title">Un percorso di crescita reale</h2>
        </div>
        <p style={{ color: "var(--muted)", lineHeight: 1.8, maxWidth: 700, marginBottom: "1rem" }}>
          Sono uno studente guidato da una forte passione per il mondo scientifico e da un'innata curiosità verso il funzionamento e la realizzazione delle cose. Nel mio percorso ho esplorato diverse sfaccettature dell'informatica, maturando competenze pratiche nello sviluppo di servizi lato server e nell'amministrazione di sistema (system administration).
        </p>
      </section>

      {/* Preview stage */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <p className="section-label">Il Mio Percorso</p>
          <h2 className="section-title">Tre esperienze formative</h2>
        </div>
        <div className="timeline">
          {visibleStages.map((s) => (
            <div
              key={s.id}
              className="tl-card"
              onClick={() => navigate("stage", s.id)}
              style={{ borderLeft: `3px solid ${s.color}20` }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `-4px 0 0 ${s.color}`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div className="tl-num" style={{ color: s.color }}>{s.number}</div>
              <div className="tl-body">
                <h3>{s.shortTitle}</h3>
                <p className="tl-company" style={{ color: s.color }}>{s.title}</p>
                <p className="tl-period">{s.period}</p>
                <div className="tl-tags">
                  {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <div className="tl-arrow">→</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button className="btn-primary" onClick={() => navigate("stage", 1)}>
            Scopri il Percorso →
          </button>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}
