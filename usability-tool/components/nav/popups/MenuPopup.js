import Link from "next/link";
import styles from "@/styles/nav.module.scss";
export default function MenuPopup() {
  return (
    <div className={`dropdown`}>
      <button
        className={`${styles.dropdownBtn}`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Open the main dropdown menu"
      >
        <i className={`bi bi-list fs-2 ${styles.dropDownImg}`}></i>
      </button>
      <ul className={`dropdown-menu ${styles.dropDownMenu}`}>
        <li>
          <Link className={`dropdown-item`} href="/main">
            Home
          </Link>
        </li>
        {new Array(10).fill(0).map((_, i) => (
          <li>
            <Link
              className={`dropdown-item`}
              href={`/lessons/${i + 1}`}
              key={i}
            >
              Heuristic {i + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
