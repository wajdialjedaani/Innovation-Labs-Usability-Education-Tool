import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../BoneTooltip";

import TopBar from "./Heuristic2/static/TopBar";

export function Canvas() {
  return (
    <div className={styles.heuristic3Canvas}>
      <img src="/dog.jpg" />
    </div>
  )
}

export function ToolBar() {
  return (
    <div className={styles.heuristic7ToolBar}>
      <div className={styles.heuristic7ButtonHolder}>
        <img src="/UIBuilder/heuristic2/move.svg" />

        <img src="/UIBuilder/heuristic2/select.svg" />

        <img src="/UIBuilder/heuristic2/selectcolor.svg" />

        <img src="/UIBuilder/heuristic2/draw2.svg" />

        <img src="/UIBuilder/heuristic2/draw1.svg" />

        <img src="/UIBuilder/heuristic2/shape.svg" />

        <img src="/UIBuilder/heuristic2/slantline.svg" />

        <img src="/UIBuilder/heuristic2/text.svg" />


        <img src="/UIBuilder/heuristic2/gradient.svg" />
      </div>
    </div>
  )
}

export function FavoritesPanel() {
  return (
    <div className={styles.heuristic7rightsidepanel}>

    </div>
  )
}

export function Heuristic7Static() {
  return (
    <div className={styles.twoStatic}>
      <TopBar />

      <div className={styles.twoBottomHolder}>
        <ToolBar />
        <Canvas />
        <FavoritesPanel />
      </div>
    </div>
  )
}

export function ColorSelector() {
  return (
    <div className={styles.heuristic7ColorSelectorContainer}>
      <div className={styles.heuristic7PanelTitle}>Color Selector</div>
      <div className={styles.heuristic7ColorPicker}>
        <img src="/UIBuilder/heuristic7/color-selector.png" />
      </div>
    </div>
  )
}

export function QuickToolsPanel() {
  return (
    <div className={styles.heuristic7UserToolsContainer}>
      <div className={styles.heuristic7PanelTitle}>User Tools</div>
      <div style={{ height: "140px" }} />

      <div className={styles.heuristic7BottomBar}>
        <img src="/icons/plus.svg" />
        <img src="/icons/file-plus.svg" />
      </div>
    </div>
  )
}

export function QuickToolsOptions() {
  return (
    <div className={styles.heuristic7QuickToolList}>
      <div>
        <img src="/icons/tool.svg" />
        Add 5 Layers
      </div>
      <div>
        <img src="/icons/code.svg" />

        userscript.py
      </div>
      <div>
        <img src="/icons/tool.svg" />

        Quick Align
      </div>
      <div>
        <img src="/icons/tool.svg" />

        Apply B&W Filter
      </div>
      <div>
        <img src="/icons/code.svg" />

        sephiaAddMis.py
      </div>
    </div>
  )
}

export function LayerPanel() {
  return (
    <div className={styles.heuristic7UserToolsContainer}>
      <div className={styles.heuristic7PanelTitle}>Layers</div>
      <div className={styles.heuristic7QuickToolList}>
        <div>
          <img src="/icons/layers.svg" />
          Layer 1
        </div>
        <div>
          <img src="/icons/layers.svg" />
          Layer 2
        </div>
        <div>
          <img src="/icons/layers.svg" />
          Layer 3
        </div>
        <div>
          <img src="/icons/layers.svg" />
          Layer 4
        </div>
        <div>
          <img src="/icons/layers.svg" />
          Layer 5
        </div>
        <div>
          <img src="/icons/layers.svg" />
          Layer 6
        </div>

      </div>
      <div className={styles.heuristic7BottomBar}>
        <img src="/icons/plus.svg" />
        <img src="/icons/copy.svg" />
      </div>
    </div>
  )
}

