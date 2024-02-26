import Quiz from "@/components/quiz/Quiz";
import * as allHeuristicQuestions from "@/lib/quiz/questions";
import { redirect } from "next/navigation";
// meta and quizObj should probably be combined into one js object later so that quizzes can be modularly imported from one file
// also, this would help for lockstate controlled by the QuizContextProvider

const meta = {
  navFooterOptions: {
    prev: { title: "Hueristic 1 Lesson", href: "/lessons/1" },
    next: { title: "UI Builder Activity", href: "/ui-builder/activity/1" },
    nextLock: false,
  },
};

export default function Quiz1({ params }) {
  const quizId = Number(params.quiz);
  if (!quizId || quizId < 0) redirect("1");
  else if (quizId > 10) redirect("10");

  const heuristicQuestions =
    allHeuristicQuestions[`heuristic${quizId}Questions`];

  const shuffledQuestions = heuristicQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
  return <Quiz quizObj={shuffledQuestions} meta={meta} />;
}
