import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function Gradient(){
  return (
    <BoneTooltip title="Greyscale Icon"> 
      <div className={styles.twoImgHolder}>
        <img src="/UIBuilder/heuristic2/gradient.svg"/>
      </div>
    </BoneTooltip>
  )
}