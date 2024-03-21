import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function Slantline(){
  return (
    <BoneTooltip title="Slanted Line Icon">
      <div className={styles.twoImgHolder}>
      <img src="/UIBuilder/heuristic2/slantline.svg"/>
      </div>
    </BoneTooltip>

  )
}