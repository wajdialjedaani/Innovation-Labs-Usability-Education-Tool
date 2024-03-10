// gradingRoutine.js - function for finding grade points on ten.

// TODO: 
// - implement a system to consider two solutions. --> next week (03.04.24)
// - implement a system that returns the worst positioned id.

export default function gradingRoutine(gradingObject, userGrid){
  const {positioningWeight, bonesUsedWeight, solutionGrid, solutionGrids} = gradingObject;

  let bestPositioningScore = 0;

  // used for storing the actual info of the closest ones
  let bonesUsedScore = null, missingBones = null, positioningScore = null, worstPositionedBone = null;

  let closestSolutionIndex = null;

  solutionGrids.map((obj, index) => {
    console.log(`======================================================================= SCORE TEST # ${index} ===============================================================`);
    console.log("best at start: ", bestPositioningScore);
    // get scores for both bone usage and positioning
    // const {bonesUsedScore, missingBones} = getBonesUsedScore(obj, userGrid);
    const boneObj = getBonesUsedScore(obj, userGrid);

    // const {positioningScore, worstPositionedBone} = getPositioningScore(obj, userGrid);
    const posObj = getPositioningScore(obj, userGrid);

    console.log("found this score: ", posObj.positioningScore);

    if (posObj.positioningScore > bestPositioningScore){
      console.log("ITS COPYIGN!");
      // copy the data to the pre loop vars
      bonesUsedScore = boneObj.bonesUsedScore, missingBones = boneObj.missingBones, positioningScore = posObj.positioningScore, worstPositionedBone = posObj.worstPositionedBone;

      // update positioning score tracker
      bestPositioningScore = posObj.positioningScore;
      closestSolutionIndex = index;
    }
  });

  console.log("Closed solution: ", closestSolutionIndex);

  console.log("MISSING BONES: ", missingBones);
  console.log(bonesUsedScore);
  console.log(worstPositionedBone);

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
    positioningScore,
    worstPositionedBone,
    missingBones,
    closestSolutionIndex
  }

  return returnPayload;
}

function getBonesUsedScore(solutionGrid, userGrid){
  // if no bones used, give a zero!
  if (userGrid.length < 1){
    return {
      bonesUsedScore: 0,
      missingBones: []
    };
  }

  // get bone count. 
  let solutionBoneCount = solutionGrid.length;
  let solutionBones = solutionGrid.map(obj => obj.bone); // make bones searchable
  let userBones = userGrid.map(obj => obj.bone); // make user bones searchable

  let userBoneMatches = 0;

  let missingBones = []

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
        missingBones.push(obj.bone);
        penalty++; 
      }
    }
  });

  console.log("bone penalty ", penalty);

  const penaltySubtract = Math.pow(penalty, 5);
  console.log("penalty subtract: ", penaltySubtract);

  if (penaltySubtract > ((userBoneMatches / solutionBoneCount) * 100)){
    return {
      bonesUsedScore: 10.0,
      missingBones: missingBones
    }
  }

  // return a score out of 100 for bone matches
  return {
    bonesUsedScore: ((userBoneMatches / solutionBoneCount) * 100) - penaltySubtract,
    missingBones: missingBones
  }
}

// the NEW method of grading. grades based on position relative to all other bones.
// doing this to account for various screen resolutions. 

function getPositioningScore(solutionGrid, userGrid){
  let worstPositionedBone;

  if (userGrid.length < 1){
    return {
      positioningScore: 0,
      worstPositionedBone: null
    }
  }

  const totalPossiblePoints = userGrid.length * ((2 * (userGrid.length - 1)));

  let worstPositionScore = 100.0;
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

      if (metaDeltaScore < worstPositionScore){
        worstPositionScore = metaDeltaScore;
        worstPositionedBone = obj.bone;
      }

      newPositionRawScore += metaDeltaScore;
    })
    
  });

  console.log("NEW TEST: ", worstPositionScore, worstPositionedBone);

  if ((newPositionRawScore / totalPossiblePoints) * 100 < 0){
    return {
      positioningScore: 0,
      worstPositionedBone: worstPositionScore < 1.5 ? worstPositionedBone : null
    }
  }

  return {
    positioningScore: isNaN((newPositionRawScore / totalPossiblePoints) * 100) ? 0 : (newPositionRawScore / totalPossiblePoints) * 100,
    worstPositionedBone: worstPositionScore < 1.5 ? worstPositionedBone : null
  }
}

function getDeltaScore(delta){
  // gets score based on distance from solution. based on this function: e^-0.01x
  return (2 * Math.pow(Math.E, (-0.00021 * (delta * delta)))) - 1;
}