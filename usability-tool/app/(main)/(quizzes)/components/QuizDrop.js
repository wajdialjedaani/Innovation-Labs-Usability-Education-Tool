import { useDroppable } from "@dnd-kit/core";

export default function QuizDrop({ dropId, text, holdsCorrect, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: dropId,
    disabled: holdsCorrect,
  });

  const style = {
    backgroundColor: !holdsCorrect ? (isOver ? "green" : undefined) : undefined,
    opacity: holdsCorrect ? 0.5 : 1,
  };

  return (
    <div className="empty-box" ref={setNodeRef} style={style}>
      {text} {children}
    </div>
  );
}
