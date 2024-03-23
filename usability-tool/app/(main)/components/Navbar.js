"use client";
import "@/styles/header.scss";
import { useState, useEffect, Fragment, useId } from "react";

import { getAuthContext } from "./AuthContextProvider";
import { IoMenuOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";

import { usePathname } from "next/navigation";

import Link from "next/link";

import Menupopup from "./popups/Menupopup";
import Accountpopup from "./popups/Accountpopup";

export default function Navbar() {
  const pathName = usePathname();
  const { user } = getAuthContext();
  const [menu, setMenu] = useState(false);
  const [account, setAccount] = useState(false);

  const menuId = useId();
  const accountId = useId();

  //Close the popups when the page changes
  useEffect(() => {
    setMenu(false);
    setAccount(false);
  }, [pathName]);

  return (
    <Fragment>
      <header className="main-head">
        {user && (
          <button
            className="navbar-button"
            onClick={() => setMenu((prevMenu) => !prevMenu)}
            aria-label="Open the menu dropdown"
            aria-expanded={menu}
            aria-haspopup
            aria-controls={menuId}
          >
            <IoMenuOutline className="menu-img" size="50" />
          </button>
        )}

        <Link href="/home" className="menu-title">
          <h1>Usability Education Tool</h1>
        </Link>
        {user && (
          <button
            className="navbar-button"
            onClick={() => setAccount((prevAccount) => !prevAccount)}
            aria-label="Open the account dropdown"
            aria-expanded={account}
            aria-haspopup
            aria-controls={accountId}
          >
            <IoPersonCircleOutline className="account-img" size="50" />
          </button>
        )}
        {/* {user && menu && <Menupopup id={menuId} />} */}
        <Menupopup id={menuId} active={user && menu} />
        {/* {user && account && <Accountpopup id={accountId} />} */}
        <Accountpopup id={accountId} active={user && account} />
      </header>

      <div className="generalSpacer" />
    </Fragment>
  );
}
