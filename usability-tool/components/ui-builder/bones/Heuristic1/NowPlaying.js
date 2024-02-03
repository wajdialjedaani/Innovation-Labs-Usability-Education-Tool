import styles from "@/styles/UIBones.module.scss";

export default function NowPlaying(){
  return (
    <div className={styles.nowPlaying}>
      <img src="/UIBuilder/cover3.png"/>

      <div className={styles.songInfo}>
        <div className={styles.songTitle}>Song about a website</div>
        <div>Web Developer</div>
      </div>
    </div>
  )
}