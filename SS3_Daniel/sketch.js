//Daniel Irala 
//Circle changes to a random color each time the mouse is pressed. 
//Circle gets bigger each time a key pressed

let r = 255
let g = 255
let b = 255
let h = 80
let w = 80



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(r,g,b);
  if(w>100){
    background ("blue");

  }
else if (h>100){
  background ("red");
}
else {
  background ("green");
}
  ellipse(50, 50, w, h)



}

//Set Circle to a random color whenever the mouse is pressed

function mousePressed (){
    r = random (255);
    g = random (255);
    b = random (255);
print ("mousePressed");



  }

  //Circle gets bigger each time a key is pressed
function keyPressed (){
h= random (10,200);
w= random(10,200);
print("key is pressed",h);
print ("new width", w);


}








  
  

