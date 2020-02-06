function setup() {
  createCanvas(800, 800);
}

function printC(x,y){
  line(x,y,x,y+50)
  line(x,y,x+25,y)
  line(x,y+50,x+25,y+50)
}

function printE(x,y){
  line(x,y,x,y+50)
  line(x,y,x+30,y)
  line(x,y+25,x+25,y+25)
  line(x,y+50,x+30,y+50)
}

function printI(x,y){
  line(x,y,x+30,y)
  line(x+15,y,x+15,y+50)
  line(x-5,y+50,x+35,y+50)
}

function printL(x,y){
  line(x,y,x,y+50)
  line(x,y+50,x+25,y+50)
}

function printA(x, y) {
  line(x, y, x-20, y + 50);
  line(x, y, x+20, y + 50);
  line(x-10, y+25, x +10, y + 25);
}

function draw() {
  background(255);
  printC(80,20);
  printE(120,20);
  printC(160,20);
  printI(200,20);
  printL(250,20);
  printI(290,20);
  printA(350,20);
}
