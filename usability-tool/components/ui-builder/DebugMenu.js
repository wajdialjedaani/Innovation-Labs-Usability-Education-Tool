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
      <ScenarioGenerator />

      <div>
        <br />
        <button onClick={startGrading}> start grading!</button>
      </div>
    </div>
  )
}

function ScenarioGenerator(props){
  const {downloadGridJSON} = getContextSuite();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [positionWeight, setPositionWeight] = useState(55);
  const [bonesWeight, setBonesWeight] = useState(45);

  function handleSubmit() {
    const scenarioInformation = {
      title,
      description
    }

    downloadGridJSON(positionWeight, bonesWeight, scenarioInformation);
  }

  return (
    <div>
      <h2>generate ui builder scenario</h2>
      title:<br/>
      <input 
        type="text" 
        value={title}
        onChange={(event) => {
          setTitle(event.target.value)
        }}
      /><br/><br/>
       description:<br/>
      <textarea  
        value={description}
        onChange={(event) => {
          setDescription(event.target.value)
        }}
      />

      <h3>choose grading weights (weights should add up to 100)</h3>
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
      <button onClick={handleSubmit}>download scenario json</button>
    </div>
  )
}