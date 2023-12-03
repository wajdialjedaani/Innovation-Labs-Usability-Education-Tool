// gradingRoutine.js - function for finding grade points on ten.

export default function gradingRoutine(gradingObject, userGrid){
  const {positioningWeight, bonesUsedWeight, solutionGrid} = gradingObject;

  // get scores for both bone usage and positioning
  const bonesUsedScore = getBonesUsedScore(solutionGrid, userGrid);
  const positioningScore = getPositioningScore(solutionGrid, userGrid);

  // get raw weighted score out of 100
  const totalRawScore = (positioningWeight * positioningScore) + (bonesUsedWeight * bonesUsedScore);

  // scale to points out of 10 and return. round up!
  console.log("total score", Math.round((totalRawScore / 100) * 10));
  return Math.round((totalRawScore / 100) * 10);

  
}

function getBonesUsedScore(solutionGrid, userGrid){
  // if no bones used, give a zero!
  if (userGrid.length < 1){
    return 0;
  }

  // get bone count. 
  let solutionBoneCount = solutionGrid.length;
  let solutionBones = solutionGrid.map(obj => obj.bone); // make bones searchable

  let userBoneMatches = 0;

  userGrid.map(obj => {
    if (obj.bone){
      // if bone matches a solution, increment
      if (solutionBones.includes(obj.bone)){
        userBoneMatches++; 
      }
    }
  });

  // return a score out of 100 for bone matches
  return (userBoneMatches / solutionBoneCount) * 100;
}

function getPositioningScore(solutionGrid, userGrid){

  if (userGrid.length < 1){
    return 0;
  }

  const totalUserBones = userGrid.length;

  let positionRawScore = 0;

  solutionGrid.map(obj => {
    const solutionTop = obj.style.top;
    const solutionLeft = obj.style.left;

    const matchBone = userGrid.find(userObj => userObj.bone === obj.bone);

    if (matchBone){
      // get deltas between input and solution
      const topDelta = Math.abs(solutionTop - matchBone.style.top);
      const leftDelta = Math.abs(solutionLeft - matchBone.style.left);

      // get delta score from both x and y deltas and combine.
      const deltaScore = getDeltaScore(topDelta) + getDeltaScore(leftDelta);

      // divide for one point per each bone
      positionRawScore += deltaScore / 2;

      //console.log(`=== deltas===\n top: ${topDelta}\n left: ${leftDelta}\ndeltascore: ${deltaScore}`);
    }
  })

  console.log((positionRawScore / totalUserBones) * 100);
  // return num points out of 100 for the position of each bone
  return (positionRawScore / totalUserBones) * 100;
}

function getDeltaScore(delta){
  // gets score based on distance from solution. based on this function: e^-0.01x
  return Math.pow(Math.E, (-0.02 * delta));
}