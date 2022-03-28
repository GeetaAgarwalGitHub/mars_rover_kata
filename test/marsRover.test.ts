import * as index from "../src/index";
import { getRoverposition } from "../src/rover";

describe("This is a parameterised test to get the rover position. The test below demonstrates that the code handles extra space and is not case sensitive. ", () => {
  test.each`
    upperRightCoordinates | startPosition                                        | movement             | result
    ${{ X: 5, Y: 5 }}     | ${{ xycoordinates: { X: 1, Y: 2 }, direction: "N" }} | ${"LM LML M LM M"}   | ${"1 3 N"}
    ${{ X: 5, Y: 5 }}     | ${{ xycoordinates: { X: 1, Y: 2 }, direction: "N" }} | ${"LMlml M LM M"}    | ${"1 3 N"}
    ${{ X: 5, Y: 5 }}     | ${{ xycoordinates: { X: 1, Y: 2 }, direction: "N" }} | ${"LMLMLMLMM"}       | ${"1 3 N"}
    ${{ X: 5, Y: 5 }}     | ${{ xycoordinates: { X: 3, Y: 3 }, direction: "e" }} | ${"MM RM M R MR RM"} | ${"5 1 E"}
  `(
    'Upper Right Coordinates : $upperRightCoordinates, Start Position: {$startPosition.xycoordinates, direction: "$startPosition.direction"} . Test successful for "$movement" with a result : $result',
    ({ upperRightCoordinates, startPosition, movement, result }) => {
      index.upperRightCoordinates = upperRightCoordinates;

      expect(
        getRoverposition(movement, upperRightCoordinates, startPosition)
      ).toBe(result);
    }
  );
});

describe("The test below demonstrates that the code handles when rover crashes ", () => {
  test.each`
    upperRightCoordinates | startPosition                                        | movement    | result
    ${{ X: 5, Y: 5 }}     | ${{ xycoordinates: { X: 1, Y: 2 }, direction: "N" }} | ${"MMMMMM"} | ${"Failed"}
  `(
    'Upper Right Coordinates : $upperRightCoordinates, Start Position: {$startPosition.xycoordinates, direction: "$startPosition.direction"} . Test successful for "$movement" with a result : $result',
    ({ upperRightCoordinates, startPosition, movement, result }) => {
      index.upperRightCoordinates = upperRightCoordinates;

      expect(
        getRoverposition(movement, upperRightCoordinates, startPosition)
      ).toBe(result);
    }
  );
});

describe("The tests below demonstrates that the code handles incorrect data input. ", () => {
  test.each`
    upperRightCoordinates | startPosition                                         | movement             | result
    ${{ X: 5, Y: -5 }}    | ${{ xycoordinates: { X: 3, Y: 3 }, direction: "e" }}  | ${"MM RM M R MR RM"} | ${"Failed"}
    ${{ X: 5, Y: 5 }}     | ${{ xycoordinates: { X: 13, Y: 3 }, direction: "e" }} | ${"MM RM M R MR RM"} | ${"Failed"}
    ${{ X: 5, Y: 5 }}     | ${{ xycoordinates: { X: 3, Y: 3 }, direction: "x" }}  | ${"MM RM M R MR RM"} | ${"Failed"}
  `(
    'Upper Right Coordinates : $upperRightCoordinates, Start Position: {$startPosition.xycoordinates, direction: "$startPosition.direction"} . Test successful for "$movement" with a result : $result',
    ({ upperRightCoordinates, startPosition, movement, result }) => {
      index.upperRightCoordinates = upperRightCoordinates;

      expect(
        getRoverposition(movement, upperRightCoordinates, startPosition)
      ).toBe(result);
    },
    1
  );
});
