// util imports
import { useContext, createContext, useState, useEffect } from "react";
import gradingRoutine from "@/lib/UIBuilder/gradingRoutine";


// ContextSuite
const ContextSuite = createContext();

export function getContextSuite(){
  return useContext(ContextSuite);
}

//////// STUFF THAT SHOULD BE IMPORTED DYNAMICALLY FROM THE PAGE.JS

//Sample array of widgets that tracks their dragging data.
//Different "levels" can be designed by providing different lists of widgets. Needs a property to determine widget type
/* const widgetData = {
  drawer: [
    {
      id: "0",
      bone: "searchbar",
      style: 
      {},
    },
    {
      id: "1",
      bone: "navbar",
      style: 
      {},
    },
    {
      id: "2",
      bone: "logobox",
      style: 
      {},
    },
    {
      id: "3",
      bone: "postcontent",
      style: 
      {},
    }
  ],
  grid: []
}; */

//const gradingObjectImport = require("/lib/UIBuilder/scenario-ExampleScenario.json");

export default function UIBuilderContextProvider({scenario, widgetData, children}){

  // widget state, for editing position and selecting bone
  const [widgets, setWidgets] = useState(widgetData);
  const [gridWidgets, setGridWidgets] = useState([]);

  const contextSuite = {
    // scenario info:
    scenarioInformation: scenario.scenarioInformation,

    // general widgets accessors
    widgets,
    setWidgets: (newWidgets) => {
      setWidgets(newWidgets);
    },
    
    // function for replacing widget in js object in the appropriate wrapper
    replaceWidget: (newWidget, toGrid, shouldDelete) => {
      const widgetIdToRemove = newWidget.id;

      // remove widget from both drawer and grid
      const updatedDrawer = widgets.drawer.filter(widget => widget.id !== widgetIdToRemove);
      const updatedGrid = widgets.grid.filter(widget => widget.id !== widgetIdToRemove);

      // push widget to appropriate array in widgets

      if (toGrid) {
        updatedGrid.push(newWidget);
      }
      else if (!shouldDelete) {
        updatedDrawer.push(newWidget);
      }

      // update state
      setWidgets(
        {
          drawer: updatedDrawer,
          grid: updatedGrid
        }
      );

    },

    downloadGridJSON: (positioningWeight, bonesUsedWeight, scenario) => {
      let gradingObject = {
        scenarioInformation: scenario,
        solutionGrid: widgets.grid,
        widgetData: {
          drawer: widgets.drawer.concat(widgets.grid.map(item => ({ ...item, style: {}}))),
          grid: []
        },
        positioningWeight: (positioningWeight / 100),
        bonesUsedWeight: (bonesUsedWeight / 100)
      }

      const date = new Date();
      downloadJSON(gradingObject, `scenario-${scenario.title.replace(/\s/g, "")}`);
    },

    startGrading: () => {
      // get score
      const score = gradingRoutine(scenario, widgets.grid);

      // put score in database....
        // do stuff
      
      // ...return for display to user
      return score;
    }
  }

  return (
    <ContextSuite.Provider value={contextSuite}>
      {children}
    </ContextSuite.Provider>
  )
}

function downloadJSON(object, filename){
  const jsonData = JSON.stringify(object, null, 2); // Convert object to JSON string

  const blob = new Blob([jsonData], { type: 'application/json' }); // Create a Blob

  const url = URL.createObjectURL(blob); // Create an object URL from the Blob

  // Create a link element
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.json`; // Set the file name

  // Trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}