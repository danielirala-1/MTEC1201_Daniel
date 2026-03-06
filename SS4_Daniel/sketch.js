//SS4_DANIEL

let penguin; //Declare p5.image called penguin

let opacity = 0;
let fade = 1;

const millisPerSecond = 1000
let animationStart;
const animationTime = 3 * millisPerSecond



function preload()
{
  
  penguin = loadImage("images/penguin.jpg");

}


function setup()
{
  createCanvas(500, 500);
  background (255);
  imageMode (CENTER); //draws images from center point
}

function draw()
{
  background(255);
  //display image with image
  image (penguin, width / 2, height / 2);

  image (penguin, width / 5, height - height / 5, penguin.width / 2, penguin.height / 2);
}


