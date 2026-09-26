import profile from "../../data/profile.js";
import photo from "../../assets/matheus-foto.png";
import styles from "./About.module.css";

function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.photoWrap}>
          <img
            src={photo}
            alt={`Foto de ${profile.name}`}
            className={styles.photo}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.heading}>Sobre mim</h2>
          <p className={styles.paragraph}>
            Sou {profile.shortName.split(" ")[0]}, {profile.role.toLowerCase()}.
            Os projetos deste portfólio foram desenvolvidos ao longo do curso e
            passam por diferentes camadas do desenvolvimento web: performance
            e PWAs, arquitetura de aplicações com micro frontends, e qualidade
            de código com testes automatizados e integração contínua.
          </p>
          <p className={styles.paragraph}>
            Gosto de entender como as ferramentas funcionam por baixo do capô
            — por isso boa parte dos projetos inclui medições reais
            (Lighthouse, benchmarks) em vez de apenas "funcionar".
          </p>

          <ul className={styles.contactRow}>
            <li>
              <a href={`mailto:${profile.email}`} className={styles.contactLink}>
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
              >
                {profile.githubHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
