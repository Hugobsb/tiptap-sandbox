import styles from "./MainPage.module.css";
import HeroActions from "@/components/HeroActions";

export default function MainPage() {

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.badge}>✨ Hugo's Sandbox</div>

        <h1 className={styles.title}>
          Explore rich text editing with <span>Tiptap</span>
        </h1>

        <p className={styles.description}>
          A playground for experimenting with collaborative editing,
          extensions, custom nodes and modern editor experiences powered by
          Tiptap.
        </p>

        <HeroActions />
      </section>

      <section className={styles.preview}>
        <div className={styles.editorWindow}>
          <div className={styles.toolbar}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>

          <div className={styles.editorContent}>
            <h2>Welcome to Tiptap Sandbox 🚀</h2>

            <p>
              This environment is built for testing custom extensions,
              collaborative editing and rich content experiences.
            </p>

            <ul>
              <li>Slash commands</li>
              <li>Realtime collaboration</li>
              <li>Custom nodes</li>
              <li>Markdown support</li>
            </ul>

            <blockquote>
              "The editor is just the beginning."
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.card}>
          <h3>Extensions</h3>
          <p>Create and test custom Tiptap extensions.</p>
        </div>

        <div className={styles.card}>
          <h3>Realtime</h3>
          <p>Experiment with collaborative editing workflows.</p>
        </div>

        <div className={styles.card}>
          <h3>Rich Content</h3>
          <p>Build modern editing experiences with ease.</p>
        </div>
      </section>
    </main>
  );
}
