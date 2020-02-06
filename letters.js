function setup() {
  createCanvas(600, 400);
}

function printA(x, y) {
  line(x, y, x-20, y + 50);
  line(x, y, x+20, y + 50);
  line(x-15, y+25, x +15, y + 25);
}

function printB(x,y){
  line(x,y,x,y+50)
  line(x,y,x+25,y)
  line(x+25,y,x+25,y+50)
  line(x,y+25,x+25,y+25)
  line(x,y+50,x+25,y+50)
}    

function printC(x,y){
  line(x,y,x,y+50)
  line(x,y,x+25,y)
  line(x,y+50,x+25,y+50)
}
function printD(x,y){
  line(x,y,x,y+50)
  line(x,y,x+30,y)
  line(x+30,y,x+30,y+50)
  line(x,y+50,x+30,y+50)
}

function printE(x,y){
  line(x,y,x,y+50)
  line(x,y,x+30,y)
  line(x,y+25,x+25,y+25)
  line(x,y+50,x+30,y+50)
}

function printF(x,y){
  line(x,y,x,y+50)
  line(x,y,x+30,y)
  line(x,y+25,x+23,y+25)
}

function printG(x,y){
  line(x,y,x+30,y)
  line(x,y,x,y+50)
  line(x,y+50,x+30,y+50)
  line(x+10,y+25,x+30,y+25)
  line(x+30,y+25,x+30,y+60)
}

function printH(x,y){
  line(x,y,x,y+50)
  line(x,y+25,x+25,y+25)
  line(x+25,y,x+25,y+50)
}
function printI(x,y){
  line(x,y,x+30,y)
  line(x+15,y,x+15,y+50)
  line(x-5,y+50,x+35,y+50)
}

function printJ(x,y){
  line(x,y,x+30,y)
  line(x+15,y,x+15,y+50)
  line(x+15,y+50,x-5,y+50)
  line(x-5,y+50,x-5,y+40)
}
function printK(x,y){
  line(x,y,x,y+50)
  line(x,y+25,x+25,y)
  line(x,y+25,x+25,y+50)
}
function printL(x,y){
  line(x,y,x,y+50)
  line(x,y+50,x+25,y+50)
}
function printM(x,y){
  line(x,y,x,y+50)
  line(x,y,x+25,y+25)
  line(x+25,y+25,x+50,y)
  line(x+50,y,x+50,y+50)
}

function printN(x,y){
  line(x,y,x,y+50)
  line(x,y,x+30,y+50)
  line(x+30,y+50,x+30,y)
}
 function printO(x,y){
   line(x,y,x,y+50)
   line(x,y,x+30,y)
   line(x+30,y,x+30,y+50)
   line(x+30,y+50,x,y+50)
 }
function printP(x,y){
  line(x,y,x,y+50)
  line(x,y,x+30,y)
  line(x+30,y,x+30,y+20)
  line(x,y+20,x+30,y+20)
}
function printQ(x,y){
  line(x,y,x,y+50)
  line(x,y,x+30,y)
  line(x+30,y,x+30,y+50)
  line(x+30,y+50,x,y+50)
  line(x+15,y+25,x+35,y+55)
}
function printR(x,y){
  line(x,y,x,y+50)
  line(x,y,x+30,y)
  line(x+30,y,x+30,y+20)
  line(x,y+20,x+30,y+20)
  line(x,y+20,x+35,y+50)
}

function printS(x,y){
  line(x,y,x+25,y)
  line(x,y,x,y+25)
  line(x,y+25,x+25,y+25)
  line(x+25,y+25,x+25,y+50)
  line(x+25,y+50,x,y+50) 
}

 function printT(x,y){
   line(x,y,x+40,y)
   line(x+20,y,x+20,y+50)  
 }
function printU(x,y){
  line(x,y,x,y+50)
  line(x,y+50,x+30,y+50)
  line(x+30,y+50,x+30,y)
}

function printV(x,y){
  line(x,y,x+20,y+50)
  line(x+20,y+50,x+40,y)
}

function printW(x,y){
  line(x,y,x+15,y+50)
  line(x+15,y+50,x+25,y+10)
  line(x+25,y+10,x+40,y+50)
  line(x+40,y+50,x+50,y)
}

function printX(x,y){
  line(x,y,x+25,y+50)
  line(x+30,y,x,y+50)
}

function printY(x,y){
  line(x,y,x+15,y+25)
  line(x+30,y,x+15,y+25)
  line(x+15,y+25,x+15,y+50)
}

function printZ(x,y){
  line(x,y,x+35,y)
  line(x+35,y,x,y+50)
  line(x,y+50,x+35,y+50)
}

function draw(){
  background(200);
  printA(80, 20);
  printB(100,20);
  printC(130,20);
  printD(160,20);
  printE(200,20);
  printF(240,20);
  printG(280,20);
  printH(320,20);
  printI(360,20);
  printJ(410,20);
  printK(450,20);
  printL(480,20);
  printM(520,20);
  printN(80,80);
  printO(120,80);
  printP(160,80);
  printQ(200,80);
  printR(240,80);
  printS(280,80);
  printT(310,80);
  printU(360,80);
  printV(400,80);
  printW(450,80);
  printX(520,80);
  printY(80,150);
  printZ(120,150);
}
