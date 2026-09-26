import skillGroups from "../../data/skills.js";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section id="habilidades" className={styles.skills}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>Habilidades</h2>
        <p className={styles.intro}>
          Tecnologias e práticas que venho aplicando nos projetos do curso.
        </p>

        <div className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <ul className={styles.tagList}>
                {group.items.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
