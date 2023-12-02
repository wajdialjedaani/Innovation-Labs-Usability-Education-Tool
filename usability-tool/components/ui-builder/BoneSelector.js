// BoneSelector.js - A dynamic component for rendering certain bones.
// should allow for modular selection by the dragging components.

import DraggableComponent from "./DraggableComponent";

// bone imports
import SearchBar from "./bones/SearchBar";
import NavBar from "./bones/NavBar";
import LogoBox from "./bones/LogoBox";

export default function BoneSelector({widget, id, type}){

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
    default:
      BoneComponent = null;
  }

  return (
    <DraggableComponent id={id} widget={widget}>
      {BoneComponent}
    </DraggableComponent>
  )
}