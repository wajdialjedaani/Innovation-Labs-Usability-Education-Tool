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

export default function UIBuilder(props){
  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
  
  return (
    <DndContext>
      <UIBuilderContextProvider>
        <div aria-label="UI Builder">

          <MenuBar />
          <UIBuilderBody />

        </div>
      </UIBuilderContextProvider>
    </DndContext>
  )
}

function UIBuilderBody(props){
  return (
    <div className={styles.builderBody}>
      <Grid />
      <ComponentDrawer />
    </div>
  )
}

function MenuBar(props){
  return (
    <nav className={styles.menuBar}>
      
    </nav>
  )
}

function ComponentDrawer(props){
  return (
    <div className={styles.componentDrawer}>
      <ExampleDrag />
    </div>
  )
}

function ExampleDrag(props){
  return (
    <DraggableComponent>
      <div>
        drag me!
      </div>
    </DraggableComponent>
  )
}
