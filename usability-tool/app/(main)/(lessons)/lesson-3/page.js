import "@/styles/mainpage.scss";
import "@/styles/lesson.scss";

export default function Lesson3() {
  return (
    <div>
      <div className={"main-text-container"}>
        <h1>Heuristic 3: User control and freedom</h1>
        <p>
          “User control and freedom” puts an emphasis on giving the user options. This includes the ability to navigate
          the system freely, undo or back buttons, and the ability to easily exit unwanted states. This allows the user
          to correct mistakes and backtrack with minimal frustration.
        </p>
      </div>
      <div className={"heuristic-btn-container"}>
        <a className="previous-heuristic heuristic-btn" href="/lesson-2" target="_self">
          <h3>Heuristic 2</h3>
        </a>
        <a className="next-heuristic heuristic-btn" href="/lesson-4" target="_self">
          <h3>Heuristic 4</h3>
        </a>
      </div>
    </div>
  )
}