import "@/styles/accountpopup.scss";
import Link from "next/link";

import { logOut } from "@/lib/firebase/auth";

import { getAuthContext } from "../AuthContextProvider";

import { useRouter } from "next/navigation";

export default function Accountpopup({ id, active }) {
  const router = useRouter();
  const {
    user,
    metaDataSuite: { metaData },
  } = getAuthContext();

  if (!user) {
    return;
  }

  // const completion = metaData.completedHeuristics.reduce((acc, cur) => {
  //   return acc + cur;
  // }, 0);

  async function handleSignout() {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className="account-popup"
      role="menu"
      id={id}
      style={{ maxHeight: active ? "100vh" : "0px" }}
    >
      <div>
        <p className="account-popup-signedinas">
          Signed in:{" "}
          <span className="account-popup-email">
            {user.displayName || user.email}
          </span>
        </p>
        <hr />
      </div>

      <Link href="/statistics" className="account-popup-list-item-link btn">
        Statistics
      </Link>

      <button
        href="#"
        className="account-popup-list-item-link"
        onClick={() => {
          handleSignout();
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
