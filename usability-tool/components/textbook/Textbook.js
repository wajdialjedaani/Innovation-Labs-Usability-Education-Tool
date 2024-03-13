import styles from "@/styles/Textbook.module.scss";

import TextbookBody from "@/components/textbook/TextbookBody";
import { Fragment } from "react";

import NavFooter from "../nav/NavFooter";
import Header from "./Header";

export default function Textbook({ heuristicObj }) {
  return (
    <Fragment>
      <Header
        title={heuristicObj.meta.title}
        headerImg={heuristicObj.meta.headerImg}
      />

      <div className={styles.textbookBodyContainer}>
        <div className={styles.textbookBody}>{heuristicObj.TextContents()}</div>
      </div>

      <NavFooter
        options={{
          prev: null,
          next: { title: "Hueristic 1 Quiz", href: "/quiz/1" },
          nextLock: false,
        }}
      />
    </Fragment>
  );
}
