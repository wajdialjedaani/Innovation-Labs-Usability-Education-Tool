import { useState, useEffect } from "react";

import styles from "@/styles/UIBuilder.module.scss"

import { getContextSuite } from "./UIBuilderContextProvider";

export default function BoneTooltip({title, children}){
  const [disp, setDisp] = useState(null);

  const {setTooltipTitle, killTooltipDisp} = getContextSuite();

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (isMouseDown){
      //killDisp();
      killTooltipDisp();
    }

    if (isMouseOver){
      //toggleDisp();
      setTooltipTitle(title);
    } else {
      killTooltipDisp();
      //killDisp();
    }
  }, [isMouseDown, isMouseOver])

  function toggleDisp(){
    setDisp(<TooltipWindow title={title} />);
  }

  function killDisp(){
   setDisp(null);
  }

  return (
    <div 
      onMouseOver={() => {setIsMouseOver(true)}} 
      onMouseLeave={() => {setIsMouseOver(false)}} 
      onMouseDown={() => {setIsMouseDown(true)}} 
      onMouseUp={() => {setIsMouseDown(false)}}
    >
      {children}
      {disp}
    </div>
  )
}

export function TooltipWindow({ title, x, y }) {
  const [position, setPosition] = useState(false);

  const {blockTooltip} = getContextSuite();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  if (blockTooltip){
    return null;
  }

  return (
    <div className={styles.boneTooltipWindow} style={{ top: position ? position.y + 20 : 0, left: position ? position.x + 20 : 0, display: position ? "block" : "none"}}>
      {title}
    </div>
  );
}