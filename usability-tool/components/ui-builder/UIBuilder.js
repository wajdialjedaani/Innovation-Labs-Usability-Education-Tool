"use client";

// context provider import
import { DndContext } from "@dnd-kit/core";
import UIBuilderContextProvider, {getContextSuite} from "./UIBuilderContextProvider";

// component imports
import Grid from "./Grid";
import DraggableComponent from "./DraggableComponent";
import { DragOverlay } from "@dnd-kit/core";
import BoneSelector from "./BoneSelector";

// util imports
import { createSnapModifier } from "@dnd-kit/modifiers";

// style imports
import styles from "@/styles/UIBuilder.module.scss";
import { useMemo, useState } from "react";
import SearchBar from "./bones/SearchBar";
import { smartSnapToGrid } from "@/lib/UIBuilder/smartSnapToGrid";

export default function UIBuilder(){
  return (
    <UIBuilderContextProvider>
      <UIBuilderDNDContainer />
    </UIBuilderContextProvider>
  )
}


function UIBuilderDNDContainer(props){
  const {widgets, setWidgets} = getContextSuite();
  const [activeInfo, setActiveInfo] = useState(null);

  function handleDragStart(event) {
    const widget = widgets.find((widget) => widget.id === event.active.id);
    
    setActiveInfo({
      bone: widget.bone,
      id: widget.id,
      widget
    });
  }

  // function for handling post-drag placement
  function handleDragEnd(event) {
    const widget = widgets.find((widget) => widget.id === event.active.id);

    //Need to deep copy the nested style object so we can modify its properties
    widget.style = {...widget.style};

    if (event.over && event.over.id === 'UIBuilderGrid') {
      //If widget is dragged over the grid, add the delta to the current position so that it sticks where it's dropped
      const currentLeft = parseInt(widget.style.left);
      const currentTop = parseInt(widget.style.top);
      widget.style.left = `${currentLeft + event.delta.x}px`;
      widget.style.top = `${currentTop + event.delta.y}px`
    }
    else {
      //Otherwise, if the widget was dragged back out of the grid, reset it back to its original position in the drawer
      widget.style.left = "0px";
      widget.style.top = "0px";
    }

    //Update the array and store it
    const updatedWidgets = widgets.map((element) => {
      if(element.id === widget.id) return widget;
      return element;
    });
    setWidgets(updatedWidgets);
    setActiveInfo(null);
  }
  
  return (
    <DndContext 
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[smartSnapToGrid]}
    >
      <div aria-label="UI Builder">
        <MenuBar />
        <UIBuilderBody widgets={widgets}/>
      </div>

      <DragOverlay>
        {activeInfo ? (
          <BoneSelector type={activeInfo.bone} />
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

function MenuBar(props){
  return (
    <nav className={styles.menuBar}>
      
    </nav>
  )
}

function ComponentDrawer({widgets, ...props}){
  return (
    <div className={styles.componentDrawer} style={props.style}>
      {widgets.map((widget, index) => (
        <DraggableComponent id={widget.id} widget={widget}>
          <BoneSelector type={widget.bone}/>
        </DraggableComponent>
      ))}
    </div>
  )
}
