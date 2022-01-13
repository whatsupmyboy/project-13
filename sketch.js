var ball = {
  color:["red","green","blue"],
x:20,
y:40,
radias: 40,
xspeed:0,
yspeed:0

}




function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
circle(ball.x,ball.y,ball.radias)
fill(ball.color[2])
ball.xspeed= 10
ball.x= ball.x+ ball.xspeed





}





