import { useDroppable } from "@dnd-kit/core"

import styles from "@/styles/UIBuilder.module.scss";
import { getContextSuite } from "./UIBuilderContextProvider";

import DraggableComponent from "./DraggableComponent";
import BoneSelector from "./BoneSelector";

export default function Grid(props){

  const {widgets} = getContextSuite();

  const {isOver, setNodeRef} = useDroppable({
    id: 'UIBuilderGrid',
  });

  return (
    <div ref={setNodeRef} className={styles.gridBody}>
      {widgets.grid.length > 0 && widgets.grid.map((widget, index) => (
        <DraggableComponent id={widget.id} widget={widget} key={`gridKey--${widget.id}`}>
          <BoneSelector type={widget.bone}/>
        </DraggableComponent>
      ))}
    </div>
  )
}