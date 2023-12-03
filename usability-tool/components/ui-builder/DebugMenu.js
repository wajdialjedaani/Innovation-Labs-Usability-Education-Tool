// debug menu - used for measuring debug information, and creating grading source json

// styles
import styles from "@/styles/UIBuilder.module.scss";

// components

// utils
import { getContextSuite } from "./UIBuilderContextProvider";

export default function DebugMenu(){
  const {downloadGridJSON} = getContextSuite();

  return (
    <div>
      <button onClick={downloadGridJSON}>download grid json</button>
    </div>
  )
}