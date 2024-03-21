import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function Zoom(){
  return (
    <BoneTooltip title="Magnifying Glass Icon">

    <div className={styles.twoImgHolder}>
      <img src="/UIBuilder/heuristic2/zoom.svg"/>
    </div>
    </BoneTooltip>
  )
}