"use client";
import "@/styles/header.scss";

import { getAuthContext } from "./AuthContextProvider";

import Link from "next/link";

import MenuPopup from "@/components/nav/popups/MenuPopup";
import Accountpopup from "@/components/nav/popups/AccountPopup";

import styles from "@/styles/nav.module.scss";

export default function Navbar() {
  const { user } = getAuthContext();

  return (
    <nav className={`navbar navbar-expand ${styles.navbar}`}>
      <div className="container-fluid justify-content-between">
        {user && <MenuPopup />}
        <Link
          className={`fs-4 navbar-brand mx-auto ${styles.navbarBrand}`}
          href="/home"
        >
          <img src="/logo.svg" alt="logo" className="logo" />
        </Link>
        {user && <Accountpopup />}
      </div>
    </nav>
  );
}
