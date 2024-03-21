import styles from "@/styles/Textbook.module.scss"

export default function Header({headerImg, imgPositioning, title}){
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerImage} style={headerImg}>&nbsp;</div>

      <h1 className={styles.headerTitleBox}>{title}</h1>
    </div>
  )
}