import HorizontalPadding from "./helpers/HorizontalPadding";

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-col sm:flex-row lg:h-25 p-5 items-center sm:justify-between">
      <div>
        <img className="h-20 w-auto" src="logo.svg" alt="logo" />
      </div>

      <div>
        <Link href="/home" className="hidden sm:flex border-white bg-usability-650 h-14 w-48 border items-center justify-center text-2xl rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 hover:bg-usability-650-hover">
          <div className="select-none">Get Started</div>
        </Link>
      </div>
    </div>
  )
}