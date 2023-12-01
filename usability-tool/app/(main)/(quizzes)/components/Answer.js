import { useDraggable } from "@dnd-kit/core";

export default function Answer({
  text,
  correct,
  isCorrect,
  quizID,
  answerID,
  func,
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${quizID}${answerID}`,
    disabled: isCorrect,
    data: {
      quiz: quizID,
      answer: answerID,
    },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        backgroundColor: isCorrect ? "green" : undefined,
      }
    : undefined;
  return (
    <div
      className="answer"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {text}
    </div>
  );
}
