// GradingPanel.js - a component for starting grading routine and displaying score

// style imports
import styles from "@/styles/UIBuilder.module.scss";

// component imports
import ReactHowler from "react-howler";

// util imports
import { getContextSuite } from "./UIBuilderContextProvider";
import { getAuthContext } from "@/app/(heurisitcbuilder)/(main)/components/AuthContextProvider";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { addUIData } from "@/lib/firebase/firestore";

export default function GradingPanel({ toggleFunction }) {
  const {
    user,
    metaDataSuite: { metaData, updateMetaData },
  } = getAuthContext();

  const { startGrading, heuristic, startTime, toggleSolutionView, setSolutionIndex, scenarioInformation } = getContextSuite();

  const [scoreObj, setScoreObj] = useState({});

  const [howlerSrc, setHowlerSrc] = useState();

  async function addUIDataToDB(scoreData) {
    try {
      await addUIData(heuristic, user.uid, scoreData);
    } catch (e) {
      console.error(e);
    }
  }

  const router = useRouter();

  function handleContinue() {
    router.push(scenarioInformation.nextUrl);
  }

  useEffect(() => {
    //console.log("mounting use effect - changing");
    // get score
    const scoreObjGet = startGrading();

    setSolutionIndex(scoreObjGet.closestSolutionIndex ? scoreObjGet.closestSolutionIndex : 0);

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

      <ScoreBar score={scoreObj.score} />
      <ScoreBreakdown scoreObj={scoreObj} />
      <GradingPanelButtons
        toggleFunction={toggleFunction}
        toggleSolutionView={toggleSolutionView}
        onContinue={handleContinue}
        scoreObj={scoreObj}
      />

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

function ScoreBreakdown({ scoreObj }) {
  return (
    <div className={styles.gradingPanelScoreBreakdown}>
      <h2>Component Positioning</h2>
      Score:{" "}
      <span className={styles.gradingPanelScoreBreakdownHighlight}>
        {Math.round(Number(scoreObj.positioningScore))} / 100
      </span>
      <br />
      {
        scoreObj.collisions && scoreObj.collisions.length > 0 &&

        <div>
          <i>Components should not collide!</i><br />
          <i>Detected Collisions:</i>
          <ul className={styles.collisionList}>
            {scoreObj.collisions.map((obj, index) => {
              return (
                <li key={`collisionsList--${index}`}>
                  "{addSpaceToCamelCase(obj.bone1)}" collides with "{addSpaceToCamelCase(obj.bone2)}".
                </li>
              )
            })}
          </ul>
        </div>
      }
      {scoreObj.worstPositionedBone && (
        <span className={styles.gradingPanelTippers}>
          Try repositioning the "
          {addSpaceToCamelCase(scoreObj.worstPositionedBone)}" component.

        </span>
      )}
      <br />
      <h2>Components Used</h2>
      Score:{" "}
      <span className={styles.gradingPanelScoreBreakdownHighlight}>
        {Math.round(Number(scoreObj.bonesUsedScore))} / 100
      </span>
      <br />
      {scoreObj.missingBones && scoreObj.missingBones.length > 0 && (
        <span className={styles.gradingPanelTippers}>
          You were missing the following components:
          {scoreObj.missingBones &&
            scoreObj.missingBones.map((obj) => {
              if (!obj) {
                return;
              }

              return <li>{addSpaceToCamelCase(obj)}</li>;
            })}
        </span>
      )}
    </div>
  );
}

function ScoreBar({ score }) {
  return (
    <div className={styles.gradingPanelProgressBarContainer}>
      <div
        className={styles.gradingPanelProgressBar}
        style={{ width: `${score}0%` }}
      />
      <p className={styles.gradingPanelScoreDisplay}>{score}/10</p>
    </div>
  );
}

function GradingPanelButtons({ scoreObj, toggleFunction, toggleSolutionView, onContinue }) {
  return (
    <div className={styles.gradingPanelButtonGroup}>
      <GradingPanelButton
        text="View Solution"
        icon="book-open"
        alt="View Solution"
        onClick={() => {
          toggleFunction();
          toggleSolutionView();
        }}
      />
      {scoreObj.score >= 7 ? (
        <GradingPanelButton
          text="Continue"
          icon="arrow-right"
          alt="Continue"
          onClick={onContinue}
        />
      ) : (
        <GradingPanelButton
          text="Retry"
          icon="refresh-cw"
          alt="Retry"
          onClick={() => {
            toggleFunction();
          }}
        />
      )}
    </div>
  );
}

function GradingPanelButton({ icon, alt, onClick, text }) {
  return (
    <div className={styles.gradingPanelButtonContainer}>
      <button
        className={styles.gradingPanelButton}
        role="button"
        alt={alt}
        title={alt}
        onClick={onClick}
      >
        {text}
        <img src={`/icons/${icon}.svg`} />
      </button>
    </div>
  );
}

function addSpaceToCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
}
