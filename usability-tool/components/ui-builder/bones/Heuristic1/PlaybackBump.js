import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../../BoneTooltip";

export default function PlaybackBump(){
  return (
    <BoneTooltip title="Album Playing Indicator">
      <div className={styles.playbackBump}>
        <img src="/icons/play.svg"/>
      </div>
    </BoneTooltip>
  )
}