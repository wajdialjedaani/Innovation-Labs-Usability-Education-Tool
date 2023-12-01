import { useContext, createContext } from "react";

// ContextSuite
const ContextSuite = createContext();

export function getContextSuite(){
  return useContext(ContextSuite);
}

export default function UIBuilderContextProvider(props){

  const contextSuite = {
    test: "hi"
  }

  return (
    <ContextSuite.Provider value={contextSuite}>
      {props.children}
    </ContextSuite.Provider>
  )
}