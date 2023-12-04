// GradingPanel.js - a component for starting grading routine and displaying score

// style imports
import styles from "@/styles/UIBuilder.module.scss";

// component imports
import ReactHowler from "react-howler";

// util imports
import { getContextSuite } from "./UIBuilderContextProvider";
import { useEffect, useState } from "react";

export default function GradingPanel(){
  const {startGrading} = getContextSuite();

  const [score, setScore] = useState()

  const [howlerSrc, setHowlerSrc] = useState();

  useEffect(() => {
    // get score
    const score = startGrading();
    setScore(score);

    // initiate score sound
    if (score >= 7){
      setHowlerSrc("/UIBuilder/pass.mp3");
    } else {
      setHowlerSrc("/UIBuilder/failure.mp3");
    }
  }, []);

  return (
    <article title="Score" className={styles.gradingPanelContainer}>
      <h3 role="header" className={styles.gradingPanelHeader}>
        You have {score >= 7 ? "passed!" : "failed."}
      </h3>

      <div className={styles.gradingPanelProgressBarContainer}>
        <div 
          className={styles.gradingPanelProgressBar} 
          style={{width: `${score}0%`}}
        />
        <p className={styles.gradingPanelScoreDisplay}>{score}/10</p>
      </div>

      {howlerSrc && 
        <ReactHowler 
          src={howlerSrc}
          playing={() => {return howlerSrc ? true : false}}
          volume={0.2}
          onEnd={() => {
            setHowlerSrc(false);
          }}
        />
      }
    </article>
  )
}