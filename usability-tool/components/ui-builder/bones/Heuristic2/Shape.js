import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function Shape(){
  return (
    <BoneTooltip title="Polygon Icon">
      <div className={styles.twoImgHolder}>
      <img src="/UIBuilder/heuristic2/shape.svg"/>
      </div>
    </BoneTooltip>

  )
}