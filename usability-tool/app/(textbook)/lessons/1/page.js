import styles from "@/styles/Textbook.module.scss"

import Textbook from "@/components/textbook/Textbook";

export default function Lesson1(){
  return (
    <div className={styles.textbookContainer}>
      <Textbook markdownSrc={"/public/lessons/Lesson1.md"}/>
    </div>
  )
}