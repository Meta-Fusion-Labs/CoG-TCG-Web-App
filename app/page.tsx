import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Clans of Gaea </h1>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Play CoG TCG
          </a>
          <a
            
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read The Lore
          </a>
        </div>
      </main>
      
    </div>
  );
}
