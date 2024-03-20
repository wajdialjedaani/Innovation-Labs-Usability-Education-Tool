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
    // {
    //   id: "h1q",
    //   bone: "PlaybackControls",
    //   style: 
    //   {},
    // },
    
    // {
    //   id: "h1w",
    //   bone: "VolumeControls",
    //   style: 
    //   {},
    // },
    
    // {
    //   id: "h1e",
    //   bone: "NowPlaying",
    //   style: 
    //   {},
    // },
    
    // {
    //   id: "h1r",
    //   bone: "PlaybackSlider",
    //   style: 
    //   {},
    // },
    
    // {
    //   id: "h1t",
    //   bone: "TopBar",
    //   style: 
    //   {},
    // },
    
    // {
    //   id: "h1y",
    //   bone: "AlbumBox",
    //   style: 
    //   {},
    // },
    // {
    //   id: "h1u",
    //   bone: "PlaybackBump",
    //   style: 
    //   {},
    // },

    {
      id: "h2a",
      bone: "HeuristicTwoStatic",
      zIndex: "50",
      style: 
      {
        zIndex: "50"
      },
    },
    {"id":"h2m","bone":"HomeIcon","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2n","bone":"GradientIcon","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2r","bone":"MagicWand","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2q","bone":"Tag","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2d","bone":"SelectIcon","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2l","bone":"SelectColorIcon","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2i","bone":"EraseIcon","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2f","bone":"CopyIcon","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2g","bone":"PasteIcon","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2p","bone":"Slantline","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2e","bone":"ZoomIcon","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2h","bone":"DrawIcon","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2o","bone":"ThumbtackIcon","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2j","bone":"AddTextIcon","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2k","bone":"AddShapeIcon","zIndex":"100","style":{"zIndex":"100"}},{"id":"h2c","bone":"MoveIcon","zIndex":"100","style":{"zIndex":"100"}}
    
  ],
  grid: []
};


export default function UIBuilderPage(){
  return (
    <UIBuilder scenario={scenario} widgetData={widgetData}/>
  )
}