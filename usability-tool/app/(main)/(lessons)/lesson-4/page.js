import "@/styles/mainpage.scss";
import "@/styles/lesson.scss";

export default function Lesson4() {
  return (
    <div>
      <div className={"main-text-container"}>
        <h1>Heuristic 4: Consistency and standards</h1>
        <p>
          The “consistency and standards” heuristic advocates for the system to follow established conventions throughout
          the interface. Creating conventions that adhere to user expectations can reduce confusion and cognitive load,
          create a sense of familiarity, and allow users to understand a new aspect of the system easier by drawing on
          their knowledge of previous interactions within the system.
        </p>
      </div>
      <div className={"heuristic-btn-container"}>
        <a className="previous-heuristic heuristic-btn" href="/lesson-3" target="_self">
          <h3>Heuristic 3</h3>
        </a>
        <a className="next-heuristic heuristic-btn" href="/lesson-5" target="_self">
          <h3>Heuristic 5</h3>
        </a>
      </div>
    </div>
  )
}