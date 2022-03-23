<h1 align = "center">Mars Rover Kata - JavaScript - The Brief</h1>

<center><font size=2>License: Attribution-NonCommercial-NoDerivatives 4.0 International</font></center><hr>

 You are working in an Engineering Squad for the Mars Mission, tasked with designing software to manage robots and cool vehicles for space exploration!<hr>
<h2>Your Task</h2>

<b>Setting the Scene</b></br>

You have been asked to create a program to move rovers around the surface of Mars!</br>

The surface of Mars is represented by a Plateau, you can make the assumption that the Plateau is a square/rectangular grid for the purpose of this task. </br>

Rovers navigate the Plateau so they can use their special cameras and robot arms to collect samples back to Planet Earth</br><hr>

<b>Representation of a Rover’s Position on the Plateau </b></br>

The Plateau is divided into a grid. A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North, South, West, East (the four cardinal compass points) respectively. </br></br>

<b>Example</b></br>
0 0 N

</br>This means the Rover is at the bottom-left corner facing in the North direction.<hr>

<b>Instructing a Rover to Move Around the Plateau</b></br></br>
 To move a Rover around the Plateau, a string of letters is sent to a Rover.</br></br>
Here are the letters and their resultant action:</br>
<table>
  <tr>
    <th>Letter</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>L</td>
    <td>Spins the Rover 90 degrees Left without moving from the current
coordinate point/</td>
  </tr>
   <tr>
    <td>R</td>
    <td>Spins the Rover 90 degrees Right without moving from the current
coordinate point/</td>
  </tr>
   <tr>
    <td>M</td>
    <td>Moves the Rover forward by one grid point, maintaining the same
heading (i.e. from where the Rover is facing (its orientation)).
</td>
  </tr>
</table></br>
<b>N.B.</b> Assume that the square directly North from (x, y) is (x, y+1). </br><hr>
<b>Inputs into the Program</b></br></br>

<font size =4>First Line of Input to the Program</font></br>

The first line inputted into the program represents the upper-right coordinates of the Plateau.</br>
5 5</br></br>
This Plateau has maximum (x, y) co-ordinates of (5, 5).</br></br>
<b>N.B.</b> Assume that the lower-left coordinates is (0, 0).</br></br>
<font size =4>Subsequent Lines of Input into the Program - Input to Rovers</font></br>

This represents the instructions to move the rovers.</br>

Each rover receives two lines of input.</br>

<b>First Line of Input to a Rover</b>

The Rover’s position is represented by two integers representing the X and Y coordinates and a letter representing where the Rover is facing (its orientation).

1 2 N

<b>Second Line of Input to a Rover</b>

A string of letters representing the instructions to move the Rover around the Plateau.

<b>Movement Rules</b>

Rovers move sequentially, this means that the first Rover needs to finish moving first before the next one can move.

<b>Output</b>

For each Rover, the output represents its final position (final coordinates and where it is facing).<hr>

<b>Example Test Case</b>

<font size =4>Lines of Input to the Program:</font>

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

<b>Expected Output:</b>

1 3 N

5 1 E 

<hr>
Your Solution</br>

 Feel free to implement an approach that you feel comfortable with to receive input into your program e.g. feeding input values into unit tests; input via a console application; supplying input via a file etc.

 We would like you to apply Test-Driven Development (TDD) to test-drive your solution.
 
 We would like to see production-quality code, this means you have thought carefully about your code design and that your code is clean and well-tested.
 
 We’d love to see good unit test coverage and all unit tests passing.
 