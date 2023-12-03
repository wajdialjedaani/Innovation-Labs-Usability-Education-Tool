import styles from "@/styles/UIBuilder.module.scss";

import { useDroppable } from "@dnd-kit/core"

import DraggableComponent from "./DraggableComponent"
import BoneSelector from "./BoneSelector"

export default function ComponentDrawer({widgets, ...props}){
  const {isOver, setNodeRef} = useDroppable({
    id: 'ComponentDrawer',
  });

  return (
    <div ref={setNodeRef} className={styles.componentDrawer} style={props.style}>
      <div className={styles.componentDrawerHeader} role="header">
        Components
      </div>

      {widgets.drawer.map((widget, index) => (
        <DraggableComponent id={widget.id} widget={widget}>
          <BoneSelector type={widget.bone} drawerMode={true}/>
        </DraggableComponent>
      ))}
    </div>
  )
}