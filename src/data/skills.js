export const allSkills = [
  { name: "HTML/CSS", value: 90, cat: "Web" },
  { name: "JavaScript", value: 75, cat: "Web" },
  { name: "React", value: 70, cat: "Web" },
  { name: "React Native", value: 65, cat: "Mobile" },
  { name: "UI/UX Design", value: 80, cat: "Design" },
  { name: "Figma", value: 85, cat: "Design" },
  { name: "Adobe Suite", value: 70, cat: "Design" },
  { name: "SEO/SEM", value: 75, cat: "Marketing" },
  { name: "Social Media", value: 80, cat: "Marketing" },
  { name: "Analytics", value: 70, cat: "Marketing" },
  { name: "Git", value: 80, cat: "Tools" },
  { name: "Node.js", value: 60, cat: "Tools" },
];

export const softSkills = [
  { icon: "🤝", name: "Team Work", value: 90, desc: "Collaborazione efficace in team multidisciplinari, contribuendo attivamente alle dinamiche di gruppo e supportando i colleghi." },
  { icon: "💬", name: "Comunicazione", value: 85, desc: "Abilità nel presentare idee complesse in modo chiaro e conciso, adattando il linguaggio all'interlocutore." },
  { icon: "💡", name: "Problem Solving", value: 80, desc: "Approccio analitico alla risoluzione dei problemi, identificando le cause radici e proponendo soluzioni creative." },
  { icon: "⏱️", name: "Gestione del Tempo", value: 75, desc: "Capacità di organizzare le priorità e rispettare le scadenze mantenendo alta qualità del lavoro." },
  { icon: "🎓", name: "Apprendimento Continuo", value: 95, desc: "Curiosità e propensione all'apprendimento autonomo di nuove tecnologie e metodologie." },
  { icon: "🔄", name: "Adattabilità", value: 85, desc: "Flessibilità nel fronteggiare cambiamenti e nuove sfide, adattando rapidamente il proprio approccio." },
];

export const certifications = [
  { name: "Certificazione JavaScript Base", issuer: "Azienda Tecnologica S.r.l.", stage: 1, year: "2023", color: "#6EE7B7" },
  { name: "Google Analytics", issuer: "Google", stage: 2, year: "2024", color: "#93C5FD" },
  { name: "SCRUM Fundamentals", issuer: "SCRUMstudy", stage: 1, year: "2023", color: "#6EE7B7" },
  { name: "React Native Basics", issuer: "Startup Innovativa Tech", stage: 3, year: "2024", color: "#F9A8D4" },
];

export const techCategories = [
  {
    icon: "💻", label: "Sviluppo Web", sub: "Frontend e strumenti moderni",
    bg: "rgba(110,231,183,0.12)", color: "#6EE7B7",
    skills: allSkills.filter((s) => s.cat === "Web"),
  },
  {
    icon: "📱", label: "Mobile Dev", sub: "Sviluppo app cross-platform",
    bg: "rgba(147,197,253,0.12)", color: "#93C5FD",
    skills: allSkills.filter((s) => s.cat === "Mobile"),
  },
  {
    icon: "🎨", label: "Design & UX", sub: "Prototipazione e grafica",
    bg: "rgba(249,168,212,0.12)", color: "#F9A8D4",
    skills: allSkills.filter((s) => s.cat === "Design"),
  },
  {
    icon: "📢", label: "Digital Marketing", sub: "Crescita e analisi dati",
    bg: "rgba(251,191,36,0.12)", color: "#F59E0B",
    skills: allSkills.filter((s) => s.cat === "Marketing"),
  },
];

export const radarData = [
  { name: "Web Dev", value: 82 },
  { name: "Design", value: 78 },
  { name: "Marketing", value: 75 },
  { name: "Mobile", value: 65 },
  { name: "Tools", value: 70 },
  { name: "Soft Skills", value: 85 },
];

export const learningTimeline = [
  {
    num: "01", title: "Stage 1 – Fondamenti",
    desc: "Acquisizione delle basi dello sviluppo web e del lavoro in team",
    tags: ["HTML/CSS", "JavaScript", "Git", "Team Work"], color: "#6EE7B7",
  },
  {
    num: "02", title: "Stage 2 – Digital Marketing",
    desc: "Esplorazione del mondo del marketing digitale e dell'analisi dati",
    tags: ["SEO/SEM", "Social Media", "Analytics", "Content Creation"], color: "#93C5FD",
  },
  {
    num: "03", title: "Stage 3 – Sviluppo Avanzato",
    desc: "Approfondimento nello sviluppo mobile e nel design thinking",
    tags: ["React Native", "UI/UX Design", "API Development", "Problem Solving"], color: "#F9A8D4",
  },
];
