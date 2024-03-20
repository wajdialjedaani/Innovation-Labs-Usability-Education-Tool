import styles from "@/styles/UIBones.module.scss"
import BoneTooltip from "../../BoneTooltip"

export default function Home(){
  return (
    <BoneTooltip title="House Icon"> 
      <div className={styles.twoImgHolder}>
        <img src="/UIBuilder/heuristic2/home.svg"/>
      </div>
    </BoneTooltip>
  )
}