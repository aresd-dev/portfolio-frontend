import { useState } from "react";
import profile from "../../data/profile.js";
import styles from "./Contact.module.css";

const initialForm = { name: "", email: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Contato via portfólio — ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contato" className={styles.contact}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>Contato</h2>
        <p className={styles.intro}>
          Aberto a conversas sobre oportunidades, projetos ou feedback. Pode
          me chamar por e-mail, GitHub, ou usar o formulário abaixo.
        </p>

        <div className={styles.grid}>
          <ul className={styles.directLinks}>
            <li>
              <span className={styles.linkLabel}>E-mail</span>
              <a href={`mailto:${profile.email}`} className={styles.linkValue}>
                {profile.email}
              </a>
            </li>
            <li>
              <span className={styles.linkLabel}>GitHub</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className={styles.linkValue}
              >
                {profile.githubHandle}
              </a>
            </li>
          </ul>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>Nome</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.field}>
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.field}>
              <span>Mensagem</span>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className={styles.submit}>
              Enviar mensagem
            </button>

            {sent && (
              <p className={styles.sentNote} role="status">
                Abrindo seu cliente de e-mail com a mensagem preenchida.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
