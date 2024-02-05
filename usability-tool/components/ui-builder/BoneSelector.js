// BoneSelector.js - A dynamic component for rendering certain bones.
// should allow for modular selection by the dragging components.

import DraggableComponent from "./DraggableComponent";

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

export default function BoneSelector({type}){

  let BoneComponent;

  switch (type) {
    case "searchbar":
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
    

    default:
      BoneComponent = null;
  }

  return BoneComponent
}