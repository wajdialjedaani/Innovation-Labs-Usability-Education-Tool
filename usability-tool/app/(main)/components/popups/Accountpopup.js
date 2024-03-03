import "@/styles/accountpopup.scss";
import Link from "next/link";

import { auth } from "@/lib/firebase/firebase";
import { logOut } from "@/lib/firebase/auth";

import { getAuthContext } from "../AuthContextProvider";

import { nav } from "@/lib/tools/redirect";

import { useRouter } from "next/navigation";

export default function Accountpopup({ id, active }) {
  const router = useRouter();
  const { user } = getAuthContext();

  async function handleSignout() {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  }

  if (!user){
    return;
  }

  return (
    <div className="account-popup" role="menu" id={id} style={{maxHeight: active ? "100vh" : "0px"}}>
      <div>
        <p className="account-popup-signedinas">
          Signed in: <span className="account-popup-email">{user.email}</span>
        </p>
        <hr />
      </div>
      <Link href="/statistics" className="account-popup-list-item-link">
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
