// gradingRoutine.js - function for finding grade points on ten.

import { collection } from "firebase/firestore";

// TODO: 
// - implement a system to consider two solutions. --> next week (03.04.24)
// - implement a system that returns the worst positioned id.

export default function gradingRoutine(gradingObject, userGrid) {
  const { positioningWeight, bonesUsedWeight, solutionGrid, solutionGrids } = gradingObject;

  let bestPositioningScore = -1000;

  // used for storing the actual info of the closest ones
  let bonesUsedScore = null, missingBones = null, positioningScore = null, worstPositionedBone = null;

  let closestSolutionIndex = null;

  solutionGrids.map((obj, index) => {
    // get scores for both bone usage and positioning
    // const {bonesUsedScore, missingBones} = getBonesUsedScore(obj, userGrid);
    const boneObj = getBonesUsedScore(obj, userGrid);

    // const {positioningScore, worstPositionedBone} = getPositioningScore(obj, userGrid);
    const posObj = getPositioningScore(obj, userGrid);

    if (posObj.positioningScore > bestPositioningScore) {
      // copy the data to the pre loop vars
      bonesUsedScore = boneObj.bonesUsedScore, missingBones = boneObj.missingBones, positioningScore = posObj.positioningScore, worstPositionedBone = posObj.worstPositionedBone;

      // update positioning score tracker
      bestPositioningScore = posObj.positioningScore;
      closestSolutionIndex = index;
    }
  });

  const collisions = getDetectedCollisions(userGrid);

  if (collisions.length > 0) {
    positioningScore -= 20 * collisions.length;

    if (positioningScore < 0) {
      positioningScore = 0;
    }
  }

  // get raw weighted score out of 100
  let totalRawScore = (positioningWeight * positioningScore) + (bonesUsedWeight * bonesUsedScore);
  if (isNaN(totalRawScore)) {
    totalRawScore = 0;
  }

  // scale to points out of 10 and return. round up!
  //console.log(collisions);

  // if score is higher than 90, were gonna give a 10.

  const returnPayload = {
    score: totalRawScore > 95 ? 10 : Math.round((totalRawScore / 100) * 10),
    bonesUsedScore,
    positioningScore,
    worstPositionedBone,
    missingBones,
    closestSolutionIndex,
    collisions
  }

  return returnPayload;
}

function getBonesUsedScore(solutionGrid, userGrid) {
  // if no bones used, give a zero!
  if (userGrid.length < 1) {
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

  let missingBones = [];

  let penalty = 0;


  userGrid.map(obj => {
    if (obj.bone) {
      // if bone matches a solution, increment
      if (solutionBones.includes(obj.bone)) {
        userBoneMatches++;
      } else {
        penalty++;
      }
    }
  });


  // no use penalty
  solutionGrid.map(obj => {
    if (obj.bone) {
      // if bone matches a solution, increment
      if (!userBones.includes(obj.bone)) {
        missingBones.push(obj.bone);
        penalty++;
      }
    }
  });

  const penaltySubtract = Math.pow(penalty, 5);

  if (penaltySubtract > ((userBoneMatches / solutionBoneCount) * 100)) {
    return {
      bonesUsedScore: 0,
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

function getPositioningScore(solutionGrid, userGrid) {
  let worstPositionedBone;

  if (userGrid.length < 1) {
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
      if (obj.style.top == solutionTop && obj.style.left == solutionLeft) {
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


  // go through the user grid, check for a matching obj in the solution deltas. then find
  // the meta-delta between the solution delta and the user delta. 

  userGrid.map((obj) => {
    const matchBone = solutionDeltas.find(userObj => userObj.bone === obj.bone);

    if (!matchBone) {
      return; // not in solution, return
    }

    let thisDeltaObj = {
      bone: obj.bone,
      deltas: []
    };

    const thisTop = obj.style.top;
    const thisLeft = obj.style.left;

    userGrid.map((obj) => {
      if (obj.style.top == thisTop && obj.style.left == thisLeft) {
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

      if (!matchDelta) { return; }

      //console.log("match delta: ", matchDelta, "this delta", obj);

      const metaDeltaScore = getDeltaScore(Math.abs(obj.topDelta - matchDelta.topDelta)) + getDeltaScore(Math.abs(obj.leftDelta - matchDelta.leftDelta));

      if (metaDeltaScore < worstPositionScore) {
        worstPositionScore = metaDeltaScore;
        worstPositionedBone = obj.bone;
      }

      newPositionRawScore += metaDeltaScore;
    })

  });

  if ((newPositionRawScore / totalPossiblePoints) * 100 < 0) {
    return {
      positioningScore: 0,
      worstPositionedBone: worstPositionScore < 1.5 ? worstPositionedBone : null,
    }
  }

  return {
    positioningScore: isNaN((newPositionRawScore / totalPossiblePoints) * 100) ? 0 : (newPositionRawScore / totalPossiblePoints) * 100,
    worstPositionedBone: worstPositionScore < 1.5 ? worstPositionedBone : null,
  }
}

function getDetectedCollisions(userGrid) {
  // this really should be refactored before going into production.
  // time for collision detections
  let badCollisions = []; // array to store the bad collisions

  userGrid.map((obj, index) => {
    const actualRect = document.getElementById(obj.id).getBoundingClientRect();

    // easy obj for storing rect info
    let thisRect = {
      name: obj.bone,
      index: index,
      x: actualRect.left,
      y: actualRect.top,
      width: actualRect.width,
      height: actualRect.height,
    };

    // if we have allowed collsions, make note of them in the object.
    if ("allowCollide" in obj) {
      thisRect.allowCollide = obj.allowCollide;
    } else {
      thisRect.allowCollide = [];
    }

    // check collisions with every other bone
    userGrid.map((obj, index) => {
      if (index == thisRect.index) {
        return;
      }

      const actualRect = document.getElementById(obj.id).getBoundingClientRect();

      // get bone info
      let thatRect = {
        name: obj.bone,
        index: index,
        x: actualRect.left,
        y: actualRect.top,
        width: actualRect.width,
        height: actualRect.height
      };

      if ("allowCollide" in obj) {
        thatRect.allowCollide = obj.allowCollide;
      } else {
        thatRect.allowCollide = [];
      }

      // check if it collides
      if (thisRect.x < thatRect.x + thatRect.width &&
        thisRect.x + thisRect.width > thatRect.x &&
        thisRect.y < thatRect.y + thatRect.height &&
        thisRect.y + thisRect.height > thatRect.y) {
        //console.log("COLLISION DETECTED", thisRect, thatRect);

        let allowCollision = false;

        // check if the collision is allowed
        thisRect.allowCollide.length > 0 && thisRect.allowCollide.map((bone) => {
          if (thatRect.name == bone) {
            allowCollision = true;
          }
        });

        thatRect.allowCollide.length > 0 && thatRect.allowCollide.map((bone) => {
          if (thisRect.name == bone) {
            allowCollision = true;
          }
        })

        // if allowed, do nothing;
        if (allowCollision) {
          //console.log("ALLOWED COLLISION: ", thisRect.name, thatRect.name);
          return;
        }

        // if not, add it to the badCollisions array
        //console.log("DISALLOWED COLLISION: ", thisRect.name, thatRect.name);
        if (badCollisions.find((obj) => (obj.bone1 == thatRect.name && obj.bone2 == thisRect.name))) {
          return;
        } else {
          badCollisions.push({
            bone1: thisRect.name,
            bone2: thatRect.name
          });
          return;
        }
      } else {
        return;
      }
    })
  });

  return badCollisions;
}

function getDeltaScore(delta) {
  // gets score based on distance from solution. based on this function: e^-0.01x
  return (2 * Math.pow(Math.E, (-0.00021 * (delta * delta)))) - 1;
}