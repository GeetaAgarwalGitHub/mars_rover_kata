import { clear, print, askQuestion } from "../src/console";
import {
  checkIfCordinatesAreValid,
  checkStartingPosition,
} from "../src/plateau";

import {
  getRoverposition,
  checkIfMovementIsValid,
  newCurrentPosition,
} from "../src/rover";

export interface Coordinates {
  X: number;
  Y: number;
}

export interface CoordinatePosition {
  xycoordinates: Coordinates;
  direction: string;
}

export let currentPosition: CoordinatePosition = {
  xycoordinates: { X: 0, Y: 0 },
  direction: "",
};

export const upperRightCoordinates: Coordinates = { X: 0, Y: 0 };

export function acceptCoordinates(): void {
  clear(false);
  print("--------------------------");
  print("| Welcome to Mars Rover Kata! |");
  print("--------------------------");

  askQuestion(
    `Please enter the upper right coordinates (each coordinate should be greater than 0) separated by space (eg: 5 5): `,
    startMarsRover
  );
}

//If coordinates are valid get starting position
function startMarsRover(coordinates: string): void {
  if (coordinates && coordinates.length > 0) {
    if (checkIfCordinatesAreValid(coordinates)) {
      return getStartingPosition();
    } else {
      print("***************************************");
      print("Sadly, the coordinates are invalid! ☹");
      return endMarsRover();
    }
  } else {
    print(`You did not enter the Coordinates :(`);
    return endMarsRover();
  }
}

export function endMarsRover(): void {
  print("***************************************");
  print("Ohho!! your Rover cannot make it to Mars!!. 😭");
  askQuestion("Press ENTER to restart! ", acceptCoordinates);
}

export function getStartingPosition() {
  clear(false);
  print("------------------------");
  print(`🥳 Ready to Explore !! 🥳`);
  print("------------------------");

  print("Now we can start our mission!! ");
  askQuestion(
    "Please enter the starting position of your rover separated by space (eg: 1 1 N): ",
    setStartingPosition
  );
}

//If starting position get directions to move the rover
function setStartingPosition(coordinates: string): void {
  if (coordinates && coordinates.length > 0) {
    if (checkStartingPosition(coordinates)) {
      return getRoverMovements();
    } else {
      print("***************************************");
      print("Sadly, the coordinates are invalid! ☹");
      return endMarsRover();
    }
  } else {
    print(`You did not enter a valid starting position for your rover :(`);
    return endMarsRover();
  }
}

function getRoverMovements(): void {
  clear(false);
  print("------------------------");
  print(`🥳Perfect !! 🥳`);
  print("------------------------");

  print("Now we can send our rover on the Mars mission!! ");
  askQuestion(
    "Please enter the instructions for your rover to move. Let's see where it lands (Please Enter L/R/M): ",
    moveRover
  );
}

function moveRover(movement: string): void {
  if (movement && movement.length > 0) {
    if (checkIfMovementIsValid(movement)) {
      return getOutput(movement);
    } else {
      print("***************************************");
      print("Ohho!! You did not follow the movement rules ☹");
      return endMarsRover();
    }
  } else {
    print(`You did not enter any instructions for the rover to move :(`);
    return endMarsRover();
  }
}

function getOutput(movement: string) {
  if (
    getRoverposition(movement, upperRightCoordinates, currentPosition) !=
    "Failed"
  ) {
    print("Great!! Your rover is currently at the position below ☹");
    print("***************************************");
    print(
      newCurrentPosition.xycoordinates.X.toString() +
        " " +
        newCurrentPosition.xycoordinates.Y.toString() +
        " " +
        newCurrentPosition.direction
    );
    print("***************************************");
    askQuestion("Press  enter to start again ", getStartingPosition);
  } else {
    print("***************************************");
    print("Sadly, your rover has crashed! ☹");
    return endMarsRover();
  }
}

acceptCoordinates();
