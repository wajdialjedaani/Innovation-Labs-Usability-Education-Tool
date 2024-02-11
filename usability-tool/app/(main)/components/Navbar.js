"use client";
import "@/styles/header.scss";
import { useState, useEffect, Fragment } from "react";

import { getAuthContext } from "./AuthContextProvider";
import { IoMenuOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

import { usePathname } from "next/navigation";

import Menupopup from "./popups/Menupopup";
import Accountpopup from "./popups/Accountpopup";

export default function Navbar() {
  const pathName = usePathname();
  const { user } = getAuthContext();
  const [menu, setMenu] = useState(false);
  const [account, setAccount] = useState(false);

  //Close the popups when the page changes
  useEffect(() => {
    setMenu(false);
    setAccount(false);
  }, [pathName]);

  return (
    <Fragment>
      <header className="main-head">
        {user && (
          <IconContext.Provider value={{ className: "menu-img", size: "50" }}>
            <IoMenuOutline onClick={() => setMenu((prevMenu) => !prevMenu)} />
          </IconContext.Provider>
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
        )}
        {user && menu && <Menupopup />}
        {user && account && <Accountpopup />}
      </header>

      <div className="generalSpacer" />
    </Fragment>
  );
}
