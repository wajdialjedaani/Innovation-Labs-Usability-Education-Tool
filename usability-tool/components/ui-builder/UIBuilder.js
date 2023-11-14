"use client";

// context provider import
import { DndContext } from "@dnd-kit/core";
import UIBuilderContextProvider from "./UIBuilderContextProvider";

// component imports
import Grid from "./Grid";
import DraggableComponent from "./DraggableComponent";

// style imports
import styles from "@/styles/UIBuilder.module.scss";
import { useState } from "react";

//Sample array of widgets that tracks their dragging data.
//Different "levels" can be designed by providing different lists of widgets. Needs a property to determine widget type
const widgetData = [
  {
    id: "0",
    style: 
    {
      position: "relative",
      left: "0px",
      top: "0px",
    },
  },
  {
    id: "1",
    style: 
    {
      position: "relative",
      left: "0px",
      top: "0px",
    },
  },
  {
    id: "2",
    style: 
    {
      position: "relative",
      left: "0px",
      top: "0px",
    },
  }
];


export default function UIBuilder(props){
  //Used to track widget positioning
  const [widgets, setWidgets] = useState(widgetData);

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
    const _widgets = widgets.map((element) => {
      if(element.id === widget.id) return widget;
      return element;
    });
    setWidgets(_widgets);
  }
  
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <UIBuilderContextProvider>
        <div aria-label="UI Builder">
    
          <MenuBar />
          <UIBuilderBody widgets={widgets}/>

        </div>
      </UIBuilderContextProvider>
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
      {widgets.map((widget, index) => (<DraggableButton widget={widget} key={widget.id} id={widget.id}></DraggableButton>))}
    </div>
  )
}

function DraggableButton(props){
  return (
    <DraggableComponent id={props.id} widget={props.widget}>
      <button>
        Click me!
      </button>
    </DraggableComponent>
  )
}
