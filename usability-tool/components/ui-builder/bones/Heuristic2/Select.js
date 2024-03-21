import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function Select(){
  return (
    <BoneTooltip title="Hand Icon">
    <div className={styles.twoImgHolder}>
      <img src="/UIBuilder/heuristic2/select.svg"/>
    </div>
    </BoneTooltip>
  )
}