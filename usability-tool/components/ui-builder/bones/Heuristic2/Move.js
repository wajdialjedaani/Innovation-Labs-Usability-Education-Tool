import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function Move(){
  return (
    <BoneTooltip title="Arrows Icon">
      <div className={styles.twoImgHolder}>
        <img src="/UIBuilder/heuristic2/move.svg"/>
      </div>
    </BoneTooltip>
  )
}