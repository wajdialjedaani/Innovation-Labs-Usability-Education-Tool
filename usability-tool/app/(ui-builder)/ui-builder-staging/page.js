import { Fragment } from "react";

import SearchBar from "@/components/ui-builder/bones/SearchBar";
import NavBar from "@/components/ui-builder/bones/NavBar";
import LogoBox from "@/components/ui-builder/bones/LogoBox";

export default function UIBonesDebug(props){
  return (
    <div>
      <h1>bones render test</h1>
      <p>searchbar:</p>
      <SearchBar />

      <p>navbar:</p>
      <NavBar />

      <p>logobox:</p>
      <LogoBox />
    </div>
  )
}