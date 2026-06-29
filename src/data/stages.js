const stageTwoThreeIntro = [
  "Durante il secondo e terzo stage ho approfondito il mondo delle reti wireless, occupandomi di attività basilari ma cruciali come il monitoraggio della copertura, la verifica dei canali di trasmissione e il posizionamento degli Access Point. In questo contesto, ho collaborato attivamente con diversi operatori e tecnici di rete per effettuare test di connettività e assicurarmi del corretto funzionamento delle infrastrutture. Parallelamente, ho supportato la gestione delle attività d'ufficio e della documentazione tecnica, un'opportunità che mi ha permesso di sviluppare una forte versatilità, capacità di problem-solving e attitudine al lavoro di squadra in contesti multifunzionali.",
];

const stageTwoThreeResponsibilities = [
  {
    icon: "📡",
    title: "Wireless Networking & Troubleshooting",
    desc: "Monitoraggio della copertura del segnale, verifica dei canali di trasmissione e supporto al posizionamento e configurazione degli Access Point (Wi-Fi).",
  },
  {
    icon: "👥",
    title: "Cross-Team Collaboration",
    desc: "Cooperazione attiva con operatori del settore e tecnici di rete per l'esecuzione di test di connettività e la verifica delle performance delle infrastrutture.",
  },
  {
    icon: "📊",
    title: "IT Operations & Documentazione",
    desc: "Supporto nella gestione delle attività d'ufficio, organizzazione della documentazione tecnica e monitoraggio dei flussi di lavoro aziendali.",
  },
  {
    icon: "🛠️",
    title: "Problem Solving & Versatilità",
    desc: "Risoluzione di imprevisti in contesti multidisciplinari, coniugando le competenze tecniche con flessibilità e capacità di adattamento.",
  },
];

const stageTwoThreeProjects = [
  {
    icon: "🖥️",
    title: "Server Deployment & Config",
    desc: "Configurazione da zero di un server locale e messa in produzione di servizi di rete essenziali.",
    tech: ["Linux / OS Server", "Service Installation", "System Administration"],
  },
  {
    icon: "📶",
    title: "Wireless Coverage & Optimization",
    desc: "Analisi del segnale, posizionamento strategico di Access Point e ottimizzazione della copertura Wi-Fi.",
    tech: ["Access Point Setup", "Signal Testing", "Network Troubleshooting"],
  },
  {
    icon: "👥",
    title: "Multi-Operator Validation",
    desc: "Test di connettività, risoluzione problemi e coordinamento tecnico in collaborazione con operatori di rete.",
    tech: ["Cross-Team Testing", "Network Validation", "Technical Reporting"],
  },
];

const stageTwoThreeSkills = [
  { name: "Wireless Networking", value: 85 },
  { name: "Network Troubleshooting", value: 80 },
  { name: "Documentazione tecnica", value: 75 },
  { name: "Problem Solving", value: 85 },
  { name: "Teamwork", value: 90 },
];

const stageTwoThreeTags = ["Wireless", "Access Point", "Networking"];

export const stages = [
  {
    id: 1,
    number: "01",
    title: "codemonster.srl",
    shortTitle: "CodeMonster",
    period: "1 month (January-February)",
    location: "La Coruña, Spain",
    tutor: "Aleandro",
    description: "My first internship was a foundational experience that introduced me to the professional tech industry",
    color: "#6EE7B7",
    accent: "#059669",
    intro: [
      "My first internship was a foundational experience that introduced me to the professional tech industry. Working in such a dynamic environment allowed me to apply my academic knowledge in a real-world setting, while developing a strong ability to research and learn new technologies independently. A key highlight was the opportunity to configure and deploy a server from scratch and install various services—a challenging and fascinating experience that fueled my passion for this field.",
    ],
    responsibilities: [
      { icon: "⌨️", title: "System Administration", desc: "Ability to configure, install and manage a server" },
      { icon: "🌿", title: "Version Control", desc: "Source code management with Git and collaboration on shared repositories" },
      { icon: "👥", title: "Teamwork", desc: "Participation in daily meetings and sprint planning with agile methodology" },
      { icon: "🐛", title: "Debug and Testing", desc: "Identification and resolution of bugs, execution of functionality tests" },
    ],
    projects: [
      { icon: "🛒", title: "Server with Samba+Docker", desc: "Server configuration with Samba service and Docker, plus various Linux scripts", tech: ["Linux", "Samba", "Docker"] },
    ],
    skills: [
      { name: "System Administration", value: 90 },
      { name: "Git", value: 80 },
      { name: "Teamwork", value: 85 },
    ],
    tags: ["Teamwork", "Git"],
  },
  {
    id: 2,
    number: "02-03",
    title: "Sti Adsl srl",
    shortTitle: "Stage 2 e 3",
    period: "giugno e settembre 2025",
    location: "Terni, Italia",
    tutor: "Matricaria Lamberto",
    description: "Esperienza nel mondo delle reti wireless, delle infrastrutture di rete e della documentazione tecnica",
    color: "#93C5FD",
    accent: "#2563EB",
    intro: stageTwoThreeIntro,
    responsibilities: stageTwoThreeResponsibilities,
    projects: stageTwoThreeProjects,
    skills: stageTwoThreeSkills,
    tags: stageTwoThreeTags,
  },
  {
    id: 3,
    number: "03",
    title: "Sti Adsl srl",
    shortTitle: "Sti Adsl",
    period: "settembre 2025",
    location: "Terni, Italia",
    tutor: "Matricaria Lamberto",
    description: "Esperienza nel mondo delle reti wireless, delle infrastrutture di rete e della documentazione tecnica",
    color: "#F9A8D4",
    accent: "#DB2777",
    intro: stageTwoThreeIntro,
    responsibilities: stageTwoThreeResponsibilities,
    projects: stageTwoThreeProjects,
    skills: stageTwoThreeSkills,
    tags: stageTwoThreeTags,
    hidden: true,
  },
];
