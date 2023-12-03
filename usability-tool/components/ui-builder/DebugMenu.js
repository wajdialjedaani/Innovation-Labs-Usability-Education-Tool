// debug menu - used for measuring debug information, and creating grading source json

// styles
import styles from "@/styles/UIBuilder.module.scss";

// components

// utils
import { getContextSuite } from "./UIBuilderContextProvider";
import { useState } from "react";

export default function DebugMenu(){
  const {startGrading} = getContextSuite();

  return (
    <div>
      <GradingJSONGenerator />

      <div>
        <br />
        <button onClick={startGrading}> start grading!</button>
      </div>
    </div>
  )
}

function GradingJSONGenerator(props){
  const {downloadGridJSON} = getContextSuite();

  const [positionWeight, setPositionWeight] = useState();
  const [bonesWeight, setBonesWeight] = useState();

  function handleSubmit() {
    downloadGridJSON(positionWeight, bonesWeight);
  }

  return (
    <div>
      <h2>generate grading object</h2>
      <h3>weights should add up to 100</h3>

      position weight:<br />
      <input 
        type="number"
        value={positionWeight} 
        onChange={(event) => {
          setPositionWeight(event.target.value);
        }}
      /> <br />
      bones used weight:<br />
      <input 
        type="number"
        value={bonesWeight} 
        onChange={(event) => {
          setBonesWeight(event.target.value);
        }}
      /><br /><br />
      <button onClick={handleSubmit}>download grid json</button>
    </div>
  )
}