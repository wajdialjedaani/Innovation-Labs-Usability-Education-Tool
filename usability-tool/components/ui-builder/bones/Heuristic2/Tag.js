import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function TagIcon(){
  return (
    <BoneTooltip title="Tag Icon">
      <div className={styles.twoImgHolder}>
      <img src="/UIBuilder/heuristic2/tag.svg"/>
      </div>
    </BoneTooltip>

  )
}