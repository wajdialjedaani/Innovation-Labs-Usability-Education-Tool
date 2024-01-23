import "@/styles/accountpopup.scss";
import Link from "next/link";

import { auth } from "@/lib/firebase/firebase";
import { logOut } from "@/lib/firebase/auth";

import { nav } from "@/lib/tools/redirect";

export default function Accountpopup() {
  const email = auth.currentUser?.toJSON().email;
  return (
    <div className="account-popup">
      {email ? (
        <p className="account-popup-signedinas">
          Signed in: <span className="account-popup-email">{email}</span>
        </p>
      ) : null}
      <Link href="#" className="account-popup-list-item-link">
        Statistics
      </Link>
      <Link
        href="#"
        className="account-popup-list-item-link"
        onClick={() => {
          logOut();
          nav("/");
        }}
      >
        Sign Out
      </Link>
    </div>
  );
}
