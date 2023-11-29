import { useDraggable } from "@dnd-kit/core";

export default function Answer({ text, correct, quizID, answerID }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${quizID}${answerID}`,
    data: {
      quiz: quizID,
      answer: answerID,
    },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  const isCorrect = correct;
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
