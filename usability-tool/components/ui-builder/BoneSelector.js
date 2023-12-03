// BoneSelector.js - A dynamic component for rendering certain bones.
// should allow for modular selection by the dragging components.

import DraggableComponent from "./DraggableComponent";

// bone imports
import SearchBar from "./bones/SearchBar";
import NavBar from "./bones/NavBar";
import LogoBox from "./bones/LogoBox";
import PostContent from "./bones/PostContent";

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
    default:
      BoneComponent = null;
  }

  return BoneComponent
}