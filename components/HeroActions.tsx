"use client";

import { useRouter } from "next/navigation";
import styles from "./HeroActions.module.css";

export default function HeroActions() {
  const router = useRouter();

  return (
    <div className={styles.actions}>
      <button
        className={styles.primaryButton}
        onClick={() => router.push("/editor")}
      >
        Open Editor
      </button>

      <button
        className={styles.secondaryButton}
        onClick={() => alert("Not implemented yet :)")}
      >
        View Extensions
      </button>
    </div>
  );
}
