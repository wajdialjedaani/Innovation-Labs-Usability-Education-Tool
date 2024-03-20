import styles from "@/styles/UIBones.module.scss";

export default function TopBar(){
  return (
    <div className={styles.twoTopBar}>
      <div className={styles.twoTopBarList}>
        <div>File</div>
        <div>Edit</div>
        <div>Image</div>
        <div>Layer</div>
      </div>
      <div>photo.png - Atomic PhotoEdit</div>
      <div></div>
    </div>
  )
}