// util imports
import { useContext, createContext, useState, useRef } from "react";
import gradingRoutine from "@/lib/UIBuilder/gradingRoutine";

import { TooltipWindow } from "./BoneTooltip";

// ContextSuite
const ContextSuite = createContext();

export function getContextSuite() {
  return useContext(ContextSuite);
}

export default function UIBuilderContextProvider({
  scenario,
  widgetData,
  heuristic,
  children,
}) {
  // widget state, for editing position and selecting bone
  const [widgets, setWidgets] = useState(widgetData);

  const [solutionMode, setSolutionMode] = useState(false);

  const startTime = useRef(Math.floor(Date.now() / 1000));

  const [blockTooltip, setBlockTooltip] = useState(false);
  const [tooltipDisp, setTooltipDisp] = useState(false);

  const contextSuite = {
    // The heuristic (for db)
    heuristic,
    //The start time
    startTime,
    // scenario info:
    scenarioInformation: scenario.scenarioInformation,

    solutionMode,

    // general widgets accessors
    widgets,
    setWidgets: (newWidgets) => {
      setWidgets(newWidgets);
    },

    // function for replacing widget in js object in the appropriate wrapper
    replaceWidget: (newWidget, toGrid, shouldDelete) => {
      const widgetIdToRemove = newWidget.id;

      // remove widget from both drawer and grid
      const updatedDrawer = widgets.drawer.filter(
        (widget) => widget.id !== widgetIdToRemove
      );
      const updatedGrid = widgets.grid.filter(
        (widget) => widget.id !== widgetIdToRemove
      );

      // push widget to appropriate array in widgets

      if (toGrid) {
        updatedGrid.push(newWidget);
      } else if (!shouldDelete) {
        updatedDrawer.push(newWidget);
      }

      // update state
      setWidgets({
        drawer: updatedDrawer,
        grid: updatedGrid,
      });
    },

    downloadGridJSON: (positioningWeight, bonesUsedWeight, scenario) => {
      let gradingObject = {
        scenarioInformation: scenario,
        solutionGrid: widgets.grid,
        widgetData: {
          drawer: widgets.drawer.concat(
            widgets.grid.map((item) => ({ ...item, style: {} }))
          ),
          grid: [],
        },
        positioningWeight: positioningWeight / 100,
        bonesUsedWeight: bonesUsedWeight / 100,
      };

      const date = new Date();
      downloadJSON(
        gradingObject,
        `scenario-${scenario.title.replace(/\s/g, "")}`
      );
    },

    startGrading: () => {
      return gradingRoutine(scenario, widgets.grid);
    },

    // solution view stuff
    toggleSolutionView: () => {
      setSolutionMode(prev => !prev);
    },

    solutionGrid: scenario.solutionGrid,

    // tooltip stuff
    blockTooltip,

    setTooltipTitle: (title) => {
      setTooltipDisp(<TooltipWindow title={title}/>)
    },

    killTooltipDisp: () => {
      setTooltipDisp(null);
    },

    stopTooltip: () => {
      setBlockTooltip(true);
    },

    releaseTooltip: () => {
      setBlockTooltip(false);
    }
  };

  return (
    <ContextSuite.Provider value={contextSuite}>
      {children}
      {tooltipDisp}
    </ContextSuite.Provider>
  );
}

function downloadJSON(object, filename) {
  const jsonData = JSON.stringify(object, null, 2); // Convert object to JSON string

  const blob = new Blob([jsonData], { type: "application/json" }); // Create a Blob

  const url = URL.createObjectURL(blob); // Create an object URL from the Blob

  // Create a link element
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.json`; // Set the file name

  // Trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
