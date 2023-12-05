import "@/styles/mainpage.scss";
import "@/styles/lesson.scss";

export default function Lesson5() {
  return (
    <div>
      <div className={"main-text-container"}>
        <h1>Heuristic 5: Error prevention</h1>
        <p>
          “Error prevention” emphasizes designing interfaces such that user errors are anticipated and avoided. This can
          be accomplished by using clear and descriptive labels for fields, asking for confirmation before performing
          irreversible actions, and constraints that prevent the user from entering invalid data. By mitigating errors,
          users can expect an increase in productivity as well as their experience.
        </p>
      </div>
      <div className={"heuristic-btn-container"}>
        <a className="previous-heuristic heuristic-btn" href="/lesson-4" target="_self">
          <h3>Heuristic 4</h3>
        </a>
        <a className="next-heuristic heuristic-btn" href="/lesson-6" target="_self">
          <h3>Heuristic 6</h3>
        </a>
      </div>
    </div>
  )
}