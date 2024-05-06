import Link from "next/link"
import { Fragment } from "react"

export default function TopBlerb() {
  return (
    <div className="flex p-5 flex-col sm:flex-row">
      <div className="sm:w-1/2">
        <div className="text-6xl pb-5">
          Become a better designer
        </div>
        <div className="text-4xl text-gray-400">
          Learn and practice Nielsen's 10 usability heuristics
        </div>
      </div>

      <div className="sm:w-1/2">
        <img className="h-auto w-max" src="/dude.svg" />
      </div>

      <div className="flex sm:hidden w-full justify-center">
        <Link href="/home" className="flex sm:hidden bg-sky-600 h-14 w-48 border border-black items-center justify-center text-2xl rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 hover:bg-sky-500">
          <div className="select-none">Get Started</div>
        </Link>
      </div>

    </div>
  )
}