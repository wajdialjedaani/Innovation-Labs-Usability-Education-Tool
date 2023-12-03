"use client";

// style imports
import styles from "@/styles/UIBuilder.module.scss";

// context provider import
import { DndContext } from "@dnd-kit/core";
import UIBuilderContextProvider, {getContextSuite} from "./UIBuilderContextProvider";

// component imports
import Grid from "./Grid";
import ComponentDrawer from "./ComponentDrawer";
import { DragOverlay } from "@dnd-kit/core";
import BoneSelector from "./BoneSelector";
import MenuBar from "./MenuBar";

// util imports
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { useState } from "react";
import { smartSnapToGrid } from "@/lib/UIBuilder/smartSnapToGrid";

export default function UIBuilder(){
  return (
    <UIBuilderContextProvider>
      <UIBuilderDNDContainer />
    </UIBuilderContextProvider>
  )
}


function UIBuilderDNDContainer(props){
  const {widgets, replaceWidget} = getContextSuite();
  const [activeWidget, setactiveWidget] = useState(null);

  function handleDragStart(event) {
    // find widget. get info about it.
    const widget = widgets.drawer.concat(widgets.grid).find(widget => widget.id === event.active.id);

    // check if its in drawer to start.
    const isInDrawer = widgets.drawer.some(widget => widget.id === event.active.id);

    // set state accordingly
    setactiveWidget({
      widget,
      isInDrawer
    });
  }

  // function for handling post-drag placement
  function handleDragEnd(event) {
    console.log(event);
    console.log(event.active.rect.current.translated);

    // get activeWidget for editing
    let updatedWidget = activeWidget.widget;

    if (event.over.id === "UIBuilderGrid"){
      // switching to absolute styling for final grid placement
      updatedWidget.style = {
        ...updatedWidget.style,
        position: "absolute",
        left: event.active.rect.current.translated.left,
        top: event.active.rect.current.translated.top,
      };

      // replace in widgets context in grid
      replaceWidget(updatedWidget, true);      
    }

    else if (event.over.id === "ComponentDrawer"){
      updatedWidget.style = {
        ...updatedWidget.style,
        position: "relative",
        left: 0,
        top: 0,
      };
      // replace in widgets context in drawer
      replaceWidget(updatedWidget, false);      
    }

    setactiveWidget(null);
  }
  
  return (
    <DndContext 
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[smartSnapToGrid, restrictToWindowEdges]}
    >
      <div aria-label="UI Builder">
        <MenuBar />
        <UIBuilderBody widgets={widgets}/>
      </div>

      <DragOverlay>
        {activeWidget ? (
          <BoneSelector type={activeWidget.widget.bone} />
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

function UIBuilderBody(props){
  return (
    <div className={styles.builderBody}>
      <Grid />
      <ComponentDrawer widgets={props.widgets}/>
    </div>
  )
}

//     if (event.over.id === "UIBuilderGrid"){
//       const widget = widgets.find((widget) => widget.id === event.active.id);

//       //Need to deep copy the nested style object so we can modify its properties
//       widget.style = {...widget.style};
  
// /*       if (event.over && event.over.id === 'UIBuilderGrid') {
//         //If widget is dragged over the grid, add the delta to the current position so that it sticks where it's dropped
//         const currentLeft = parseInt(widget.style.left);
//         const currentTop = parseInt(widget.style.top);
//         widget.style.left = `${currentLeft + event.delta.x}px`;
//         widget.style.top = `${currentTop + event.delta.y}px`
//       }
//       else {
//         //Otherwise, if the widget was dragged back out of the grid, reset it back to its original position in the drawer
//         widget.style.left = "0px";
//         widget.style.top = "0px";
//       } */

//       //widget.style.transform = CSS.Translate.toString(event.delta);
  
// /*       //Update the array and store it
//       const updatedWidgets = widgets.map((element) => {
//         // if(element.id === widget.id) return widget;
//         // return element;
//         return;
//       }); */

//       const updatedWidgets = widgets.filter(element => element.id !== widget.id);

//       const updatedGridWidgets = [...gridWidgets, widget];

//       setGridWidgets(updatedGridWidgets);
//       setWidgets(updatedWidgets);
//     }


