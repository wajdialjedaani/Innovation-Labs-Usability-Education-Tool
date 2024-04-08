import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../BoneTooltip";

export function TitleBar() {
  return (
    <div className={styles.heuristic8HeaderBar}>

    </div>
  )
}

export function TitleBarGreeting() {
  return (
    <BoneTooltip title="Profile Button">
      <div className={styles.heuristic8DropdownBox}>
        John Doe &nbsp;
        <img src="/icons/user.svg" />
      </div>
    </BoneTooltip>
  )
}

export function DocumentTitle() {
  return (
    <BoneTooltip title="Document Title">
      <div className={styles.heuristic8DropdownBox}>
        This is the Document Title
      </div>
    </BoneTooltip>
  )
}

export function SaveButton() {
  return (
    <BoneTooltip title="Save Button">
      <div className={styles.heuristic8SaveButton}>
        <img src="/icons/save.svg" />
        Save
      </div>
    </BoneTooltip>
  )

}

export function FormatBar() {
  return (
    <div className={styles.heuristic8FormatBar}>

    </div>
  )
}

function FormatBarButton({ icon, text, addDropdown }) {
  return (
    <div className={styles.heuristic8FormatOptionsButton}>
      {text && text}
      {icon && <img src={`/icons/${icon}.svg`} />}
      {addDropdown && <img src="/icons/chevron-down.svg" />}
    </div>
  )
}

export function UndoRedoModule() {
  return (
    <BoneTooltip title="Undo & Redo Module">
      <div className={`${styles.heuristic8FormatOptionsModule} ${styles.heuristic8NoLeftBorder}`}>
        <FormatBarButton
          text="Undo"
          icon="rotate-ccw"
        />
        <FormatBarButton
          text="Redo"
          icon="rotate-cw"
        />
      </div>
    </BoneTooltip>
  )
}

export function FontModule() {
  return (
    <BoneTooltip title="Font Module">
      <div className={styles.heuristic8FormatOptionsModule}>
        <FormatBarButton
          text="Helvetica"
          addDropdown
        />
      </div>
    </BoneTooltip>
  )
}

export function FontSizeModule() {
  return (
    <BoneTooltip title="Font Size Module">
      <div className={styles.heuristic8FormatOptionsModule}>

        <div className={styles.heuristic8FormatOptionsButton}>
          <img src="/icons/minus.svg" />
        </div>

        <div className={styles.heuristic8FontSizeBox}>21</div>

        <div className={styles.heuristic8FormatOptionsButton}>
          <img src="/icons/plus.svg" />
        </div>
      </div>
    </BoneTooltip>
  )
}

export function TextDecorationModule() {
  return (
    <BoneTooltip title="Text Decoration Module">
      <div className={styles.heuristic8FormatOptionsModule}>
        <FormatBarButton
          icon="bold"

        />
        <FormatBarButton
          icon="italic"

        />
        <FormatBarButton
          icon="underline"
        />

        <div className={styles.heuristic8FormatOptionsButton}>
          <div className={styles.heuristic8ColorBox}></div>
        </div>
      </div>
    </BoneTooltip>
  )
}

export function ListModule() {
  return (
    <BoneTooltip title="List Module">
      <div className={styles.heuristic8FormatOptionsModule}>
        <FormatBarButton
          icon="list"
          addDropdown
        />
        <FormatBarButton
          icon="layout"
          addDropdown
        />
      </div>
    </BoneTooltip>
  )
}

export function AttachmentModule() {
  return (
    <BoneTooltip title="Attachment Module">
      <div className={styles.heuristic8FormatOptionsModule}>
        <FormatBarButton
          icon="link"
          addDropdown
        />
        <FormatBarButton
          icon="image"
          addDropdown
        />
        <FormatBarButton
          icon="pie-chart"
          addDropdown
        />
      </div>
    </BoneTooltip>
  )
}

export function DocumentCanvas() {
  return (
    <div className={styles.heuristic8DocumentCanvas}>
      <div className={styles.heuristic8Document}></div>
    </div>
  )
}

