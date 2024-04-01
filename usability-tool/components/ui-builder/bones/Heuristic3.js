import styles from "@/styles/UIBones.module.scss";
import SearchBar from "./SearchBar";
import BoneTooltip from "../BoneTooltip";

export function CartButton(){
  return (
    <BoneTooltip title="Shopping Cart Button">
    <div className={styles.heuristicThreeProfileButton}>
      <div>Cart</div>
      <img src="/icons/shopping-cart.svg"/>
    </div>
    </BoneTooltip>
  )
}

export function AtomicLogo(){
  return (
    <BoneTooltip title="Website Logo">
    <div className={styles.atomicLogoBackgroundless}>
      <img src="/UIBuilder/heuristic3/atomic.svg" />
    </div>
    </BoneTooltip>
  )
}

export function HeuristicThreeStaticTopBar(){
  return (
    <div className={styles.heuristicThreeStaticTopBar}>
    </div>
  )
}

export function HeuristicThreeStaticBody(){
  return (
    <div className={styles.heuristicThreeStaticBody}>
    </div>
  )
}

export function HatsDropdown(){
  return (
    <BoneTooltip title="Hats Dropdown Menu">
    <div className={styles.heuristicThreeDropdownBox}>
      <div>Hats</div>
      <img src="/icons/chevron-down.svg"/>
    </div>
    </BoneTooltip>
  )
}

export function SuitsDropdown(){
  return (
    <BoneTooltip title="Suits Dropdown Menu">
    <div className={styles.heuristicThreeDropdownBox}>
      <div>Suits</div>
      <img src="/icons/chevron-down.svg"/>
    </div>
    </BoneTooltip>
  )
}

export function ShoesDropdown(){
  return (
    <BoneTooltip title="Shoes Dropdown Menu">
    <div className={styles.heuristicThreeDropdownBox}>
      <div>Shoes</div>
      <img src="/icons/chevron-down.svg"/>
    </div>
    </BoneTooltip>
  )
}

export function BannerAd(){
  return (
    <BoneTooltip title="Banner Advertisement">
    <div className={styles.bannerAd}>
      <img src="/UIBuilder/heuristic3/bannerad.jpg"/>
    </div>
    </BoneTooltip>
  )
}

export function HatQuickButton(){
  return (
    <BoneTooltip title="Hats Quick Nav Button">
    <div className={styles.heuristicThreeQuickButton}>
      <img src="/UIBuilder/heuristic3/hat.png"/>
      <div>Hats</div>
    </div>
    </BoneTooltip>
  )
}

export function SuitsQuickButton(){
  return (
    <BoneTooltip title="Suits Quick Nav Button">
    <div className={`${styles.heuristicThreeQuickButton} ${styles.suitsgrrr}`}>
      <img src="/UIBuilder/heuristic3/suit.png"/>
      <div>Suits</div>
    </div>
    </BoneTooltip>
  )
}

export function ShoesQuickButton(){
  return (
    <BoneTooltip title="Shoes Quick Nav Button">

    <div className={styles.heuristicThreeQuickButton}>
      <img src="/UIBuilder/heuristic3/shoe.png"/>
      <div>Shoes</div>
    </div>
    </BoneTooltip>
  )
}