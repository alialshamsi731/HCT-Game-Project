// Attributes of an Left Arrow Button
var leftArrow = new Image();
leftArrow.src = "images/LeftArrowButton.png";
var leftArrowHeight = 100;
var leftArrowWidth = 100;
var leftArrowX = 200;
var leftArrowY = 200;

// Attributes of an Right Arrow Button
var rightArrow = new Image();
rightArrow.src = "images/RightArrowButton.png";
var rightArrowHeight = 100;
var rightArrowWidth = 100;
var rightArrowX = 300;
var rightArrowY = 300;

// Attributes of an Up Arrow Button
var upArrow = new Image();
upArrow.src = "images/UpArrowButton.png";
var upArrowHeight = 100;
var upArrowWidth = 100;
var upArrowX = 400;
var upArrowY = 400;

// Attributes of an Reload Arrow Button
var reloadArrow = new Image();
reloadArrow.src = "images/ReloadButton.png";
var reloadArrowHeight = 100;
var reloadArrowWidth = 100;
var reloadArrowX = 500;
var reloadArrowY = 500;




function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}


// Function to draw the UI
function drawMainUI(){

    background.src = "images/MainMenu.png";
    
    ctx.beginPath();
    ctx.font = "24pt Trattatello";
    ctx.fillStyle = "Black";
    ctx.fillText("Press (Enter) to Start",canvas.width/2-125,canvas.height-150);
    
}



// Function to draw the game level 1
function drawLevelOne()
{
    // Draw the background
    background.src = "images/Level1.png";
    // write the level information UI
    ctx.beginPath();
    ctx.font = "15pt Trattatello";
    ctx.fillStyle = "Black";
    ctx.fillText("<-- Actions",130,25);
    ctx.fillText("Timer : " +gameTimer,canvas.width/2,25);
    ctx.fillText("Level : 01",canvas.width-100,25);
    
    ctx.fillText("Move   :   Left / Right Arrows",25,canvas.height-120);
    ctx.fillText("Action  :  Up Arrow",25,canvas.height-90);
    ctx.fillText("Reset  :   Press (R) Key ",25,canvas.height-60);
    ctx.fillText("Exit  :   Press (Esc) Key ",25,canvas.height-30);

    

    gameTimer = 10;


    drawRectangleOutline(220,340,90,90,"black");
    drawRectangleOutline(310,410,90,20,"red");
    drawRectangleOutline(400,260,130,170,"black");
    drawRectangleOutline(530,410,90,20,"red");
    drawRectangleOutline(620,170,160,260,"black");
    

}




// Function to draw the game level 2
function drawLevelTwo()
{
    // Draw the background
    background.src = "images/Level2.png";
    // write the level information UI
    ctx.beginPath();
    ctx.font = "15pt Trattatello";
    ctx.fillStyle = "Black";
    ctx.fillText("<-- Actions",130,25);
    ctx.fillText("Timer : " +gameTimer,canvas.width/2,25);
    ctx.fillText("Level : 02",canvas.width-100,25);
    
    ctx.fillText("Move   :   Left / Right Arrows",25,canvas.height-120);
    ctx.fillText("Action  :  Up Arrow",25,canvas.height-90);
    ctx.fillText("Reset  :   Press (R) Key ",25,canvas.height-60);
    ctx.fillText("Exit  :   Press (Esc) Key ",25,canvas.height-30);


    gameTimer = 10;

    drawRectangleOutline(290,330,70,100,"black");
    drawRectangleOutline(360,410,110,20,"red");
    drawRectangleOutline(470,330,70,100,"black");
    drawRectangleOutline(530,230,100,110,"black");
    drawRectangleOutline(630,290,150,20,"red");
    
    drawRectangleOutline(360,160,80,30,"black");
    drawRectangleOutline(60,160,140,30,"black");
}






// Function to draw the game level 3
function drawLevelThree()
{
    // Draw the background
    background.src = "images/Level3.png";
    // write the level information UI
    ctx.beginPath();
    ctx.font = "15pt Trattatello";
    ctx.fillStyle = "Black";
    ctx.fillText("<-- Actions",130,25);
    ctx.fillText("Timer : " +gameTimer,canvas.width/2,25);
    ctx.fillText("Level : 03",canvas.width-100,25);
    
    ctx.fillText("Move   :   Left / Right Arrows",25,canvas.height-120);
    ctx.fillText("Action  :  Up Arrow",25,canvas.height-90);
    ctx.fillText("Reset  :   Press (R) Key ",25,canvas.height-60);
    ctx.fillText("Exit  :   Press (Esc) Key ",25,canvas.height-30);
    

    gameTimer = 10;

    drawRectangleOutline(20,180,180,30,"black");
    drawRectangleOutline(20,290,180,30,"black");
    drawRectangleOutline(200,180,150,20,"red");
    drawRectangleOutline(200,300,150,20,"red");
    drawRectangleOutline(350,180,100,30,"black");
    drawRectangleOutline(350,290,100,30,"black");
    drawRectangleOutline(450,180,150,20,"red");
    drawRectangleOutline(450,300,150,20,"red");
    drawRectangleOutline(600,180,180,30,"black");
    drawRectangleOutline(600,290,180,30,"black");

}







function drawLine(x1,y1,x2,y2,color)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}
function drawRectangle(x,y,width,height,color)
{
    ctx.fillStyle = color;
    ctx.fillRect(x,y,width,height);
}
function drawRectangleOutline(x,y,width,height,color)
{
    ctx.strokeStyle = color;
    ctx.strokeRect(x,y,width,height);
}
function drawCircle(x,y,radius,color)
{
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
}