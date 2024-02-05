import styles from "@/styles/UIBones.module.scss";

export default function VolumeControls(){
  return (
    <div className={styles.volumeControls}>
      <img src="/icons/volume-2.svg"/>
      <div className={styles.fullvolumebar}>
        <div className={styles.volumeSlider1}/>
        <div className={styles.volumeSlider}/>
      </div>
    </div>
  )
}