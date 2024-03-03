"use client";
import styles from "@/styles/home.module.scss";
import Link from "next/link";

import { getAuthContext } from "../components/AuthContextProvider";

export default function Home() {
  const { user } = getAuthContext();
  return (
    <main>
      <h1 className={styles.homeTitle}>
        Learn and Practice Nielsen's 10 Usability Heuristics
      </h1>
      <div className={styles.homeButtonsContainer}>
        {!user ? (
          <>
            <Link className={styles.homeButton} href="/signin">
              Sign In
            </Link>
            <Link className={styles.homeButton} href="/register">
              Register
            </Link>
          </>
        ) : (
          <Link className={styles.homeButton} href="/main">
            Continue
          </Link>
        )}
      </div>
    </main>
  );
}
