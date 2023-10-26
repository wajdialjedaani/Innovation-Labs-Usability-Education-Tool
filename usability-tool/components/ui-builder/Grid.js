"use client";

import { useRef, useState, useEffect } from "react";

import Draggable from "react-draggable";

import styles from "@/styles/grid.module.scss";

export function Grid(){

  const numberOfChildren = 342;

  const childComponents = Array.from({ length: numberOfChildren }, (_, index) => (
    <GridCell key={index} />
  ));

  return (
    <div className={styles.gridContainer}>
      {childComponents}

      <DragTest />


    </div>
  )
}

function DragTest() {
  const onDrag = (e, { x, y }) => {
    const draggableRect = e.target.getBoundingClientRect();
    const gridCells = document.querySelectorAll(`.${styles.gridCell}`);

    gridCells.forEach((cell) => {
      const cellRect = cell.getBoundingClientRect();
      if (
        draggableRect.left >= cellRect.left &&
        draggableRect.right <= cellRect.right &&
        draggableRect.top >= cellRect.top &&
        draggableRect.bottom <= cellRect.bottom
      ) {
        cell.classList.add(styles.gridCellDragged);
      } else {
        cell.classList.remove(styles.gridCellDragged);
      }
    });
  };

  return (
    <Draggable onDrag={onDrag}>
      <div className={styles.dragDiv}>DRAG MEEEEE</div>
    </Draggable>
  );
}

function GridCell() {
  const ref = useRef();
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  return (
    <div
      ref={ref}
      className={isDraggedOver ? `${styles.gridCellDragged} ${styles.gridCell}` : styles.gridCell}
    >
      {isDraggedOver ? "Dragged Over" : ""}
    </div>
  );
}