import styles from "@/styles/UIBones.module.scss";

export default function NavBar(){
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarButtonsContainer}>
        <div className={styles.navBarButton}>
          <img src="/icons/home.svg"/>
          Home
        </div>
        <div className={styles.navBarButton}>
          <img src="/icons/bell.svg"/>
          Notifications
        </div>
        <div className={styles.navBarButton}>
          <img src="/icons/tv.svg"/>
          Explore
        </div>
        <div className={styles.navBarButton}>
          <img src="/icons/user.svg"/>
          Profile
        </div>
        <div className={styles.navBarButton}>
          <img src="/icons/settings.svg"/>
          Settings
        </div>
      </div>
    </div>
  )
}