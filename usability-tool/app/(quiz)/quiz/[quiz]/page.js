"use client";
import Quiz from "@/components/quiz/Quiz";
import * as allHeuristicQuestions from "@/lib/quiz/questions";
import { redirect } from "next/navigation";
import { getAuthContext } from "@/app/(main)/components/AuthContextProvider";
// meta and quizObj should probably be combined into one js object later so that quizzes can be modularly imported from one file
// also, this would help for lockstate controlled by the QuizContextProvider

// const meta = {
//   navFooterOptions: {
//     prev: { title: "Hueristic 1 Lesson", href: "/lessons/1" },
//     next: { title: "UI Builder Activity", href: "/ui-builder/activity/1" },
//     nextLock: true,
//   },
// };

export default function Quiz1({ params }) {
  const {
    user,
    metaDataSuite: {
      metaData: { completedHeuristics },
    },
  } = getAuthContext();

  // if (!user) {
  //   return;
  // }

  //Redirect if the quiz isn't valid
  const quizId = Number(params.quiz);
  if (!quizId || quizId < 0) redirect("1");
  else if (quizId > 10) redirect("10");

  console.log(user);

  const currHeuristicMetaData = completedHeuristics[Number(params.quiz) - 1];
  //redirect them if they haven't read the textbook yet.
  if (currHeuristicMetaData < 1) {
    redirect(`/lessons/${params.quiz}`);
  }
  const meta = {
    navFooterOptions: {
      prev: {
        title: `Hueristic ${params.quiz} Lesson`,
        href: `/lessons/${params.quiz}`,
      },
      next: {
        title: "UI Builder Activity",
        href: `/ui-builder/activity/${params.quiz}`,
      },
      nextLock: currHeuristicMetaData != 2,
    },
  };

  const heuristicQuestions =
    allHeuristicQuestions[`heuristic${quizId}Questions`];

  const shuffledQuestions = heuristicQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
  return (
    <Quiz quizObj={shuffledQuestions} meta={meta} quizNumber={quizId - 1} />
  );
}
