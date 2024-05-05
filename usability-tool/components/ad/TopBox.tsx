import NavBar from "./NavBar";
import TopBlerb from "./TopBlerb";
import HorizontalPadding from "./helpers/HorizontalPadding";

export default function TopBox() {
  return (
    <div>
      <HorizontalPadding>
        <NavBar />
        <TopBlerb />
      </HorizontalPadding>
    </div>
  )
}