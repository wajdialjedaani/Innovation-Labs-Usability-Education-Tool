import "@/styles/mainpage.scss";

export default function mainPage() {
  return (
    <main className="main-main">
      <div className="heuristic-btn-container">
        <a className="heuristic-btn" href="/lesson-1" target="_blank">
          <h3>Course 1</h3>
        </a>
        <a className="heuristic-btn" href="/lesson-2" target="_blank">
          <h3>Course 2</h3>
        </a>
        <a className="heuristic-btn" href="/lesson-3" target="_blank">
          <h3>Course 3</h3>
        </a>
        <a className="heuristic-btn" href="/lesson-4" target="_blank">
          <h3>Course 4</h3>
        </a>
        <a className="heuristic-btn" href="/lesson-5" target="_blank">
          <h3>Course 5</h3>
        </a>
      </div>
    </main>
  );
}
