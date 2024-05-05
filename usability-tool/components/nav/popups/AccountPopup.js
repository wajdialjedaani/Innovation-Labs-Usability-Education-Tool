import Link from "next/link";
import { logOut } from "@/lib/firebase/auth";
import styles from "@/styles/nav.module.scss";
import { getAuthContext } from "@/app/(heurisitcbuilder)/(main)/components/AuthContextProvider";

export default function Accountpopup() {
  const { user } = getAuthContext();

  async function handleSignout() {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={`dropdown`}>
      <button
        className={`${styles.dropdownBtn}`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Open the account dropdown menu"
      >
        <i className={`bi bi-person-circle fs-2 ${styles.dropDownImg}`}></i>
      </button>
      <ul className={`dropdown-menu dropdown-menu-end ${styles.dropDownMenu}`}>
        <li>
          <span className={`dropdown-item-text ${styles.dropDownItemText}`}>
            Signed in: <br /> {user?.displayName || user?.email}
          </span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className={`dropdown-item `} href="/statistics">
            Statistics
          </Link>
        </li>
        <li>
          <Link className={`dropdown-item `} href="/leaderboard">
            Leaderboard
          </Link>
        </li>
        <li>
          <button className={`dropdown-item`} onClick={() => handleSignout()}>
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
}
