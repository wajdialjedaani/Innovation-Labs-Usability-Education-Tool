import styles from "@/styles/UIBuilder.module.scss";

import { useDroppable } from "@dnd-kit/core"

import DraggableComponent from "./ui-builder/DraggableComponent"
import BoneSelector from "./ui-builder/BoneSelector"

export default function ComponentDrawer({widgets, ...props}){
  const {isOver, setNodeRef} = useDroppable({
    id: 'ComponentDrawer',
  });

  return (
    <div ref={setNodeRef} className={styles.componentDrawer} style={props.style}>
      {widgets.map((widget, index) => (
        <DraggableComponent id={widget.id} widget={widget}>
          <BoneSelector type={widget.bone}/>
        </DraggableComponent>
      ))}
    </div>
  )
}