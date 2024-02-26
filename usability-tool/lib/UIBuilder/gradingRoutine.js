// gradingRoutine.js - function for finding grade points on ten.

export default function gradingRoutine(gradingObject, userGrid){
  const {positioningWeight, bonesUsedWeight, solutionGrid} = gradingObject;

  // get scores for both bone usage and positioning
  const bonesUsedScore = getBonesUsedScore(solutionGrid, userGrid);
  const positioningScore = getPositioningScore(solutionGrid, userGrid);

  // get raw weighted score out of 100
  let totalRawScore = (positioningWeight * positioningScore) + (bonesUsedWeight * bonesUsedScore);
  if (isNaN(totalRawScore)){
    totalRawScore = 0;
  }

  // scale to points out of 10 and return. round up!
  console.log("total score", Math.round((totalRawScore / 100) * 10));

  // if score is higher than 90, were gonna give a 10.

  const returnPayload = {
    score: totalRawScore > 95 ? 10 : Math.round((totalRawScore / 100) * 10),
    bonesUsedScore,
    positioningScore
  }

  return returnPayload;
}

function getBonesUsedScore(solutionGrid, userGrid){
  // if no bones used, give a zero!
  if (userGrid.length < 1){
    return 0;
  }

  // get bone count. 
  let solutionBoneCount = solutionGrid.length;
  let solutionBones = solutionGrid.map(obj => obj.bone); // make bones searchable
  let userBones = userGrid.map(obj => obj.bone); // make user bones searchable

  let userBoneMatches = 0;

  userGrid.map(obj => {
    if (obj.bone){
      // if bone matches a solution, increment
      if (solutionBones.includes(obj.bone)){
        userBoneMatches++; 
      }
    }
  });

  let penalty = 0;

  // no use penalty
  solutionGrid.map(obj => {
    if (obj.bone){
      // if bone matches a solution, increment
      if (!userBones.includes(obj.bone)){
        console.log("hit");
        penalty++; 
      }
    }
  });

  console.log("bone penalty ", penalty);

  const penaltySubtract = Math.pow(penalty, 5);
  console.log("penalty subtract: ", penaltySubtract);

  if (penaltySubtract > ((userBoneMatches / solutionBoneCount) * 100)){
    return 10.0;
  }

  // return a score out of 100 for bone matches
  return ((userBoneMatches / solutionBoneCount) * 100) - penaltySubtract;
}

// the NEW method of grading. grades based on position relative to all other bones.
// doing this to account for various screen resolutions. 

function getPositioningScore(solutionGrid, userGrid){

  if (userGrid.length < 1){
    return 0;
  }

  const totalUserBones = userGrid.length;
  const totalBones = solutionGrid.length;
  const totalPossiblePoints = userGrid.length * ((2 * (userGrid.length - 1)));

  let positionRawScore = 0;
  let newPositionRawScore = 0;

  // get solution deltas. find the deltas between each solution bone and all the other
  // bones in the solution grid.
  let solutionDeltas = [];

  solutionGrid.map((obj, index) => {
    let thisDeltaObj = {
      bone: obj.bone,
      deltas: []
    };

    const solutionTop = obj.style.top;
    const solutionLeft = obj.style.left;

    // get delta for each bone in the grid
    solutionGrid.map((obj, index) => {
      if (obj.style.top == solutionTop && obj.style.left == solutionLeft){
        return;
      }

      const topDelta = Math.abs(solutionTop - obj.style.top);
      const leftDelta = Math.abs(solutionLeft - obj.style.left);

      thisDeltaObj.deltas.push({
        bone: obj.bone,
        topDelta,
        leftDelta
      });
    });

    solutionDeltas.push(thisDeltaObj);
  });

  //console.log("NEW DELTA OBJ: ", solutionDeltas);

  // go through the user grid, check for a matching obj in the solution deltas. then find
  // the meta-delta between the solution delta and the user delta. 

  userGrid.map((obj) => {
    const matchBone = solutionDeltas.find(userObj => userObj.bone === obj.bone);

    let thisDeltaObj = {
      bone: obj.bone,
      deltas: []
    };

    const thisTop = obj.style.top;
    const thisLeft = obj.style.left;

    userGrid.map((obj) => {
      if (obj.style.top == thisTop && obj.style.left == thisLeft){
        return;
      }

      const topDelta = Math.abs(thisTop - obj.style.top);
      const leftDelta = Math.abs(thisLeft - obj.style.left);

      thisDeltaObj.deltas.push({
        bone: obj.bone,
        topDelta,
        leftDelta
      });
    });

    // find the META deltas for each. get two points per comparison.
    thisDeltaObj.deltas.map((obj) => {
      let matchDelta = matchBone.deltas.find(userDelta => userDelta.bone == obj.bone);

      //console.log("match delta: ", matchDelta, "this delta", obj);

      const metaDeltaScore = getDeltaScore(Math.abs(obj.topDelta - matchDelta.topDelta)) + getDeltaScore(Math.abs(obj.leftDelta - matchDelta.leftDelta));

      console.log(metaDeltaScore);

      newPositionRawScore += metaDeltaScore;
    })
    
  });

  if ((newPositionRawScore / totalPossiblePoints) * 100 < 0){
    return 0;
  }

  return isNaN((newPositionRawScore / totalPossiblePoints) * 100) ? 0 : (newPositionRawScore / totalPossiblePoints) * 100;
  // console.log(newPositionRawScore, totalPossiblePoints);
  
  // // old way
  // solutionGrid.map(obj => {
  //   const solutionTop = obj.style.top;
  //   const solutionLeft = obj.style.left;

  //   const matchBone = userGrid.find(userObj => userObj.bone === obj.bone);

  //   if (matchBone){
  //     // get deltas between input and solution
  //     const topDelta = Math.abs(solutionTop - matchBone.style.top);
  //     const leftDelta = Math.abs(solutionLeft - matchBone.style.left);

  //     // get delta score from both x and y deltas and combine.
  //     const deltaScore = getDeltaScore(topDelta) + getDeltaScore(leftDelta);

  //     // divide for one point per each bone
  //     positionRawScore += deltaScore / 2;

  //   }
  // })

  // console.log((positionRawScore / totalUserBones) * 100);
  // // return num points out of 100 for the position of each bone
  // return (positionRawScore / totalUserBones) * 100;
}

function getDeltaScore(delta){
  // gets score based on distance from solution. based on this function: e^-0.01x
  return (2 * Math.pow(Math.E, (-0.00021 * (delta * delta)))) - 1;
}