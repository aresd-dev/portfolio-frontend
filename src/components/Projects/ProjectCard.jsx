import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  const { title, description, highlight, tech, repoUrl, demoUrl, image } =
    project;

  return (
    <article className={`${styles.card} ${image ? styles.withImage : ""}`}>
      {image && (
        <div className={styles.imageWrap}>
          <img
            src={image}
            alt={`Captura de tela do projeto ${title}`}
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          {highlight && <span className={styles.highlight}>{highlight}</span>}
        </div>

        <p className={styles.description}>{description}</p>

        <ul className={styles.techList}>
          {tech.map((item) => (
            <li key={item} className={styles.techTag}>
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a href={repoUrl} target="_blank" rel="noreferrer" className={styles.link}>
            Ver repositório
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Ver demonstração
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
