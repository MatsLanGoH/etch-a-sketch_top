# Etch-a-Sketch
Etch-a-sketch written in jQuery/Javascript. Exercise for The Odin Project.

## Project description.

The goal of this exercise is to create a browser version of something between
a sketchpad and an Etch-a-sketch, using Javascript, jQuery, and CSS.

Details concerning the implementations can be found on the
[Project Page at The Odin Project](http://www.theodinproject.com/web-development-101/javascript-and-jquery).

## Features

* Create a web page with a 16x16 grid of square divs.
  - Create divs using JS/jQuery.
  - Put grid squares into a container div
  - Used `table` to create a grid.

## Todos
* ~~Create a web page with a 16x16 grid of square divs.~~ Done.
  - Create divs using JS/jQuery.
  - Put grid squares into a container div
  - Consider different ways to make the divs appear as a grid:
    `float`/`clear`, using a `table`, and `inline-block` displays.

* ~~Set up a hover effect to change the color of the square when your mouse passes over it, leaving a pixellated trail like a pen would.~~ Done.
  - (Think about which events happen when *hover*ing. You *enter* and *leave* the div.)
  - You have several options to change the color. Adding a new class(`addClass()`), changing `background-color` individually, etc.

* ~~Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid.~~ Done.
~~Once entered, the new grid should be generated *in the same total space as before* (e.g. 960px wide).~~ Done.
  - Research `button` tags in HTML and how to invoke a JS function upon clicking.
  - Check out `prompt`s.
  - Too slow? Check code efficiency!

* Optional: ~~How about random color options, or gradually increasing the density of blackness (i.e. by adding 10% of black per pass).~~ Done, done, and done.

* Improve CSS stylesheet.

* Push your project to Github.

