"use client";
import Textbook from "@/components/textbook/Textbook";
import heuristicSelector from "@/lib/textbook/hueristicSelector";
import { getAuthContext } from "@/app/(main)/components/AuthContextProvider";
import { redirect } from "next/navigation";

export default function Lesson({ params }) {
  const {
    metaDataSuite: { metaData, updateMetaData },
  } = getAuthContext();
  const lessonId = Number(params.lesson);
  const hueristicObj = heuristicSelector(lessonId);

  if (!lessonId || lessonId < 0) redirect("1");
  else if (lessonId > 10) redirect("10");

  //update the metadata
  if (metaData.completedHeuristics[lessonId - 1] === 0) {
    const newMetaData = { ...metaData };
    newMetaData.completedHeuristics[lessonId - 1] = Math.max(
      newMetaData.completedHeuristics[lessonId - 1],
      1
    );
    updateMetaData(newMetaData);
  }

  return <Textbook heuristicObj={hueristicObj} />;
}
