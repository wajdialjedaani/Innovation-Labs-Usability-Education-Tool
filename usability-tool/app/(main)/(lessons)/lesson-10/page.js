import "@/styles/mainpage.scss";
import "@/styles/lesson.scss";

export default function Lesson10() {
  return (
    <div>
      <div className={"main-text-container"}>
        <h1>Heuristic 10: Help and documentation</h1>
        <p>
          “Help and documentation” refers to the importance of providing assistance to the user when they need it. This
          could include FAQs, tutorials, or more in-depth guides. If done correctly, “help and documentation” aids users
          in learning about the system as well as resolving any issues they might have.
        </p>
      </div>
      <div className={"heuristic-btn-container"}>
        <a className="previous-heuristic heuristic-btn" href="/lesson-9" target="_self">
          <h3>Heuristic 9</h3>
        </a>
      </div>
    </div>
  )
}