import styles from "@/styles/Textbook.module.scss"

import TextbookBody from "@/components/textbook/TextbookBody";
import { Fragment } from "react";

import NavFooter from "../nav/NavFooter";

export default function Textbook({filepath}){
  return (
    <Fragment>
      <div className={styles.textbookContainer}>
        <TextbookBody markdownSrc={filepath}/>
      </div>

      <NavFooter 
        options={{
          prev: null,
          next: {title: "Hueristic 1 Quiz", href:"/quiz/1"},
          nextLock: false
        }}
      />
    </Fragment>
  )
}