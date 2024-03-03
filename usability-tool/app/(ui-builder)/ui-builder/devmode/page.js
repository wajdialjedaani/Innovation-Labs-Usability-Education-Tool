import UIBuilder from "@/components/ui-builder/UIBuilder";

const scenario = require("/lib/UIBuilder/scenario-developermode.json");

const widgetData = {
  drawer: [
    // {
    //   id: "0",
    //   bone: "searchbar",
    //   style: 
    //   {},
    // },
    // {
    //   id: "1",
    //   bone: "navbar",
    //   style: 
    //   {},
    // },
    // {
    //   id: "2",
    //   bone: "logobox",
    //   style: 
    //   {},
    // },
    // {
    //   id: "3",
    //   bone: "postcontent",
    //   style: 
    //   {},
    // },
    {
      id: "h1q",
      bone: "PlaybackControls",
      style: 
      {},
    },
    
    {
      id: "h1w",
      bone: "VolumeControls",
      style: 
      {},
    },
    
    {
      id: "h1e",
      bone: "NowPlaying",
      style: 
      {},
    },
    
    {
      id: "h1r",
      bone: "PlaybackSlider",
      style: 
      {},
    },
    
    {
      id: "h1t",
      bone: "TopBar",
      style: 
      {},
    },
    
    {
      id: "h1y",
      bone: "AlbumBox",
      style: 
      {},
    },
    {
      id: "h1u",
      bone: "PlaybackBump",
      style: 
      {},
    },
    
  ],
  grid: []
};


export default function UIBuilderPage(){
  return (
    <UIBuilder scenario={scenario} widgetData={widgetData}/>
  )
}