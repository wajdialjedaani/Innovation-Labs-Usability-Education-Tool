import { useDroppable } from "@dnd-kit/core";

export default function QuizDrop({ dropId, text, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: dropId,
  });

  const style = {
    backgroundColor: isOver ? "green" : undefined,
  };

  return (
    <div className="empty-box" ref={setNodeRef} style={style}>
      {text} {children}
    </div>
  );
}
