import HorizontalPadding from "./helpers/HorizontalPadding";

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-row h-25 p-5 items-center justify-between">
      <div>
        <img className="h-20 w-auto" src="logo.svg" alt="logo" />
      </div>

      <div>
        <Link href="/home" className="flex bg-sky-600 h-14 w-48 border border-black items-center justify-center text-2xl rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 hover:bg-sky-500">
          <div className="select-none">Get Started</div>
        </Link>
      </div>
    </div>
  )
}