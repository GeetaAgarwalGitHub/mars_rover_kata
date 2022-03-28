import {
  Coordinates,
  upperRightCoordinates,
  CoordinatePosition,
} from "../src/index";

import { clear, print, askQuestion } from "../src/console";
export let newCurrentPosition: CoordinatePosition;
export const directions = ["N", "E", "W", "S"];

export function checkIfMovementIsValid(movement: string) {
  let regExpression = new RegExp("L|M|R");
  return regExpression.test(movement.toUpperCase());
}

//This function is for test cases not used in the app itself
export function getRoverposition(
  movement: string,
  upperRightCoordinates1: Coordinates,
  startPosition: CoordinatePosition
): string {
  newCurrentPosition = { ...startPosition };
  newCurrentPosition.direction = newCurrentPosition.direction.toUpperCase();
  if (!directions.includes(newCurrentPosition.direction.toUpperCase()))
    return "Failed";

  return returnRoverPosition(movement);
}

function returnRoverPosition(movement: string): string {
  var movementArray: string[] = movement
    .toUpperCase()
    .replace(/\s+/g, "")
    .trim()
    .split("");

  for (let i = 0; i < movementArray.length; i++) {
    if (movementArray[i] == "L" || movementArray[i] == "R")
      setNewDirection(movementArray[i]);
    else if (movementArray[i] == "M") setOutput();
  }
  if (isValidOutput()) {
    return (
      newCurrentPosition.xycoordinates.X.toString() +
      " " +
      newCurrentPosition.xycoordinates.Y.toString() +
      " " +
      newCurrentPosition.direction
    );
  } else {
    return "Failed";
  }
}

function setNewDirection(movement: string) {
  if (
    (movement == "L" && newCurrentPosition.direction == "N") ||
    (movement == "R" && newCurrentPosition.direction == "S")
  )
    newCurrentPosition.direction = "W";
  else if (
    (movement == "R" && newCurrentPosition.direction == "N") ||
    (movement == "L" && newCurrentPosition.direction == "S")
  )
    newCurrentPosition.direction = "E";
  else if (
    (movement == "L" && newCurrentPosition.direction == "W") ||
    (movement == "R" && newCurrentPosition.direction == "E")
  )
    newCurrentPosition.direction = "S";
  else if (
    (movement == "R" && newCurrentPosition.direction == "W") ||
    (movement == "L" && newCurrentPosition.direction == "E")
  )
    newCurrentPosition.direction = "N";
}

function isValidOutput(): boolean {
  if (
    newCurrentPosition.xycoordinates.X < 0 ||
    newCurrentPosition.xycoordinates.X > upperRightCoordinates.X
  )
    return false;
  if (
    newCurrentPosition.xycoordinates.Y < 0 ||
    newCurrentPosition.xycoordinates.Y > upperRightCoordinates.Y
  )
    return false;
  return true;
}

function setOutput() {
  if (newCurrentPosition.direction == "E") {
    newCurrentPosition.xycoordinates.X = newCurrentPosition.xycoordinates.X + 1;
  } else if (newCurrentPosition.direction == "W") {
    newCurrentPosition.xycoordinates.X = newCurrentPosition.xycoordinates.X - 1;
  } else if (newCurrentPosition.direction == "N") {
    newCurrentPosition.xycoordinates.Y = newCurrentPosition.xycoordinates.Y + 1;
  } else if (newCurrentPosition.direction == "S") {
    newCurrentPosition.xycoordinates.Y = newCurrentPosition.xycoordinates.Y - 1;
  }
}
