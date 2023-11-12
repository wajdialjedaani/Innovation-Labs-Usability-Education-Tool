import "@/styles/accountpopup.scss";

export default function Accountpopup() {
  return (
    <div className="account-popup">
      <p className="account-popup-signedinas">
        Signed in: <span className="account-popup-email">Email</span>
      </p>
      <ul className="account-popup-list">
        <li className="account-popup-list-item">
          <a href="#" className="account-popup-list-item-link">
            Statistics
          </a>
        </li>
        <li className="account-popup-list-item">
          <a href="#" className="account-popup-list-item-link">
            Sign Out
          </a>
        </li>
      </ul>
    </div>
  );
}
