import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function MagicWand(){
  return (
    <BoneTooltip title="Wand Icon">
      <div className={styles.twoImgHolder}>
        <img src="/UIBuilder/heuristic2/weirdwand.svg"/>
      </div>
    </BoneTooltip>
  )
}