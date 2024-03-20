import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function SelectColor(){
  return (
    <BoneTooltip title="Dropper on Monitor Icon">
      <div className={styles.twoImgHolder}>
        <img src="/UIBuilder/heuristic2/selectcolor.svg"/>
      </div>
    </BoneTooltip>
  )
}