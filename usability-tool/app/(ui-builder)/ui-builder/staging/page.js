import { CartButton, ShoesQuickButton, SuitsQuickButton, HatQuickButton, BannerAd, SuitsDropdown, ShoesDropdown, HatsDropdown, AtomicLogo, HeuristicThreeStaticTopBar, HeuristicThreeStaticBody} from "@/components/ui-builder/bones/Heuristic3";
import SearchBar from "@/components/ui-builder/bones/SearchBar";

export default function Staging(){
  return (
    <div>
      <AtomicLogo />
      <HeuristicThreeStaticTopBar />
      <HeuristicThreeStaticBody />
      <SearchBar />
      <HatsDropdown />
      <SuitsDropdown />
      <ShoesDropdown />
      <BannerAd />
      <HatQuickButton />
      <SuitsQuickButton />
      <ShoesQuickButton />

      <CartButton />
    </div>
  )
}