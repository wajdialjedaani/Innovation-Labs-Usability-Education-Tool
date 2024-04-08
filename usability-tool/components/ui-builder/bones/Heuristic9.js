import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../BoneTooltip";

export function AlertIcon() {
  return (
    <BoneTooltip title="Alert Icon">
      <div className={styles.heuristic9AlertIcon}>
        <img src="/icons/alert-triangle.svg" />
      </div>
    </BoneTooltip>
  )
}

export function ErrorLabel() {
  return (
    <BoneTooltip title="Error Label">

      <div className={styles.heuristic9ErrorLabel}>
        Error 404: Page Not Found
      </div>
    </BoneTooltip>
  )
}

export function InbodySearchBar() {
  return (
    <BoneTooltip title="Search Bar">
      <div className={styles.heuristic9SearchBar}>
        <img src="/icons/search.svg" />
        Find your next fit...
      </div>
    </BoneTooltip>
  )
}

export function MissingPageErrorReporting() {
  return (
    <BoneTooltip title="Error Feedback Request">

      <div className={styles.heuristic9ErrorReporting}>
        Are we missing a page? <span className={styles.heuristic9link}>Let us know</span>.
      </div>
    </BoneTooltip>
  )
}