import "@/styles/mainpage.scss";
import "@/styles/lesson.scss";

export default function Lesson9() {
  return (
    <div>
      <div className={"main-text-container"}>
        <h1>Heuristic 9: Help users recognize, diagnose, and recover from errors</h1>
        <p>
          In contrast, the “help users recognize, diagnose, and recover from errors” usability heuristic acknowledges
          that even after implementing error mitigation techniques, errors will still occur. In order to best help users
          navigate through errors, when an error occurs a meaningful message should appear that helps the user to
          understand what went wrong and what steps they can take to rectify it. This will help the user to not make the
          same error again in the future as well as to get them back to their task as soon as possible.
        </p>
      </div>
      <div className={"heuristic-btn-container"}>
        <a className="previous-heuristic heuristic-btn" href="/lesson-8" target="_self">
          <h3>Heuristic 8</h3>
        </a>
        <a className="next-heuristic heuristic-btn" href="/lesson-10" target="_self">
          <h3>Heuristic 10</h3>
        </a>
      </div>
    </div>
  )
}