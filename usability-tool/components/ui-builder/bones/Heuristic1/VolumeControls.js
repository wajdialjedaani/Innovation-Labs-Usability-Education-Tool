import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../../BoneTooltip";

export default function VolumeControls(){
  return (
    <BoneTooltip title="Volume Slider">
      <div className={styles.volumeControls}>
        <img src="/icons/volume-2.svg"/>
        <div className={styles.fullvolumebar}>
          <div className={styles.volumeSlider1}/>
          <div className={styles.volumeSlider}/>
        </div>
      </div>
    </BoneTooltip>
  )
}