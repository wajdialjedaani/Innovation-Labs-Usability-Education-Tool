// dndkit!
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import styles from "@/styles/UIBuilder.module.scss";

export default function DraggableComponent({id, widget, drawerMode, ...props}){
  const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
    id: id,
  });

  //transform && console.log(transform);

  const style = transform ? {
    transform: CSS.Translate.toString(transform),
    ...widget.style //Widget.style contains data collected from drag events, necessary for correctly updating positioning styles
  } : widget.style;

  return (
    <div ref={setNodeRef} style={{...style, /* zIndex: 100 */}} {...listeners} {...attributes}>
      <div className={`${isDragging && styles.hiddenThumbBone}`}>
      {props.children}
      </div>
    </div>
  );
}