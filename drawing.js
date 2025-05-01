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
    
    // ctx.fillText("Move   :   Left / Right Arrows",25,canvas.height-120);
    // ctx.fillText("Action  :  Up Arrow",25,canvas.height-90);
    // ctx.fillText("Reset  :   Press (R) Key ",25,canvas.height-60);
    // ctx.fillText("Exit  :   Press (Esc) Key ",25,canvas.height-30);

    
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





// Lines per level (x1, y1, x2, y2, isDanger)
const levelLines = {
    1: [
        { x1: 220, y1: 430, x2: 220, y2: 340, danger: false },
        { x1: 220, y1: 340, x2: 310, y2: 340, danger: false },
        { x1: 310, y1: 340, x2: 310, y2: 410, danger: false },
        { x1: 310, y1: 410, x2: 400, y2: 410, danger: true },  // danger
        { x1: 400, y1: 410, x2: 400, y2: 260, danger: false },
        { x1: 400, y1: 260, x2: 530, y2: 260, danger: false },
        { x1: 530, y1: 260, x2: 530, y2: 410, danger: false },
        { x1: 530, y1: 410, x2: 620, y2: 410, danger: true },   // danger
        { x1: 620, y1: 410, x2: 620, y2: 170, danger: false },
        { x1: 620, y1: 170, x2: 780, y2: 170, danger: false }
    ],
    2: [
        { x1: 290, y1: 430, x2: 290, y2: 330, danger: false },
        { x1: 290, y1: 330, x2: 360, y2: 330, danger: false },
        { x1: 360, y1: 330, x2: 360, y2: 410, danger: false },
        { x1: 360, y1: 410, x2: 470, y2: 410, danger: true },   // danger
        { x1: 470, y1: 410, x2: 470, y2: 330, danger: false },
        { x1: 470, y1: 330, x2: 530, y2: 330, danger: false },
        { x1: 530, y1: 330, x2: 530, y2: 230, danger: false },
        { x1: 530, y1: 230, x2: 630, y2: 230, danger: false },
        { x1: 630, y1: 230, x2: 630, y2: 290, danger: false },
        { x1: 630, y1: 290, x2: 780, y2: 290, danger: true },   // danger
        { x1: 360, y1: 160, x2: 440, y2: 160, danger: false },
        { x1: 60, y1: 160, x2: 200, y2: 160, danger: false }
    ],
    3: [
        { x1: 20, y1: 210, x2: 200, y2: 210, danger: false },
        { x1: 20, y1: 290, x2: 200, y2: 290, danger: false },
        { x1: 200, y1: 200, x2: 350, y2: 200, danger: true },   // danger
        { x1: 200, y1: 300, x2: 350, y2: 300, danger: true },   // danger
        { x1: 350, y1: 210, x2: 450, y2: 210, danger: false },
        { x1: 350, y1: 290, x2: 450, y2: 290, danger: false },
        { x1: 450, y1: 200, x2: 600, y2: 200, danger: true },   // danger
        { x1: 450, y1: 300, x2: 600, y2: 300, danger: true },   // danger
        { x1: 600, y1: 210, x2: 780, y2: 210, danger: false },
        { x1: 600, y1: 290, x2: 780, y2: 290, danger: false }
    ]
};




function checkLevelLineInteractions() {
    let lines = levelLines[gameLevel];
    if (!lines) return;

    let onGround = false;

    for (let line of lines) {
        // --- Horizontal lines (platforms or danger zones) ---
        if (line.y1 === line.y2) {
            if (
                actorY + actorHeight <= line.y1 + 3 &&
                actorY + actorHeight + velocityY >= line.y1 &&
                actorX + actorWidth > Math.min(line.x1, line.x2) &&
                actorX < Math.max(line.x1, line.x2)
            ) {
                if (line.danger) {
                    alert("You failed! Touched danger zone.");
                    resetGame();
                    return;
                } else {
                    actorY = line.y1 - actorHeight;
                    velocityY = 0;
                    isJumping = false;
                    onGround = true;
                }
            }
        }

        // --- Vertical lines (walls) ---
        if (line.x1 === line.x2) {
            const wallX = line.x1;
            const wallTop = Math.min(line.y1, line.y2);
            const wallBottom = Math.max(line.y1, line.y2);

            if (
                actorY + actorHeight > wallTop &&
                actorY < wallBottom
            ) {
                // Moving into wall from the left (right movement)
                if (
                    ArrowRight &&
                    actorX + actorWidth > wallX &&
                    actorX < wallX
                ) {
                    actorX = wallX - actorWidth;
                }

                // Moving into wall from the right (left movement)
                if (
                    ArrowLeft &&
                    actorX < wallX &&
                    actorX + actorWidth > wallX
                ) {
                    actorX = wallX;
                }
            }
        }
    }

    // If actor is not on any solid surface and not on the floor
    if (!onGround && actorY + actorHeight < canvas.height - 180) {
        isJumping = true;
    }
}