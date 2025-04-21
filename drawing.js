function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}


// Function to draw the UI
function drawUI(){
    
    ctx.beginPath();
    ctx.font = "16pt monospace"; 
    ctx.strokeStyle = "lightgreen";
    ctx.lineWidth = 5;
    ctx.strokeRect(10,canvas.height-110, canvas.width-20,100);
    

    ctx.beginPath();
    ctx.font = "13pt Arial";
    ctx.fillStyle  = "white";   
    ctx.fillText("Move   :   Left / Right Arrows",20,canvas.height-90);
    ctx.fillText("Action  :  Up Arrow",20,canvas.height-55);
    ctx.fillText("Reset  :   Press (R) Key ",20,canvas.height-20);

    
}



// Function to draw the game level 1
function drawLevelOne()
{
    // write the level information UI
    ctx.beginPath();
    ctx.font = "13pt Arial";
    ctx.fillText("<-- Actions",100,20);
    ctx.fillText("Timer : " +gameTimer,canvas.width/2,20);
    ctx.fillText("Level : 01",canvas.width-100,20);
    
    // Left & Right & Top and Bottom wall
    drawRectangleOutline(10,25,canvas.width-20,canvas.height-155,"lightgreen");

}

// Function to draw the game level 2
function drawLevelTwo()
{
    // write the level information UI
    ctx.beginPath();
    ctx.font = "13pt Arial";
    ctx.fillText("<-- Actions",100,20);
    ctx.fillText("Timer : " +gameTimer,canvas.width/2,20);
    ctx.fillText("Level : 02",canvas.width-100,20);
    
    // Left & Right & Top and Bottom wall
    drawRectangleOutline(10,25,canvas.width-20,canvas.height-155,"lightgreen");
    

}

// Function to draw the game level 3
function drawLevelThree()
{
    // write the level information UI
    ctx.beginPath();
    ctx.font = "13pt Arial";
    ctx.fillText("<-- Actions",100,20);
    ctx.fillText("Timer : " +gameTimer,canvas.width/2,20);
    ctx.fillText("Level : 03",canvas.width-100,20);
    
    // Left & Right & Top and Bottom wall
    drawRectangleOutline(10,25,canvas.width-20,canvas.height-155,"lightgreen");
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