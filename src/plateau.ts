import {
  Coordinates,
  endMarsRover,
  upperRightCoordinates,
  currentPosition,
} from "../src/index";

import { clear, print, askQuestion } from "../src/console";

export const directions = ["N", "E", "W", "S"];

//This function ensures the Upper Right cooridinates are valid
//Ensures the coordinates are greater than 0
//Ensures there are only 2 coordinates provided
export function checkIfCordinatesAreValid(coordinates: string) {
  //remove all the extra spaces in input string
  var xy_coordinates: string[] = coordinates
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");
  if (xy_coordinates.length != 2) return false;
  if (Number(xy_coordinates[0]) > 0 && Number(xy_coordinates[1]) > 0) {
    upperRightCoordinates.X = Number(xy_coordinates[0]);
    upperRightCoordinates.Y = Number(xy_coordinates[1]);
    return true;
  }
  return false;
}

//If coordinates are valid get second line of input
export function checkStartingPosition(coordinates: string): boolean {
  if (coordinates && coordinates.length > 0)
    if (setStartingPosition(coordinates)) return true;

  return false;
}

function setStartingPosition(coordinates: string) {
  let firstLineOfInput: string[] = coordinates
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");

  if (firstLineOfInput.length != 3) return false;
  currentPosition.xycoordinates.X = Number(firstLineOfInput[0]);
  currentPosition.xycoordinates.Y = Number(firstLineOfInput[1]);
  currentPosition.direction = firstLineOfInput[2].toUpperCase();

  if (
    !directions.includes(currentPosition.direction.toUpperCase()) ||
    currentPosition.xycoordinates.X < 0 ||
    currentPosition.xycoordinates.X > upperRightCoordinates.X ||
    currentPosition.xycoordinates.Y < 0 ||
    currentPosition.xycoordinates.Y > upperRightCoordinates.Y
  )
    return false;
  return true;
}

// export function checkRoverMovements(movement: string): boolean {
//   if (movement && movement.length > 0) {
//     if (checkIfMovementIsValid(movement)) {
//       return getOutput(movement);
//     } else {
//       print("***************************************");
//       print("Ohho!! You did not follow the movement rules ☹");
//       return endMarsRover();
//     }
//   } else {
//     print(`You did not enter the Second Line of Input :(`);
//     return endMarsRover();
//   }
// }
