import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function ThumbtackIcon(){
  return (
    <BoneTooltip title="Pin Icon">
      <div className={styles.twoImgHolder}>
      <img src="/UIBuilder/heuristic2/pin.svg"/>
      </div>
    </BoneTooltip>

  )
}