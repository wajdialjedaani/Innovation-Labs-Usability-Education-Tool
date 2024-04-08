import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../BoneTooltip";

export function FilterBar() {
  return (
    <BoneTooltip title="Filter Bar">
      <div className={styles.heuristic6FilterBar}>
        <div className={styles.heuristic6FilterTitle}>
          <div>Size</div>
          <img src="/icons/chevron-down.svg" />
        </div>

        <div style={{ height: "125px" }}></div>

        <div className={styles.heuristic6FilterTitle}>
          <div>Color</div>
          <img src="/icons/chevron-down.svg" />
        </div>

        <div style={{ height: "125px" }}></div>

        <div className={styles.heuristic6FilterTitle}>
          <div>Type</div>
          <img src="/icons/chevron-down.svg" />
        </div>

        <div style={{ height: "152px" }}></div>

        <div className={styles.heuristic6FilterTitle}>
          <div>Features</div>
          <img src="/icons/chevron-up.svg" />
        </div>

        <div className={styles.heuristic6FilterTitle}>
          <div>Battery Capacity</div>
          <img src="/icons/chevron-up.svg" />
        </div>
      </div>
    </BoneTooltip>
  )
}

export function SizeFilters() {
  return (
    <BoneTooltip title="Size Filters">

      <div className={styles.heuristic6FilterRowContainer}>
        <div className={styles.heuristic6FilterRow}>
          <div className={styles.heuristic6FilterCheckbox}></div>
          <div>Small</div>
        </div>

        <div className={styles.heuristic6FilterRow}>
          <div className={styles.heuristic6FilterCheckbox}></div>
          <div>Medium</div>
        </div>

        <div className={styles.heuristic6FilterRow}>
          <div className={styles.heuristic6FilterCheckbox}></div>
          <div>Large</div>
        </div>
      </div>
    </BoneTooltip>
  )
}

export function ColorFilters() {
  return (
    <BoneTooltip title="Color Filters">

      <div className={styles.heuristic6FilterRowContainer}>
        <div className={styles.heuristic6FilterRow}>
          <div className={styles.heuristic6FilterCheckbox}></div>
          <div>Blue</div>
        </div>

        <div className={styles.heuristic6FilterRow}>
          <div className={styles.heuristic6FilterCheckbox}></div>
          <div>Purple</div>
        </div>

        <div className={styles.heuristic6FilterRow}>
          <div className={styles.heuristic6FilterCheckbox}></div>
          <div>Salmon</div>
        </div>
      </div>
    </BoneTooltip>
  )
}

export function TypeFilters() {
  return (
    <BoneTooltip title="Type Filters">

      <div className={styles.heuristic6FilterRowContainer}>
        <div className={styles.heuristic6FilterRow}>
          <div className={styles.heuristic6FilterCheckbox}></div>
          <div>Top Hat</div>
        </div>

        <div className={styles.heuristic6FilterRow}>
          <div className={styles.heuristic6FilterCheckbox}></div>
          <div>Cowboy Hat</div>
        </div>

        <div className={styles.heuristic6FilterRow}>
          <div className={styles.heuristic6FilterCheckbox}></div>
          <div>Snapback</div>
        </div>

        <div className={styles.heuristic6FilterRow}>
          <div className={styles.heuristic6FilterCheckbox}></div>
          <div>Fedora</div>
        </div>
      </div>
    </BoneTooltip>
  )
}

export function TheRedditor() {
  return (
    <BoneTooltip title="Catalog Item - The Moderator">

      <div className={styles.heuristic6ThumbnailContainer}>
        <div className={styles.heuristic6Thumbnail}>
          <img src="/UIBuilder/heuristic6/theredditor.png" />
        </div>

        <div className={styles.heuristic6DescBoxBox}>
          <div className={styles.heuristic6TCDescBox}>
            <div className={styles.heuristic6TCTitle}>The Moderator</div>
            <div>I swear guys, its really cool!</div>
          </div>

          <div className={styles.heuristic6TCButtonCont}>
            <div className={styles.heuristicTCButton}>
              <img src="/icons/shopping-cart.svg" /> Add to Cart
            </div>
          </div>
        </div>
      </div>
    </BoneTooltip>
  )
}

export function TheCowboy() {
  return (
    <BoneTooltip title="Catalog Item - The Cowboy">

      <div className={styles.heuristic6ThumbnailContainer}>
        <div className={styles.heuristic6Thumbnail}>
          <img src="/UIBuilder/heuristic6/thecowboy.png" />
        </div>

        <div className={styles.heuristic6DescBoxBox}>
          <div className={styles.heuristic6TCDescBox}>
            <div className={styles.heuristic6TCTitle}>
              The Cowboy
            </div>

            <div>I'm here to chew bubblegum.</div>
          </div>

          <div className={styles.heuristic6TCButtonCont}>
            <div className={styles.heuristicTCButton}>
              <img src="/icons/shopping-cart.svg" /> Add to Cart
            </div>
          </div>
        </div>
      </div>
    </BoneTooltip>
  )
}

export function TheEugene() {
  return (
    <BoneTooltip title="Catalog Item - The New Hire">

      <div className={styles.heuristic6ThumbnailContainer}>
        <div className={styles.heuristic6Thumbnail}>
          <img src="/UIBuilder/heuristic6/thenewbie.jpg" />
        </div>

        <div className={styles.heuristic6DescBoxBox}>
          <div className={styles.heuristic6TCDescBox}>
            <div className={styles.heuristic6TCTitle}>
              The New Hire
            </div>

            <div>Hey guys!</div>
          </div>

          <div className={styles.heuristic6TCButtonCont}>
            <div className={styles.heuristicTCButton}>
              <img src="/icons/shopping-cart.svg" /> Add to Cart
            </div>
          </div>
        </div>
      </div>
    </BoneTooltip>
  )
}

export function TheChickenHat() {
  return (
    <BoneTooltip title="Catalog Item - The Chicken Hat">

      <div className={styles.heuristic6ThumbnailContainer}>
        <div className={styles.heuristic6Thumbnail}>
          <img src="/UIBuilder/heuristic6/thechicken.jpg" />
        </div>

        <div className={styles.heuristic6DescBoxBox}>
          <div className={styles.heuristic6TCDescBox}>
            <div className={styles.heuristic6TCTitle}>
              The Chicken Hat
            </div>

            <div>It's poultry self explanatory.</div>
          </div>

          <div className={styles.heuristic6TCButtonCont}>
            <div className={styles.heuristicTCButton}>
              <img src="/icons/shopping-cart.svg" /> Add to Cart
            </div>
          </div>
        </div>
      </div>
    </BoneTooltip>
  )
}

export function TheSnapback() {
  return (
    <BoneTooltip title="Catalog Item - The Snapback">

      <div className={styles.heuristic6ThumbnailContainer}>
        <div className={styles.heuristic6Thumbnail}>
          <img src="/UIBuilder/heuristic6/snapback.webp" />
        </div>

        <div className={styles.heuristic6DescBoxBox}>
          <div className={styles.heuristic6TCDescBox}>
            <div className={styles.heuristic6TCTitle}>
              The Snapback
            </div>

            <div>Sup bro.</div>
          </div>

          <div className={styles.heuristic6TCButtonCont}>
            <div className={styles.heuristicTCButton}>
              <img src="/icons/shopping-cart.svg" /> Add to Cart
            </div>
          </div>
        </div>
      </div>
    </BoneTooltip>
  )
}

export function TheBaseballer() {
  return (
    <BoneTooltip title="Catalog Item - The Baseballer">

      <div className={styles.heuristic6ThumbnailContainer}>
        <div className={styles.heuristic6Thumbnail}>
          <img src="/UIBuilder/heuristic6/therangersfan.png" />
        </div>

        <div className={styles.heuristic6DescBoxBox}>
          <div className={styles.heuristic6TCDescBox}>
            <div className={styles.heuristic6TCTitle}>
              The Baseballer
            </div>

            <div>Hot dogs! Come get your hot dogs!</div>
          </div>

          <div className={styles.heuristic6TCButtonCont}>
            <div className={styles.heuristicTCButton}>
              <img src="/icons/shopping-cart.svg" /> Add to Cart
            </div>
          </div>
        </div>
      </div>
    </BoneTooltip>
  )
}