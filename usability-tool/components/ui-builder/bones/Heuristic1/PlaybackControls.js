import styles from "@/styles/UIBones.module.scss";

export default function PlaybackControls(){
  return (
    <div className={styles.playbackControls}>
      <img src="/icons/skip-back.svg"/>
      <img src="/icons/play.svg"/>
      <img src="/icons/skip-forward.svg"/>
    </div>
  )
}