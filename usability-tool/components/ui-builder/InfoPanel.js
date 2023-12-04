// GradingPanel.js - a component for starting grading routine and displaying score

// style imports
import styles from "@/styles/UIBuilder.module.scss";

// component imports
import ReactHowler from "react-howler";

// util imports
import { getContextSuite } from "./UIBuilderContextProvider";
import { useEffect, useState } from "react";

export default function InfoPanel(){
  const {scenarioInformation} = getContextSuite();

  return (
    <article title="Scenario Information" className={styles.infoPanelContainer}>
      <p>
        {scenarioInformation.description}
      </p>
    </article>
  )
}