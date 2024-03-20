import { useDroppable } from "@dnd-kit/core"

import styles from "@/styles/UIBuilder.module.scss";
import { getContextSuite } from "./UIBuilderContextProvider";

import DraggableComponent from "./DraggableComponent";
import BoneSelector from "./BoneSelector";

export default function Grid(props){

  const {widgets, staticWidgets} = getContextSuite();

  const {isOver, setNodeRef} = useDroppable({
    id: 'UIBuilderGrid',
  });

  return (
    <div ref={setNodeRef} className={styles.gridBody}>
      {
        staticWidgets.length > 0 && staticWidgets.map((widget, index) => (
          <div style={widget.style} key={`UIBUILDERSOLUTIONBONE--${index}`}>
            <BoneSelector type={widget.bone}/>
          </div>
        ))
      }
      {widgets.grid.length > 0 && widgets.grid.map((widget, index) => (
        <DraggableComponent id={widget.id} widget={widget} key={`gridKey--${widget.id}`}>
          <BoneSelector type={widget.bone}/>
        </DraggableComponent>
      ))}
    </div>
  )
}