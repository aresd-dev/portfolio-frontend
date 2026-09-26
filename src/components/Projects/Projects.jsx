import projects from "../../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section id="projetos" className={styles.projects}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>Projetos</h2>
        <p className={styles.intro}>
          Uma seleção de projetos desenvolvidos durante o curso, cada um
          explorando um problema técnico diferente.
        </p>

        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
