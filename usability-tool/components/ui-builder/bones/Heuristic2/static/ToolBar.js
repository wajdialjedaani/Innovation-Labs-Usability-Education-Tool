import styles from "@/styles/UIBones.module.scss";

export default function ToolBar(){
  return (
    <div className={styles.twoToolBar}>
      <div className={styles.twoToolBarButtonHolder}>
        <div>Move</div>
        <div>Grab</div>
        <div>Zoom</div>
        <div>Cut</div>
        <div>Paste</div>
        <div>Draw</div>
        <div>Erase</div>
        <div>Text</div>
        <div>Shape</div>
        <div>Select Color</div>
      </div>
    </div>
  )
}