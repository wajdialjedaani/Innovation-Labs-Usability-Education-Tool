import styles from "@/styles/home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className={styles.homeTitle}>Welcome to Usability Education Tool</h1>
      <div className={styles.homeButtonsContainer}>
      <Link className={styles.homeButton} href="/signin">Sign In</Link>
      <Link className={styles.homeButton} href="/register">Register</Link>
      </div>
    </main>
  );
}
