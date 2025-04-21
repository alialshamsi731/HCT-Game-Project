function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}


// Function to draw the UI
function drawUI(){
    
    ctx.beginPath();
    ctx.font = "16pt monospace"; 
    ctx.strokeStyle = "lightgreen";
    ctx.lineWidth = 4;
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
    
    // Left & Right and Top wall
    drawLine(10,25,canvas.width-10,25,"lightgreen");
    drawLine(10,25,10,470,"lightgreen");
    drawLine(canvas.width-10,25,canvas.width-10,470,"lightgreen");

    drawLine(10,470,canvas.width-10,470,"lightgreen");
    

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
    
    // Left & Right and Top wall
    drawLine(10,25,canvas.width-10,25,"lightgreen");
    drawLine(10,25,10,470,"lightgreen");
    drawLine(canvas.width-10,25,canvas.width-10,470,"lightgreen");

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
    
    // Left & Right and Top wall
    drawLine(10,25,canvas.width-10,25,"lightgreen");
    drawLine(10,25,10,470,"lightgreen");
    drawLine(canvas.width-10,25,canvas.width-10,470,"lightgreen");
}



function drawLine(x1,y1,x2,y2,color)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}