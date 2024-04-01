import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../BoneTooltip";

export default function SearchBar(){
  return (
    <BoneTooltip title="Search Bar">
    <div className={styles.searchBarContainer}>
      <img src="/icons/search.svg"/>
      <div className={styles.searchBarText}>Find your next fit...</div>
    </div>
    </BoneTooltip>
  )
}