// BoneSelector.js - A dynamic component for rendering certain bones.
// should allow for modular selection by the dragging components.

import styles from "@/styles/UIBones.module.scss"

// bone imports
import SearchBar from "./bones/SearchBar";
import NavBar from "./bones/NavBar";
import LogoBox from "./bones/LogoBox";
import PostContent from "./bones/PostContent";

import PlaybackControls from "@/components/ui-builder/bones/Heuristic1/PlaybackControls";
import VolumeControls from "@/components/ui-builder/bones/Heuristic1/VolumeControls";
import NowPlaying from "@/components/ui-builder/bones/Heuristic1/NowPlaying";
import PlaybackSlider from "@/components/ui-builder/bones/Heuristic1/PlaybackSlider";
import TopBar from "@/components/ui-builder/bones/Heuristic1/TopBar";
import AlbumBox from "./bones/Heuristic1/AlbumBox";
import PlaybackBump from "./bones/Heuristic1/PlaybackBump";

import Heuristic2Static from "./bones/Heuristic2/static/Static";
import Move from "./bones/Heuristic2/Move";
import Select from "./bones/Heuristic2/Select";
import Zoom from "./bones/Heuristic2/Zoom";
import Copy from "./bones/Heuristic2/Copy";
import Paste from "./bones/Heuristic2/Paste";
import Draw from "./bones/Heuristic2/Draw";
import Erase from "./bones/Heuristic2/Erase";
import Text from "./bones/Heuristic2/Text";
import Shape from "./bones/Heuristic2/Shape";
import SelectColor from "./bones/Heuristic2/SelectColor";
import Home from "./bones/Heuristic2/Home";
import Gradient from "./bones/Heuristic2/Gradient";
import ThumbtackIcon from "./bones/Heuristic2/Thumbtack";
import Slantline from "./bones/Heuristic2/Slantline";
import TagIcon from "./bones/Heuristic2/Tag";
import MagicWand from "./bones/Heuristic2/MagicWand";

// wow i did it better here haha
import { CartButton, ShoesQuickButton, SuitsQuickButton, HatQuickButton, BannerAd, SuitsDropdown, ShoesDropdown, HatsDropdown, AtomicLogo, HeuristicThreeStaticTopBar, HeuristicThreeStaticBody} from "@/components/ui-builder/bones/Heuristic3";


// god this is so terrible

export default function BoneSelector({type, drawerMode}){

  let BoneComponent;

  switch (type) {
    case "SearchBar":
      BoneComponent = <SearchBar />
      break;
    case "navbar":
      BoneComponent = <NavBar />
      break;
    case "logobox":
      BoneComponent = <LogoBox />
      break;
    case "postcontent":
      BoneComponent = <PostContent />
      break;

    // heuristic 1 bones ////////////////////////////////////////////////////////////
    case "PlaybackControls":
      BoneComponent = <PlaybackControls />
      break;
    case "VolumeControls":
      BoneComponent = <VolumeControls />
      break;
    case "NowPlaying":
      BoneComponent = <NowPlaying />
      break;
    case "PlaybackSlider":
      BoneComponent = <PlaybackSlider />
      break;
    case "TopBar":
      BoneComponent = <TopBar />
      break;
    case "AlbumBox":
      BoneComponent = <AlbumBox />
      break;
    case "PlaybackBump":
      BoneComponent = <PlaybackBump />
      break;  
    
      // heuristic 2 bones //////////////////////////////////////////////
    case "HeuristicTwoStatic":
      BoneComponent = <Heuristic2Static />
      break;
    case "MoveIcon":
      BoneComponent = <Move />
      break;
    case "SelectIcon":
      BoneComponent = <Select />
      break;
    case "ZoomIcon":
      BoneComponent = <Zoom />
      break;
    case "CopyIcon":
      BoneComponent = <Copy />
      break;
    case "PasteIcon":
      BoneComponent = <Paste />
      break;
    case "DrawIcon":
      BoneComponent = <Draw />
      break;
    case "EraseIcon":
      BoneComponent = <Erase />
      break;
    case "AddTextIcon":
      BoneComponent = <Text />
      break;
    case "AddShapeIcon":
      BoneComponent = <Shape />
      break;
    case "SelectColorIcon":
      BoneComponent = <SelectColor />
      break;
    case "HomeIcon":
      BoneComponent = <Home />
      break;
    case "GradientIcon":
      BoneComponent = <Gradient />
      break;
    case "ThumbtackIcon":
      BoneComponent = <ThumbtackIcon />
      break;
    case "Slantline":
      BoneComponent = <Slantline />
      break;
    case "Tag":
      BoneComponent = <TagIcon />
      break;
    case "MagicWand":
      BoneComponent = <MagicWand />
      break;
    
    // heuristic 3 bones
    case "AtomicLogo":
      BoneComponent = <AtomicLogo />
      break;
    case "HeuristicThreeStaticTopBar":
      BoneComponent = <HeuristicThreeStaticTopBar />
      break;
    case "HeuristicThreeStaticBody":
      BoneComponent = <HeuristicThreeStaticBody />
      break;
    case "HatsDropdown":
      BoneComponent = <HatsDropdown />
      break;
    case "SuitsDropdown":
      BoneComponent = <SuitsDropdown />
      break;
    case "ShoesDropdown":
      BoneComponent = <ShoesDropdown />
      break;
    case "BannerAd":
      BoneComponent = <BannerAd />
      break;
    case "HatQuickButton":
      BoneComponent = <HatQuickButton />
      break;
    case "SuitsQuickButton":
      BoneComponent = <SuitsQuickButton />
      break;
    case "ShoesQuickButton":
      BoneComponent = <ShoesQuickButton />
      break;
    case "CartButton":
      BoneComponent = <CartButton />
      break;
    default:
      BoneComponent = null;
  }

  if (drawerMode){
    return (
      <div className={styles.thumbnailWrapper}>
        {BoneComponent}
      </div>
    )
  }

  return BoneComponent
}