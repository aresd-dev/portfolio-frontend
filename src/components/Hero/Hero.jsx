import profile from "../../data/profile.js";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.summary}>{profile.summary}</p>

        <div className={styles.actions}>
          <a href="#projetos" className={styles.primaryButton}>
            Ver projetos
          </a>
          <a href="#contato" className={styles.secondaryButton}>
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
