import { getContextSuite } from "./UIBuilderContextProvider"

import BoneSelector from "./BoneSelector";
import styles from "@/styles/UIBuilder.module.scss"

export default function SolutionViewer(){
  const {solutionGrid} = getContextSuite();

  return (
    <div className={styles.gridBody}>
      {solutionGrid.length > 0 && solutionGrid.map((widget, index) => (
        <div style={widget.style} key={`UIBUILDERSOLUTIONBONE--${index}`}>
          <BoneSelector type={widget.bone}/>
        </div>
      ))}
    </div>
  )
}