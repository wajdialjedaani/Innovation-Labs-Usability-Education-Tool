import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function Copy(){
  return (
    <BoneTooltip title="Scissors Icon">
      <div className={styles.twoImgHolder}>
        <img src="/UIBuilder/heuristic2/copy.svg"/>
      </div>
    </BoneTooltip>
  )
}