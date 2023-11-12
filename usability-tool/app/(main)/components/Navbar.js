import "@/styles/header.scss";

import Image from "next/image";

import menuIcon from "/public/images/menu.png";
import accountIcon from "/public/images/account.png";

import Menupopup from "./popups/Menupopup";
import Accountpopup from "./popups/Accountpopup";

export default function Navbar() {
  return (
    <header className="main-head">
      <Image src={menuIcon} className="menu-img" alt="Menu Button" />
      <h1 className="menu-title">Usability Education Tool</h1>
      <Image src={accountIcon} className="account-img" alt="Account Button" />
      <Menupopup />
      <Accountpopup />
    </header>
  );
}
