import { useContext, createContext, useState, useEffect } from "react";

// ContextSuite
const ContextSuite = createContext();

export function getContextSuite(){
  return useContext(ContextSuite);
}

//Sample array of widgets that tracks their dragging data.
//Different "levels" can be designed by providing different lists of widgets. Needs a property to determine widget type
const widgetData = {
  drawer: [
    {
      id: "0",
      bone: "searchbar",
      style: 
      {
        //position: "relative",
        //left: "0px",
        //top: "0px",
        zIndex: 12,
      },
    },
    {
      id: "1",
      bone: "navbar",
      style: 
      {
        /* position: "relative",
        left: "0px",
        top: "0px", */
      },
    },
    {
      id: "2",
      bone: "logobox",
      style: 
      {
        /* position: "relative",
        left: "0px",
        top: "0px", */
      },
    },
    {
      id: "3",
      bone: "postcontent",
      style: 
      {
        /* position: "relative",
        left: "0px",
        top: "0px", */
      },
    }
  ],
  grid: []
};

export default function UIBuilderContextProvider(props){

  // widget state, for editing position and selecting bone
  const [widgets, setWidgets] = useState(widgetData);
  const [gridWidgets, setGridWidgets] = useState([]);

  const contextSuite = {
    // general widgets accessors
    widgets,
    setWidgets: (newWidgets) => {
      setWidgets(newWidgets);
    },
    
    // function for replacing widget in js object in the appropriate wrapper
    replaceWidget: (newWidget, toGrid) => {
      const widgetIdToRemove = newWidget.id;

      // remove widget from both drawer and grid
      const updatedDrawer = widgets.drawer.filter(widget => widget.id !== widgetIdToRemove);
      const updatedGrid = widgets.grid.filter(widget => widget.id !== widgetIdToRemove);

      // push widget to appropriate array in widgets
      if (toGrid) {
        updatedGrid.push(newWidget);
      }
      else {
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

    downloadGridJSON: () => {
      const date = new Date();
      const dateDisp = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
      downloadJSON(widgets.grid, `grid-${dateDisp}`);
    }
  }

  return (
    <ContextSuite.Provider value={contextSuite}>
      {props.children}
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