import Textbook from "@/components/textbook/Textbook";
import { redirect } from "next/navigation";
export default function Lesson({params}) {
    const lessonId = Number(params.lesson)
    if(!lessonId || lessonId < 0)
        redirect("1")
    else if(lessonId > 10)
        redirect("10")
    return <Textbook filepath={`/public/lessons/Lesson${lessonId}.md`} />;
}