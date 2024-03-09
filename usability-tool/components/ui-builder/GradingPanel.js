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
  const {
    user,
    metaDataSuite: { metaData, updateMetaData },
  } = getAuthContext();
  const { startGrading, heuristic, startTime } = getContextSuite();

  const [scoreObj, setScoreObj] = useState({});

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
    const scoreObjGet = startGrading();

    //Get the time taken
    const timeTaken = Math.floor(Date.now() / 1000) - startTime.current;
    setScoreObj(scoreObjGet);

    // initiate score sound
    if (scoreObjGet.score >= 7) {
      setHowlerSrc("/UIBuilder/pass.mp3");
      const newMetaData = { ...metaData };
      newMetaData.completedHeuristics[heuristic - 1] = Math.max(
        newMetaData.completedHeuristics[heuristic - 1],
        3
      );
      updateMetaData(newMetaData);
    } else {
      setHowlerSrc("/UIBuilder/failure.mp3");
    }

    //Add score to firebase
    addUIDataToDB({
      correct: scoreObjGet.score,
      incorrect: 10 - scoreObjGet.score,
      time: timeTaken,
    });
  }, []);

  return (
    <article title="Score" className={styles.gradingPanelContainer}>
      <h3 role="header" className={styles.gradingPanelHeader}>
        You have {scoreObj.score >= 7 ? "passed!" : "failed."}
      </h3>

      <div className={styles.gradingPanelProgressBarContainer}>
        <div
          className={styles.gradingPanelProgressBar}
          style={{ width: `${scoreObj.score}0%` }}
        />
        <p className={styles.gradingPanelScoreDisplay}>{scoreObj.score}/10</p>
      </div>

      <div className={styles.gradingPanelScoreBreakdown}>
        Component Position Points:{" "}
        <span className={styles.gradingPanelScoreBreakdownHighlight}>
          {Math.round(Number(scoreObj.positioningScore))} / 100
        </span>
        <br />
        Component Selection Points:{" "}
        <span className={styles.gradingPanelScoreBreakdownHighlight}>
          {Math.round(Number(scoreObj.bonesUsedScore))} / 100
        </span>
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
