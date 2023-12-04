import styles from "@/styles/UIBones.module.scss";

export default function SearchBar(){
  return (
    <div className={styles.searchBarContainer}>
      <img src="/icons/search.svg"/>
      <div className={styles.searchBarText}>Search...</div>
    </div>
  )
}