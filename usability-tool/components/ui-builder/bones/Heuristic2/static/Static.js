import styles from "@/styles/UIBones.module.scss";

import TopBar from "./TopBar";
import ToolBar from "./ToolBar";
import Canvas from "./Canvas";

export default function Static(){
  return (
    <div className={styles.twoStatic}>
      <TopBar />

      <div className={styles.twoBottomHolder}>
        <ToolBar />
        <Canvas />
      </div>
    </div>
  )
}