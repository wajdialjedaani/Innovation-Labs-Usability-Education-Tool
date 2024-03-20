import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function Erase(){
  return (
    <BoneTooltip title="Eraser Icon"> 
      <div className={styles.twoImgHolder}>
        <img src="/UIBuilder/heuristic2/erase.svg"/>
      </div>
    </BoneTooltip>
  )
}