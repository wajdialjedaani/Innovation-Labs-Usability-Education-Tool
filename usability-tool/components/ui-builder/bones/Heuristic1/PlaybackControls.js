import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../../BoneTooltip";

export default function PlaybackControls(){
  return (
    <BoneTooltip title="Playback Controls">
    <div className={styles.playbackControls}>
      <img src="/icons/skip-back.svg"/>
      <img src="/icons/play.svg"/>
      <img src="/icons/skip-forward.svg"/>
    </div>
    </BoneTooltip>
  )
}