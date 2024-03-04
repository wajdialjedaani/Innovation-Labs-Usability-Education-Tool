import Textbook from "@/components/textbook/Textbook";
import heuristicSelector from "@/lib/textbook/hueristicSelector";
import { redirect } from "next/navigation";

export default function Lesson({ params }) {
  
  const lessonId = Number(params.lesson);
  const hueristicObj = heuristicSelector(lessonId)
  
  if (!lessonId || lessonId < 0) redirect("1");
  else if (lessonId > 10) redirect("10");
  
  return <Textbook heuristicObj={hueristicObj} />;
}
