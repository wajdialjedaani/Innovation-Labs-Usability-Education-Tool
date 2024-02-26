import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../../BoneTooltip";

export default function PlaybackSlider(){
  return (
    <BoneTooltip title="Playback Position Slider">
      <div className={styles.playbackSlider}>
        <div className={styles.playbackSlider1}></div>
        <div className={styles.playbackSlider2}></div>
      </div>
    </BoneTooltip>
  )
}