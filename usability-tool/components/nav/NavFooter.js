// NavFooter.js - A react component for allowing navigation between lesson, quiz, and UI Builder
// NOT to be used on the actual UI Builder page.
import styles from "@/styles/Footer.module.scss";
import { Fragment } from "react";

export default function NavFooter(){
  return (
    <Fragment>
      <div className={`${styles.navContainer} ${styles.left}`}>
        <img src="/icons/chevron-left.svg"/>
   
        <div className={styles.contentTitle}>
          Heuristic Lesson
        </div>
      </div>

      <div className={`${styles.navContainer} ${styles.right} ${styles.locked}`}>
        <div className={styles.contentTitle}>
          UI Builder Activity 1 <img src="/icons/lock.svg"/>
        </div>


        <img src="/icons/chevron-right.svg"/>
      </div>
    </Fragment>
  )
}