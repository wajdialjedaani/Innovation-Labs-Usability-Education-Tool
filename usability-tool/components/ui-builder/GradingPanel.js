// GradingPanel.js - a component for starting grading routine and displaying score

// style imports
import styles from "@/styles/UIBuilder.module.scss";

// component imports
import ReactHowler from "react-howler";

// util imports
import { getContextSuite } from "./UIBuilderContextProvider";
import { getAuthContext } from "@/app/(main)/components/AuthContextProvider";
import { useEffect, useState } from "react";

import { addUIData } from "@/lib/firebase/firestore";

export default function GradingPanel() {
  const { user } = getAuthContext();
  const { startGrading, heuristic, startTime } = getContextSuite();

  const [score, setScore] = useState();

  const [howlerSrc, setHowlerSrc] = useState();

  async function addUIDataToDB(scoreData) {
    try {
      await addUIData(heuristic, user.uid, scoreData);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    // get score
    const score = startGrading();
    //Get the time taken
    const timeTaken = Math.floor(Date.now() / 1000) - startTime.current;
    setScore(score);

    // initiate score sound
    if (score >= 7) {
      setHowlerSrc("/UIBuilder/pass.mp3");
    } else {
      setHowlerSrc("/UIBuilder/failure.mp3");
    }

    //Add score to firebase
    addUIDataToDB({ correct: score, incorrect: 10 - score, time: timeTaken });
  }, []);

  return (
    <article title="Score" className={styles.gradingPanelContainer}>
      <h3 role="header" className={styles.gradingPanelHeader}>
        You have {score >= 7 ? "passed!" : "failed."}
      </h3>

      <div className={styles.gradingPanelProgressBarContainer}>
        <div
          className={styles.gradingPanelProgressBar}
          style={{ width: `${score}0%` }}
        />
        <p className={styles.gradingPanelScoreDisplay}>{score}/10</p>
      </div>

      {howlerSrc && (
        <ReactHowler
          src={howlerSrc}
          playing={() => {
            return howlerSrc ? true : false;
          }}
          volume={0.2}
          onEnd={() => {
            setHowlerSrc(false);
          }}
        />
      )}
    </article>
  );
}
