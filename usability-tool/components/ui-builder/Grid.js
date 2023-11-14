import { useDroppable } from "@dnd-kit/core"

import styles from "@/styles/UIBuilder.module.scss";

export default function Grid(props){

  const {isOver, setNodeRef} = useDroppable({
    id: 'UIBuilderGrid',
  });

  const style = {
    "backgroundColor": isOver ? 'green' : undefined,
  };

  return (
    <div ref={setNodeRef} className={styles.gridBody} style={style}>


    </div>
  )
}