import "@/styles/accountpopup.scss";
import Link from "next/link";

export default function Accountpopup() {
  return (
    <div className="account-popup">
      <p className="account-popup-signedinas">
        Signed in: <span className="account-popup-email">Email</span>
      </p>
      <Link href="#" className="account-popup-list-item-link">
        Statistics
      </Link>
      <Link href="#" className="account-popup-list-item-link">
        Sign Out
      </Link>
    </div>
  );
}
