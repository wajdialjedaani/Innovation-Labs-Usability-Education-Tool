import styles from "@/styles/Textbook.module.scss";

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

      <div
        className={`container-fluid d-flex justify-content-center ${styles.textbookBodyContainer}`}
      >
        <div className={`col-12 col-md-8 col-lg-6 ${styles.textbookBody}`}>
          {heuristicObj.TextContents()}
        </div>
      </div>

      <NavFooter
        options={{
          prev: null,
          next: {
            title: `Hueristic ${heuristicObj.meta.heuristic} Quiz`,
            href: `/quiz/${heuristicObj.meta.heuristic}`,
          },
          nextLock: false,
        }}
      />
    </Fragment>
  );
}
