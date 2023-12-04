import styles from "@/styles/UIBones.module.scss";

export default function PostContent(){
  return (
    <div className={styles.postBody}> 
      <div className={styles.postUser}>
        <img src="/icons/user.svg"/>
        username
      </div>
      <img src="/dog.jpg"/>
      <div className={styles.postDescription}>just got a dog!</div>
    </div>
  )
}