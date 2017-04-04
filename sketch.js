var allMyBubbles = [];
var numOfBubbles =70;
var sizeOfBubbles = 30;

function setup(){
    createCanvas(600,400);
    for(var i = 0; i < numOfBubbles; i++){
    allMyBubbles[i] = new Bubble(random(0,600), random(0,400));
    
    }
}

function draw(){
    background(0,280,300);
   if(keyIsDown(LEFT_ARROW))
    background(0, 24, 224);
     if(keyIsDown(RIGHT_ARROW))
    background(219, 20, 40);
    if(keyIsDown(UP_ARROW))
    background(16, 223, 50);
    if(keyIsDown(DOWN_ARROW))
    background(160, 81, 104);
   for(var i = 0; i < allMyBubbles.length; i++){
    allMyBubbles[i].display();
    allMyBubbles[i].move();
    
   }   
}

function Bubble (x,y){
    this.x = x;
    this.y = y;
    fill(250,150,10);
    this.display = function(){
        stroke(9300);
        rect(this.x, this.y, sizeOfBubbles, sizeOfBubbles);
    }
    this.move = function(){
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
    }
}