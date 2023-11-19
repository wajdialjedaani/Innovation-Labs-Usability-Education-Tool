import "@/styles/page.module.scss";

export default function LessonsPage() {
    return (
      <main>
          <div className={"lesson-btn"}>
              <a href={"/lessons/lesson-1"}>Lesson 1</a>
          </div>
          <div className={"lesson-btn"}>
              <a href={"/lessons/lesson-2"}>Lesson 2</a>
          </div>
          <div className={"lesson-btn"}>
              <a href={"/lessons/lesson-3"}>Lesson 3</a>
          </div>
          <div className={"lesson-btn"}>
              <a href={"/lessons/lesson-4"}>Lesson 4</a>
          </div>
          <div className={"lesson-btn"}>
              <a href={"/lessons/lesson-5"}>Lesson 5</a>
          </div>

      </main>
    );
}