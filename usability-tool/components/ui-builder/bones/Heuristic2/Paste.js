import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function Paste(){
  return (
    <BoneTooltip title="Clipboard Icon">
    <div className={styles.twoImgHolder}>
      <img src="/UIBuilder/heuristic2/paste.svg"/>
    </div>
    </BoneTooltip>
  )
}