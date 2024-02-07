"use client";
import "@/styles/header.scss";
import { useState, Fragment } from "react";

import { getAuthContext } from "./AuthContextProvider";
import { IoMenuOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

import Image from "next/image";

import menuIcon from "/public/images/menu.png";
import accountIcon from "/public/images/account.png";

import Menupopup from "./popups/Menupopup";
import Accountpopup from "./popups/Accountpopup";

export default function Navbar() {
  const { user } = getAuthContext();
  const [menu, setMenu] = useState(false);
  const [account, setAccount] = useState(false);

  console.log(user);

  return (
    <Fragment>
      <header className="main-head">
        {user && (
          <IconContext.Provider value={{ className: "menu-img", size: "50" }}>
            <IoMenuOutline onClick={() => setMenu((prevMenu) => !prevMenu)} />
          </IconContext.Provider>

          // <Image
          //   src={menuIcon}
          //   className="menu-img"
          //   alt="Menu Button"
          //   onClick={() => setMenu((prevMenu) => !prevMenu)}
          // />
        )}

        <h1 className="menu-title">Usability Education Tool</h1>
        {user && (
          <IconContext.Provider
            value={{ className: "account-img", size: "50" }}
          >
            <IoPersonCircleOutline
              onClick={() => setAccount((prevAccount) => !prevAccount)}
            />
          </IconContext.Provider>
          // <Image
          //   src={accountIcon}
          //   className="account-img"
          //   alt="Account Button"
          //   onClick={() => setAccount((prevAccount) => !prevAccount)}
          // />
        )}
        {user && menu && <Menupopup />}
        {user && account && <Accountpopup />}
      </header>

      <div className="generalSpacer" />
    </Fragment>
  );
}
