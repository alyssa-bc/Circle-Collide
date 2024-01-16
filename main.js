//Circle Collide Challenge (Easier)

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//Global Variables
let mouseX, mouseY;
let randX = Math.random() * 400;
let randY = Math.random() * 400;
let blueRadius = 10;
let orangeRadius = 30;

//Main Program
requestAnimationFrame(loop);

function loop() {
  //Draw Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Draw a circle
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, blueRadius, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(randX, randY, orangeRadius, 0, 2 * Math.PI);
  ctx.fill();

  requestAnimationFrame(loop);
}
//Event Stuff
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;

  let rise = randY - mouseY;
  let run = randX - mouseX;
  let distance = Math.sqrt(rise ** 2 + run ** 2);
  console.log(distance);

  //Colliding code
  if (distance < blueRadius + orangeRadius) {
    randX = Math.random() * 400;
    randY = Math.random() * 400;
    console.log("hit");
  }
}
