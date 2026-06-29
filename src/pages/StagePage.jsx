import { useEffect } from "react";
import { stages } from "../data/stages";
import SkillBar from "../components/SkillBar";
import Footer from "../components/Footer";

const stageOneGallery = [
  {
    src: new URL("../documenti_stage1/aleandro.jpeg", import.meta.url).href,
    alt: "Aleandro",
    caption: "Aleandro",
  },
  {
    src: new URL("../documenti_stage1/gruppo.jpeg", import.meta.url).href,
    alt: "Gruppo",
    caption: "Gruppo",
  },
  {
    src: new URL("../documenti_stage1/lavoro.jpeg", import.meta.url).href,
    alt: "Lavoro",
    caption: "Lavoro",
  },
];

const stageTwoThreeGallery = [
  {
    src: new URL("../documenti_stage2-3/WhatsApp Image 2026-05-17 at 23.22.34.jpeg", import.meta.url).href,
    alt: "Attivita stage 2-3",
    caption: "Stage 2 e 3 - Attivita 1",
  },
  {
    src: new URL("../documenti_stage2-3/WhatsApp Image 2026-05-17 at 23.22.34-2.jpeg", import.meta.url).href,
    alt: "Attivita stage 2-3",
    caption: "Stage 2 e 3 - Attivita 2",
  },
];

const erasmusPdf = new URL("../documenti_stage1/erasmus.pdf", import.meta.url).href;

const mediaByStageId = {
  1: {
    gallery: stageOneGallery,
    document: {
      title: "Erasmus PDF",
      description: "Document attached to stage 1",
      url: erasmusPdf,
      label: "Erasmus PDF Preview",
      descriptionIt: "Documento allegato allo stage 1",
      labelIt: "Anteprima del PDF Erasmus",
    },
  },
  2: {
    gallery: stageTwoThreeGallery,
  },
  3: {
    gallery: stageTwoThreeGallery,
  },
};

export default function StagePage({ stageId, navigate }) {
  const s = stages.find((x) => x.id === stageId);
  const visibleStages = stages.filter((x) => !x.hidden);
  const currentIndex = visibleStages.findIndex((x) => x.id === stageId);
  const prev = currentIndex > 0 ? visibleStages[currentIndex - 1] : null;
  const next = currentIndex >= 0 ? visibleStages[currentIndex + 1] : null;
  const media = mediaByStageId[stageId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stageId]);

  return (
    <div className="page">
      <div
        className="stage-hero-section"
        data-num={s.number}
        style={{ background: `linear-gradient(135deg, var(--surface) 0%, ${s.color}08 100%)` }}
      >
        <div className="stage-hero-inner">
          <button className="stage-back" onClick={() => navigate("home")}>
            ← {stageId === 1 ? "Back to Home" : "Torna alla Home"}
          </button>
          <p className="stage-eyebrow" style={{ color: s.color }}>Stage {s.number}</p>
          <h1 className="stage-h1">{s.title}</h1>
          <p className="stage-sub">{s.description}</p>
          <div className="stage-meta">
            <span className="stage-meta-item">📅 {s.period}</span>
            <span className="stage-meta-item">📍 {s.location}</span>
            <span className="stage-meta-item">👤 {s.tutor}</span>
          </div>
        </div>
      </div>

      <div className="stage-layout">
        {/* Main content */}
        <div>
          <div className="stage-section stage-intro">
            <h2>{stageId === 1 ? "My Experience" : "La Mia Esperienza"}</h2>
            {s.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="stage-section">
            <h2>{stageId === 1 ? "Main Responsibilities" : "Responsabilità Principali"}</h2>
            <div className="resp-grid">
              {s.responsibilities.map((r) => (
                <div key={r.title} className="resp-item">
                  <div className="resp-icon">{r.icon}</div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="stage-section">
            <h2>{stageId === 1 ? "Projects Developed" : "Progetti Sviluppati"}</h2>
            <div className="proj-grid">
              {s.projects.map((p) => (
                <div key={p.title} className="proj-card">
                  <div className="proj-icon">{p.icon}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <div className="proj-techs">
                    {p.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {media && (
            <div className="stage-section">
              <h2>{stageId === 1 ? "Image Gallery" : "Galleria Immagini"}</h2>
              <div className="stage-media-grid">
                {media.gallery.map((item) => (
                  <figure key={item.src} className="stage-media-card">
                    <img
                      className="stage-media-image"
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                    />
                    <figcaption>{stageId === 1 ? (item.caption === "Gruppo" ? "Team" : item.caption === "Lavoro" ? "Work" : item.caption) : item.caption}</figcaption>
                  </figure>
                ))}
              </div>

              {media.document && (
                <div className="stage-document">
                  <div className="stage-document-head">
                    <div>
                      <h3>{media.document.title}</h3>
                      <p>{stageId === 1 ? media.document.description : media.document.descriptionIt}</p>
                    </div>
                    <a href={media.document.url} target="_blank" rel="noopener noreferrer">
                      {stageId === 1 ? "Open PDF" : "Apri PDF"}
                    </a>
                  </div>
                  <object
                    className="stage-document-preview"
                    data={media.document.url}
                    type="application/pdf"
                    aria-label={stageId === 1 ? media.document.label : media.document.labelIt}
                  >
                    <a href={media.document.url} target="_blank" rel="noopener noreferrer">
                      {stageId === 1 ? "Open the PDF" : "Apri il PDF"}
                    </a>
                  </object>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="side-card">
            <h3>{stageId === 1 ? "Stage Information" : "Informazioni Stage"}</h3>
            {[
              { icon: "🏢", label: stageId === 1 ? "Company" : "Azienda", val: s.title },
              { icon: "📍", label: stageId === 1 ? "Location" : "Sede", val: s.location },
              { icon: "📅", label: stageId === 1 ? "Duration" : "Durata", val: s.period },
              { icon: "👤", label: stageId === 1 ? "Company Tutor" : "Tutor Aziendale", val: s.tutor },
            ].map((x) => (
              <div key={x.label} className="info-row">
                <span className="info-icon">{x.icon}</span>
                <div>
                  <p className="info-label">{x.label}</p>
                  <p className="info-val">{x.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="side-card">
            <h3>{stageId === 1 ? "Skills Acquired" : "Competenze Acquisite"}</h3>
            {s.skills.map((sk, i) => (
              <SkillBar
                key={sk.name}
                name={sk.name}
                value={sk.value}
                color={s.color}
                delay={i * 100}
              />
            ))}
          </div>

          {s.outcomes && s.outcomes.length > 0 && (
            <div className="side-card">
              <h3>{stageId === 1 ? "Results Achieved" : "Risultati Ottenuti"}</h3>
              {s.outcomes.map((o) => (
                <div key={o} className="outcome-item">
                  <span className="check" style={{ color: s.color }}>✓</span>
                  <span style={{ fontSize: "0.875rem" }}>{o}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="stage-nav">
        {prev ? (
          <button className="snav-btn" onClick={() => navigate("stage", prev.id)}>
            ← {prev.shortTitle}
          </button>
        ) : (
          <button className="snav-btn" onClick={() => navigate("home")}>
            ← {stageId === 1 ? "Back to Home" : "Torna alla Home"}
          </button>
        )}
        {next ? (
          <button className="snav-btn" onClick={() => navigate("stage", next.id)}>
            {next.shortTitle} →
          </button>
        ) : (
          <button className="snav-btn" onClick={() => navigate("home")}>
            {stageId === 1 ? "Back to Home" : "Torna alla Home"} →
          </button>
        )}
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}
