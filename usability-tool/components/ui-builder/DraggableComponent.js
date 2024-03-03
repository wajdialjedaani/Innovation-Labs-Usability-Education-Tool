// dndkit!
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function DraggableComponent({id, widget, ...props}){
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
  });

  const style = transform ? {
    transform: CSS.Translate.toString(transform),
    ...widget.style //Widget.style contains data collected from drag events, necessary for correctly updating positioning styles
  } : widget.style;

  return (
    <div ref={setNodeRef} style={{...style, /* zIndex: 100 */}} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
}