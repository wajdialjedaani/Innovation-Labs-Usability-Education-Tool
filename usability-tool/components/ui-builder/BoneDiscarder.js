import { useDroppable } from "@dnd-kit/core"

import styles from "@/styles/UIBuilder.module.scss";
import { getContextSuite } from "./UIBuilderContextProvider";

import DraggableComponent from "./DraggableComponent";
import BoneSelector from "./BoneSelector";

export default function BoneDiscarder(props){

  const {widgets} = getContextSuite();

  const {isOver, setNodeRef} = useDroppable({
    id: 'BoneDiscarder',
  });

  return (
    <div ref={setNodeRef} className={styles.boneDiscarder} style={{backgroundColor: isOver ? "green" : "red"}}>
      discard components here
    </div>
  )
}