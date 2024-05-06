import HorizontalPadding from "./helpers/HorizontalPadding"

export default function Blerb({ tagline, subtagline, image, light }: { tagline: string, subtagline: string, image: string, light: boolean }) {
  return (
    <div className={`${light ? "bg-usability-800" : "bg-usability-900"} py-10`}>
      <HorizontalPadding>
        <div className="px-5 flex flex-col gap-10">
          <div className="">
            <div className="text-5xl pb-5">
              {tagline}
            </div>
            <div className="text-3xl text-gray-400">
              {subtagline}
            </div>
          </div>

          <div className="flex justify-center">
            <img className="h-auto w-11/12" src={image} />
          </div>
        </div>
      </HorizontalPadding >
    </div>
  )
}
