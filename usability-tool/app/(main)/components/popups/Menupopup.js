import "@/styles/menupopup.scss";

export default function Menupopup() {
  return (
    <div className="menu-popup">
      <a href="/main" className="menu-popup-list-item-link">
        Home
      </a>
      <a href="/lesson-1" className="menu-popup-list-item-link">
        Course 1
      </a>
      <a href="/lesson-2" className="menu-popup-list-item-link">
        Course 2
      </a>
      <a href="/lesson-3" className="menu-popup-list-item-link">
        Course 3
      </a>
      <a href="/lesson-4" className="menu-popup-list-item-link">
        Course 4
      </a>
      <a href="/lesson-5" className="menu-popup-list-item-link">
        Course 5
      </a>
      <a href="/statistics" className="menu-popup-list-item-link">
        Statistics
      </a>
    </div>
  );
}
