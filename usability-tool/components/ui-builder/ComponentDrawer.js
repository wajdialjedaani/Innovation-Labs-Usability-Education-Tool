import styles from "@/styles/UIBuilder.module.scss";

import { useDroppable } from "@dnd-kit/core"

import { getContextSuite } from "./UIBuilderContextProvider";

import DraggableComponent from "./DraggableComponent"
import BoneSelector from "./BoneSelector"
import BoneDiscarder from "./BoneDiscarder";

export default function ComponentDrawer({widgets, ...props}){

  const {scenarioInformation} = getContextSuite();

  const {isOver, setNodeRef} = useDroppable({
    id: 'ComponentDrawer',
  });

  return (
    <div ref={setNodeRef} className={styles.componentDrawer} style={props.style}>
      <div className={styles.componentDrawerHeader} role="header">
        Components
      </div>

      {widgets.drawer.map((widget, index) => (
        <DraggableComponent id={widget.id} widget={widget} key={`drawerKey--${widget.id}`}>
          <BoneSelector type={widget.bone} drawerMode={true}/>
        </DraggableComponent>
      ))}

      {scenarioInformation.title === "developer mode" &&
        <BoneDiscarder />
      }
    </div>
  )
}