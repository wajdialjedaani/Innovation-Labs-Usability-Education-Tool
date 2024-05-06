"use client";

import Link from "next/link";
import HorizontalPadding from "./helpers/HorizontalPadding";
import AttributionsModal from "./AttributionsModal";
import { useState } from "react";

export default function Footer() {
  const [modal, setModal] = useState(false);

  const toggleFunction = () => {
    setModal(!modal);
  }

  return (
    <div className="bg-usability-800">
      <HorizontalPadding>
        <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row h-25 p-5 items-center justify-between">
          <div>
            <img className="h-14 w-auto" src="logo.svg" alt="logo" />
          </div>

          <div className="flex flex-col text-lg gap-2">
            <Link href="signin" className="flex gap-5 items-center hover:text-usability-650-hover transition">
              <img className="filterwhite" src="/icons/log-in.svg" />
              Log in
            </Link>
            {/* <a
              className="flex gap-5 items-center hover:text-usability-650-hover transition"
              target="_blank"
              href="https://github.com/wajdialjedaani/Innovation-Labs-Usability-Education-Tool"
            >
              <img
                className="filterwhite"
                src="/icons/github.svg"
              />
              Source Code
            </a> */}
            <button
              onClick={toggleFunction}
              className="flex gap-5 items-center hover:text-usability-650-hover transition"
            >
              <img
                className="filterwhite"
                src="/icons/book.svg"
              />
              Attributions
            </button>
          </div>
        </div>
        <div className="p-5 text-zinc-500">
          This is an open source project by The Innovation Labs. We are not affiliated with Nielsen Norman Group.
        </div>

        {
          modal && <AttributionsModal toggleFunction={toggleFunction} />
        }
      </HorizontalPadding>
    </div>
  )
}