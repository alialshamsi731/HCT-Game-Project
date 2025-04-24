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