import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../../BoneTooltip";

export default function AlbumBox(){
  return (
    <BoneTooltip title="Album Panel">
    <div className={styles.albumBox}>
      <div className={styles.albumContainer}>
        <img src="/UIBuilder/cover1.png"/>
        <div className={styles.albumContainerInfo}>
          <div className={styles.albumContainerInfoTitle}>The Blue Album</div>
          <div>Web developer</div>
        </div>
      </div>
      <div className={styles.albumContainer}>
        <img src="/UIBuilder/cover2.png"/>
        <div className={styles.albumContainerInfo}>
          <div className={styles.albumContainerInfoTitle}>The Pink Album</div>
          <div>Web developer</div>
        </div>
      </div>
      <div className={styles.albumContainer}>
        <img src="/UIBuilder/cover3.png"/>
        <div className={styles.albumContainerInfo}>
          <div className={styles.albumContainerInfoTitle}>The Green Album</div>
          <div>Web developer</div>
        </div>
      </div>
      <div className={styles.albumContainer}>
        <img src="/UIBuilder/cover4.png"/>
        <div className={styles.albumContainerInfo}>
          <div className={styles.albumContainerInfoTitle}>The Orange Album</div>
          <div>Web developer</div>
        </div>
      </div>
      <div className={styles.albumContainer}>
        <img src="/UIBuilder/cover5.png"/>
        <div className={styles.albumContainerInfo}>
          <div className={styles.albumContainerInfoTitle}>The Blue Album 2</div>
          <div>Web developer</div>
        </div>
      </div>
      <div className={styles.albumContainer}>
        <img src="/UIBuilder/cover6.png"/>
        <div className={styles.albumContainerInfo}>
          <div className={styles.albumContainerInfoTitle}>The Red Album</div>
          <div>Web developer</div>
        </div>
      </div>
    </div>
    </BoneTooltip>
  )
}