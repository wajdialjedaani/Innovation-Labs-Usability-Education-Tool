import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function Text(){
  return (
    <BoneTooltip title="T Icon">
    <div className={styles.twoImgHolder}>
      <img src="/UIBuilder/heuristic2/text.svg"/>
    </div>
    </BoneTooltip>
  )
}