export function smartSnapToGrid(args) {
  const gridSize = 5;
  const {transform} = args;

  const xOffset = 0;
  const yOffset = 0;

  //console.log(xOffset);

  const xTransform = (Math.ceil(transform.x / gridSize) * gridSize) + xOffset;
  const yTransform = (Math.ceil(transform.y / gridSize) * gridSize) + yOffset;
  
  return {
    ...transform,
    x: xTransform,
    y: yTransform,
  };
}

import { getEventCoordinates } from "@dnd-kit/utilities";
import { getContextSuite } from "@/components/ui-builder/UIBuilderContextProvider";

export function smartSnapToCursor(args){
  const {transform, activatorEvent, draggingNodeRect} = args;
  const {wasComponentInDrawer, setWasComponentInDrawer} = getContextSuite();

  if (!activatorEvent || activatorEvent instanceof KeyboardEvent || !draggingNodeRect){
    return transform;
  }

  console.log("ARGS: ", args);

  console.log(wasComponentInDrawer);


  const activatorCoordinates = getEventCoordinates(activatorEvent);

  console.log(args);

  if (wasComponentInDrawer){
    const offsetX = activatorCoordinates.x - draggingNodeRect.left;
    const offsetY = activatorCoordinates.y - draggingNodeRect.top;

    return {
      ...transform,
      x: transform.x + offsetX,
      y: transform.y + offsetY,
    }
  }

  return {
    ...transform
  }
}
