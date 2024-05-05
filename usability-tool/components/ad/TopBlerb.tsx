export default function TopBlerb() {
  return (
    <div className="flex p-5">
      <div className="w-1/2">
        <div className="text-6xl pb-5">
          Become a better designer
        </div>
        <div className="text-4xl text-gray-400">
          Learn and practice Nielsen's 10 usability heuristics
        </div>
      </div>

      <div className="w-1/2">
        <img className="h-auto w-max" src="/dude.svg" />
      </div>
    </div>
  )
}