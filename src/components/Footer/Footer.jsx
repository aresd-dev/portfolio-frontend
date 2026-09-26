import profile from "../../data/profile.js";
import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>
          © {year} {profile.name}
        </span>
        <a href="#home" className={styles.backToTop}>
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}

export default Footer;
