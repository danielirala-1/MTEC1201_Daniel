// Midterm_Final_DanielI

// Basic Interactive Project with a Penguin in the background.
let penguin; // Declare Image variable
let shapes = []; // Array to store shapes drawn
let maxShapes = 15; // Maximum number of shapes to display at once

//p5.js preload function
   // Runs once to load assets before setup 
function preload() { 
  penguin = loadImage("Images/penguin.jpg");  // Load penguin image from folder
}

// p5.js setup function
   // Initializes canvas and settings
function setup() { 
  createCanvas(500, 500); // Canvas size
  imageMode(CENTER); // Draw images from their center
  textSize(16); // Instruction text size
  fill(255); // White text color
}

// p5.js source link: https://p5js.org/reference/p5/draw/ 
function draw() { 
  background(0); // Black background

  // Draw the penguin at the center
  image(penguin, width / 2, height / 2);

  // Iterate through shapes array and display each shape
  for (let i = 0; i < shapes.length; i++) {
    displayShape(shapes[i]); // Call user-defined function to draw shape
  }

  // Display instructions
  fill(255);
  text("Click to create shapes. Press 'R' to restart.", 10, height - 10);
}

// User-defined function to create a random shape
   // Returns an object describing the shape properties
function createRandomShape() {
  let shapeType = random(["circle", "square", "triangle"]); // Random shape type
  let x = random(width); // Random x-coordinate
  let y = random(height); // Random y-coordinate
  let size = random(20, 80); // Random size
  let col = color(random(255), random(255), random(255)); // Random RGB color
  return { type: shapeType, x: x, y: y, size: size, col: col };
}

// User-defined function to display a shape
   // Accepts a shape object and draws it
function displayShape(s) {
  fill(s.col); // Set fill color
  stroke(225); // color border
  if (s.type === "circle") {
    ellipse(s.x, s.y, s.size); // Draw circle
  } else if (s.type === "square") {
    rect(s.x, s.y, s.size, s.size); // Draw square
  } else if (s.type === "triangle") { 
    triangle(
      s.x, s.y,
      s.x + s.size, s.y,
      s.x + s.size / 2, s.y - s.size
    ); // creates triangle using random line orientations
  }
}

// User interaction: mouse click
   // Creates a new random shape on each click
function mousePressed() {
  if (shapes.length < maxShapes) {
    shapes.push(createRandomShape()); // Add new shape
  } else {
    alert("Maximum shapes reached! Press 'R' to restart."); // User feedback
  }
}

// User-defined restart function 
   // Resets the shapes array but keeps penguin
function restartProgram() {
  shapes = []; // Clear all shapes
}

// User interaction: key press
   // Allows user to restart program by pressing 'r' 
function keyPressed() {
  if (key === 'r' || key === 'R') {
    restartProgram(); // Clear shapes
  }
}
