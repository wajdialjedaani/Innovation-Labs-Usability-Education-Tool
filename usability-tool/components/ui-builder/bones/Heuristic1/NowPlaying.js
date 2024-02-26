import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../../BoneTooltip";

export default function NowPlaying(){
  return (
    <BoneTooltip title="Current Song Display">
      <div className={styles.nowPlaying}>
        <img src="/UIBuilder/cover3.png"/>

        <div className={styles.songInfo}>
          <div className={styles.songTitle}>Song about a website</div>
          <div>Web Developer</div>
        </div>
      </div>
    </BoneTooltip>
  )
}