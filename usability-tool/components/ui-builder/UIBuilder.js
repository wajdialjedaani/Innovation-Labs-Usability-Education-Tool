"use client";

// style imports
import styles from "@/styles/UIBuilder.module.scss";

// context provider import
import { DndContext } from "@dnd-kit/core";
import UIBuilderContextProvider, {
  getContextSuite,
} from "./UIBuilderContextProvider";

// component imports
import Grid from "./Grid";
import ComponentDrawer from "./ComponentDrawer";
import { DragOverlay } from "@dnd-kit/core";
import BoneSelector from "./BoneSelector";
import MenuBar from "./MenuBar";
import SolutionViewer from "./SolutionViewer";

// util imports
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { useState } from "react";
import { smartSnapToGrid } from "@/lib/UIBuilder/smartSnapToGrid";

export default function UIBuilder({ scenario, widgetData, heuristic }) {
  return (
    <UIBuilderContextProvider
      scenario={scenario}
      widgetData={widgetData}
      heuristic={heuristic}
    >
      <UIBuilderDNDContainer />
    </UIBuilderContextProvider>
  );
}

function UIBuilderDNDContainer(props) {
  const { widgets, replaceWidget, stopTooltip, releaseTooltip } = getContextSuite();
  const [activeWidget, setactiveWidget] = useState(null);

  function handleDragStart(event) {
    stopTooltip();

    // find widget. get info about it.
    const widget = widgets.drawer
      .concat(widgets.grid)
      .find((widget) => widget.id === event.active.id);

    // check if its in drawer to start.
    const isInDrawer = widgets.drawer.some(
      (widget) => widget.id === event.active.id
    );

    // set state accordingly
    setactiveWidget({
      widget,
      isInDrawer,
    });
  }

  // function for handling post-drag placement
  function handleDragEnd(event) {
    releaseTooltip();
    console.log(event);
    console.log(event.active.rect.current.translated);
    console.log(activeWidget);

    console.log(activeWidget.widget.zIndex);

    // get activeWidget for editing
    let updatedWidget = activeWidget.widget;

    if (event.over.id === "UIBuilderGrid") {
      // switching to absolute styling for final grid placement
      updatedWidget.style = {
        ...updatedWidget.style,
        position: "absolute",
        left: event.active.rect.current.translated.left,
        top: event.active.rect.current.translated.top,
        rect: event.active.rect.current,
        zIndex: activeWidget.widget.zIndex
      };

      // replace in widgets context in grid
      replaceWidget(updatedWidget, true);
    } else if (event.over.id === "ComponentDrawer") {
      updatedWidget.style = {
        ...updatedWidget.style,
        position: "relative",
        left: 0,
        top: 0,
      };
      // replace in widgets context in drawer
      replaceWidget(updatedWidget, false);
    } else if (event.over.id === "BoneDiscarder") {
      replaceWidget(updatedWidget, false, true);
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
        <UIBuilderBody widgets={widgets} />
      </div>

      <DragOverlay zIndex={100}>
        {activeWidget ? <BoneSelector type={activeWidget.widget.bone} /> : null}
      </DragOverlay>
    </DndContext>
  );
}

function UIBuilderBody(props) {
  const { solutionMode } = getContextSuite();

  return (
    <div className={styles.builderBody}>
      {/* <Grid /> */}
      {solutionMode ? <SolutionViewer /> : <Grid /> }
      <ComponentDrawer widgets={props.widgets} />
    </div>
  );
}