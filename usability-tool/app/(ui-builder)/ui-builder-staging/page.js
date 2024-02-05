import { Fragment } from "react";

// example scanario bones
import SearchBar from "@/components/ui-builder/bones/SearchBar";
import NavBar from "@/components/ui-builder/bones/NavBar";
import LogoBox from "@/components/ui-builder/bones/LogoBox";
import Post from "@/components/ui-builder/bones/PostContent";

// heuristic 1 ; music player bones
import PlaybackControls from "@/components/ui-builder/bones/Heuristic1/PlaybackControls";
import VolumeControls from "@/components/ui-builder/bones/Heuristic1/VolumeControls";
import NowPlaying from "@/components/ui-builder/bones/Heuristic1/NowPlaying";
import PlaybackSlider from "@/components/ui-builder/bones/Heuristic1/PlaybackSlider";
import TopBar from "@/components/ui-builder/bones/Heuristic1/TopBar";
import AlbumBox from "@/components/ui-builder/bones/Heuristic1/AlbumBox";
import PlaybackBump from "@/components/ui-builder/bones/Heuristic1/PlaybackBump";

export default function UIBonesDebug(props){
  return (
    <div>
      <h1>heuristic 1 bones</h1>
      <p>playback controls</p>
      <PlaybackControls />

      <p>volume controls</p>
      <VolumeControls />

      <p>now playing</p>
      <NowPlaying />

      <PlaybackSlider />

      <p>top bar container</p>
      <TopBar />

      <p>album box</p>
      <AlbumBox />

      <p>playback bump</p>
      <PlaybackBump />


      <h1>bones render test</h1>
      <p>searchbar:</p>
      <SearchBar />

      <p>navbar:</p>
      <NavBar />

      <p>logobox:</p>
      <LogoBox />

      <p>post:</p>
      <Post />
    </div>
  )
}