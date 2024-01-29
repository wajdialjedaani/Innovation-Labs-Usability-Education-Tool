"use client";
import "@/styles/header.scss";
import { useState, Fragment } from "react";

import { getAuthContext } from "./AuthContextProvider";

import Image from "next/image";

import menuIcon from "/public/images/menu.png";
import accountIcon from "/public/images/account.png";

import Menupopup from "./popups/Menupopup";
import Accountpopup from "./popups/Accountpopup";

export default function Navbar() {
  const { user } = getAuthContext();
  const [menu, setMenu] = useState(false);
  const [account, setAccount] = useState(false);
  return (
    <Fragment>
      <header className="main-head">
        <Image
          src={menuIcon}
          className="menu-img"
          alt="Menu Button"
          onClick={() => setMenu((prevMenu) => !prevMenu)}
        />

        <h1 className="menu-title">Usability Education Tool</h1>
        {user && (
          <Image
            src={accountIcon}
            className="account-img"
            alt="Account Button"
            onClick={() => setAccount((prevAccount) => !prevAccount)}
          />
        )}
        {menu && <Menupopup />}
        {user && account && <Accountpopup />}
      </header>

      <div className="generalSpacer" />
    </Fragment>
  );
}
