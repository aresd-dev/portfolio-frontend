import { useState } from "react";
import profile from "../../data/profile.js";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { id: "home", label: "Início" },
  { id: "sobre", label: "Sobre mim" },
  { id: "projetos", label: "Projetos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "contato", label: "Contato" },
];

function Navbar({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleLinkClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.brand} onClick={handleLinkClick}>
          {profile.shortName}
        </a>

        <button
          className={styles.menuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        >
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${styles.navLink} ${
                    activeSection === link.id ? styles.navLinkActive : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
