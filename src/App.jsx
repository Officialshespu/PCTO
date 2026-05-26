import { useState } from "react";
import "./styles/global.css";
import { stages } from "./data/stages";
import Home from "./pages/Home";
import StagePage from "./pages/StagePage";

export default function App() {
  const [page, setPage] = useState("home");
  const [stageId, setStageId] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (p, id) => {
    setPage(p);
    if (id) setStageId(id);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { label: "Home", page: "home" },
    { label: "Stage 1", page: "stage", id: 1 },
    { label: "Stage 2 e 3", page: "stage", id: 2 },
  ];

  const isActive = (item) => {
    if (item.page === "home" && page === "home") return true;
    if (item.page === "stage" && page === "stage" && stageId === item.id) return true;
    return false;
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-logo" onClick={() => navigate("home")}>
          FSL Experience
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={`nav-link ${isActive(item) ? "active" : ""}`}
                onClick={() => navigate(item.page, item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      {page === "home" && <Home navigate={navigate} />}
      {page === "stage" && <StagePage stageId={stageId} navigate={navigate} />}
    </>
  );
}
