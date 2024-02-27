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

export default function GradingPanel({toggleFunction}) {
  const { user } = getAuthContext();
  const { startGrading, heuristic, startTime, toggleSolutionView } = getContextSuite();

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
    } else {
      setHowlerSrc("/UIBuilder/failure.mp3");
    }

    //Add score to firebase
    addUIDataToDB({ correct: scoreObjGet.score, incorrect: 10 - scoreObjGet.score, time: timeTaken });
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
        Component Position Points: <span className={styles.gradingPanelScoreBreakdownHighlight}>{Math.round(Number(scoreObj.positioningScore))} / 100</span><br/>
        Component Selection Points: <span className={styles.gradingPanelScoreBreakdownHighlight}>{Math.round(Number(scoreObj.bonesUsedScore))} / 100</span>
      </div>

      <div className={styles.gradingPanelButtonGroup}>
        <GradingPanelButton
          text="View Solution"
          icon="book-open"
          alt="sup"
          onClick={() => {toggleFunction(); toggleSolutionView();}}
        />
        {
          scoreObj.score >= 7

          ?

          <GradingPanelButton
            text="Continue"
            icon="arrow-right"
            alt="sup"
            onClick={() => {toggleFunction(); toggleSolutionView();}}
          />

          :

          <GradingPanelButton
            text="View Solution"
            icon="refresh-cw"
            alt="hey"
            onClick={() => {toggleFunction(); toggleSolutionView();}}
          />
        }
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

function GradingPanelButton({icon, alt, onClick, text}){
  return (
    <div className={styles.gradingPanelButtonContainer}>
      <button className={styles.gradingPanelButton} role="button" alt={alt} title={alt} onClick={onClick}>
        {text}
        <img src={`/icons/${icon}.svg`}/>
      </button>
    </div>
  )
}
