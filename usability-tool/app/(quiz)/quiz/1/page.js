import Quiz from "@/components/quiz/Quiz";
import { heuristic1Questions } from "@/lib/quiz/questions";

// meta and quizObj should probably be combined into one js object later so that quizzes can be modularly imported from one file
// also, this would help for lockstate controlled by the QuizContextProvider

const meta = {
  navFooterOptions: {
    prev: { title: "Hueristic 1 Lesson", href: "/lessons/1" },
    next: { title: "UI Builder Activity", href: "/ui-builder/activity/1" },
    nextLock: false,
  },
};

export default function Quiz1() {
  const shuffledQuestions = heuristic1Questions
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
  return <Quiz quizObj={shuffledQuestions} meta={meta} />;
}
