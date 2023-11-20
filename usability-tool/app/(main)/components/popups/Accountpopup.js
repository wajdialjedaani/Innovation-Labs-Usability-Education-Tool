import "@/styles/accountpopup.scss";

export default function Accountpopup() {
  return (
    <div className="account-popup">
      <p className="account-popup-signedinas">
        Signed in: <span className="account-popup-email">Email</span>
      </p>
      <a href="#" className="account-popup-list-item-link">
        Statistics
      </a>
      <a href="#" className="account-popup-list-item-link">
        Sign Out
      </a>
    </div>
  );
}
