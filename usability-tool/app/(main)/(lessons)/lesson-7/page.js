import "@/styles/mainpage.scss";
import "@/styles/lesson.scss";

export default function Lesson7() {
  return (
    <div>
      <div className={"main-text-container"}>
        <h1>Heuristic 7: Flexibility and efficiency of use</h1>
        <p>
          On the other hand, “flexibility and efficiency of use” encourages designing interfaces that cater to both new
          and expert users. Ways to increase a system’s “flexibility and efficiency of use” include the ability for users
          to create custom keyboard shortcuts, customizable settings, and functionalities that expedite more laborious
          tasks on the system. This allows both frequent users and newcomers to optimize their work environment in a way
          that best suits them.
        </p>
      </div>
      <div className={"heuristic-btn-container"}>
        <a className="previous-heuristic heuristic-btn" href="/lesson-6" target="_self">
          <h3>Heuristic 6</h3>
        </a>
        <a className="next-heuristic heuristic-btn" href="/lesson-8" target="_self">
          <h3>Heuristic 8</h3>
        </a>
      </div>
    </div>
  )
}