import { useContext, createContext, useState, useEffect } from "react";

// ContextSuite
const ContextSuite = createContext();

export function getContextSuite(){
  return useContext(ContextSuite);
}

//Sample array of widgets that tracks their dragging data.
//Different "levels" can be designed by providing different lists of widgets. Needs a property to determine widget type
const widgetData = [
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
];

export default function UIBuilderContextProvider(props){

  // widget state, for editing position and selecting bone
  const [widgets, setWidgets] = useState(widgetData);
  const [gridWidgets, setGridWidgets] = useState([]);

  const contextSuite = {
    // general widgets
    widgets,
    setWidgets: (newWidgets) => {
      setWidgets(newWidgets);
    },

    // grid widgets
    gridWidgets,
    setGridWidgets: (newGridWidgets) => {
      setGridWidgets(newGridWidgets);
    }
  }

  useEffect(() => {
    console.log(gridWidgets);
  }, [gridWidgets]);

  return (
    <ContextSuite.Provider value={contextSuite}>
      {props.children}
    </ContextSuite.Provider>
  )
}