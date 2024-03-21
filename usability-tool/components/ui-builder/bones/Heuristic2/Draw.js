import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function Draw(){
  return (
    <BoneTooltip title="Pencil Icon">
      <div className={styles.twoImgHolder}>
        <img src="/UIBuilder/heuristic2/draw1.svg"/>
      </div>
    </BoneTooltip>
  )
}