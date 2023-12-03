export function smartSnapToGrid(args) {

  const gridSize = 5;
  const {transform} = args;

  //console.log(transform);

  // const xOffset = args.windowRect ? getFiftyOffset(args.windowRect.right) : 0;
  // const yOffset = args.windowRect ? getFiftyOffset(args.windowRect.bottom) : 0;


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

function getFiftyOffset(number) {
  const numFiftys = number % 50;
  console.log(`number ${number}; numFiftys: ${numFiftys}; return: ${number - (50 * numFiftys)}`);
  return number % 50;
}
