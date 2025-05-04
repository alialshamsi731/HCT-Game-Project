//Get canvas and context objects
var canvas = document.getElementById("gc");
var ctx = canvas.getContext("2d");



// Attributes of an background
var background = new Image();
var backgroundHeight = canvas.height;
var backgroundWidth = canvas.width;
var backgroundX = 0;
var backgroundY = 0;





// Attributes of an Actor 
var actor = new Image();
actor.src = "images/image.png";
var actorHeight = 27;
var actorWidth = 25;
var actorX = 50;
var actorY = 393;
var actorSpeed = 5; 
// Add gravity and jump variables
var gravity = 0.5; // Gravity force
var jumpStrength = -10; // Jump force
var velocityY = 0; // Vertical velocity
var isJumping = false; // To prevent double jumps
// Define spawn points for each level
var spawnPoints = {
    0: { x: 50, y: 393 }, // Level 0 spawn point
    1: { x: 50, y: 393 }, // Level 1 spawn point
    2: { x: 100, y: 393 }, // Level 2 spawn point
    3: { x: 700, y: 265 }  // Level 3 spawn point
};


// Attributes of an second Actor 
var secondActor = new Image();
secondActor.src = "images/SecondActor.png";
var secondActorHeight = 60;
var secondActorWidth = 60;
var secondActorX = 100;
var secondActorY = 120;
var secondActorMoveRight = false;
var secondActorSpeed = 5;


// Attributes of an crab
var carb = new Image();
carb.src = "images/Crab.png";
var carbHeight = 30;
var carbWidth = 30;
var carbX = 380;
var carbY = 110;
var carbSpeed = 5;
var carbMoveRight = false;


// Attributes of an goal
var goal = new Image();
goal.src = "images/goal.png";
var goalHeight = 50;
var goalWidth = 50;
var goalX = 700;
var goalY = 120;


// darw the Left Arrow Button 
var leftcontrol = new Image();
leftcontrol.src = "images/LeftArrowBatton.png";
var leftcontrolHeight = 100;
var leftcontrolWidth = 100;
var leftcontrolX = 470;
var leftcontrolY = 470;

// draw the Right Arrow Button 
var rightcontrol = new Image();
rightcontrol.src = "images/RightArrowButton.png";
var rightcontrolHeight = 100;
var rightcontrolWidth = 100;
var rightcontrolX = 670;
var rightcontrolY = 470;

// draw the Up Question Mark Button 
var upcontrol = new Image();
upcontrol.src = "images/QuestionMarkButton.png";
var upcontrolHeight = 100;
var upcontrolWidth = 100;
var upcontrolX = 570;
var upcontrolY = 470;

// draw the Up reset Button
var resetcontrol = new Image();
resetcontrol.src = "images/ReloadArrowButton.png";
var resetcontrolHeight = 30;
var resetcontrolWidth = 30;
var resetcontrolX = 590;
var resetcontrolY = 5;

// draw the Up exit Button
var exitcontrol = new Image();
exitcontrol.src = "images/HomeButton.png";
var exitcontrolHeight = 30;
var exitcontrolWidth = 30;
var exitcontrolX = 550;
var exitcontrolY = 5;

// draw the start Button
var startcontrol = new Image();
startcontrol.src = "images/StartButton.png";
var startcontrolHeight = 125;
var startcontrolWidth = 250;
var startcontrolX = canvas.width /2 - startcontrolWidth / 2;
var startcontrolY = 400;

var ui = new Image();
ui.src = "images/ui.png";
var uiX = 20;
var uiY = 460;
var uiWidth = 240;
var uiHeight = 120;


// Attributes of a Life
var life = new Image();
life.src = "images/HeartIcon.png";
var lifeHeight = 25;
var lifeWidth = 25;
var lifeX = 10;
var lifeY = 10;


// Attributes of a jump action
var jump = new Image();
jump.src = "images/JumpActionIcon.png";
var jumpHeight = 25;
var jumpWidth = 25;
var jumpX = 10;
var jumpY = 10;

// game static variables
var gameLevel = 0; // Game level (0: Main Menu, 1: Level 1, 2: Level 2, 3: Level 3)
var gameTimer = 0; // Game time in seconds
var lifeCount = 3; // Number of lives


var jumpCount = 2; // Number of jumps
var boostCount = 0; // Number of boosts

// Function to draw screen
function drawScreen()
{
    
    ctx.clearRect(0,0,canvas.width,canvas.height);  
    

    // call to draw the background
    ctx.drawImage(background,backgroundX,backgroundY,backgroundWidth,backgroundHeight);

    if (gameLevel === 0 ||gameLevel === 1 || gameLevel === 2 || gameLevel === 3) {
        background.src = `images/Level${gameLevel}.png`;
    }
    

    if (!gameLevel == 0){
        // Call to draw the actor
        ctx.drawImage(actor,actorX,actorY,actorWidth,actorHeight);
        if (gameLevel == 1) {
            ctx.drawImage(secondActor,secondActorX,secondActorY,secondActorWidth,secondActorHeight);
        }
        if (gameLevel == 2) {
            ctx.drawImage(carb,carbX,carbY,carbWidth,carbHeight);
        }
        // Call to draw the second actor
        
        // Call to draw the goal
        ctx.drawImage(goal,goalX,goalY,goalWidth,goalHeight);

        // Call to draw the control arrow
        ctx.drawImage(leftcontrol,leftcontrolX,leftcontrolY,leftcontrolWidth,leftcontrolHeight);
        ctx.drawImage(rightcontrol,rightcontrolX,rightcontrolY,rightcontrolWidth,rightcontrolHeight);
        ctx.drawImage(upcontrol,upcontrolX,upcontrolY,upcontrolWidth,upcontrolHeight);
        ctx.drawImage(resetcontrol,resetcontrolX,resetcontrolY,resetcontrolWidth,resetcontrolHeight);
        ctx.drawImage(exitcontrol,exitcontrolX,exitcontrolY,exitcontrolWidth,exitcontrolHeight);
        ctx.drawImage(ui,uiX,uiY,uiWidth,uiHeight);


        if (lifeCount >= 1) {
            ctx.drawImage(life, 25, 55, lifeWidth, lifeHeight);
        }
        if (lifeCount >= 2) {
            ctx.drawImage(life, 55, 55, lifeWidth, lifeHeight);
        }
        if (lifeCount >= 3) {
            ctx.drawImage(life, 85, 55, lifeWidth, lifeHeight);
        }
        
        // Call to draw the jump action
        if (jumpCount >= 1) {
            ctx.drawImage(jump, jumpX, jumpY, jumpWidth, jumpHeight);
        }
        if (jumpCount >= 2) {
            ctx.drawImage(jump, jumpX + 30, jumpY, jumpWidth, jumpHeight);
        }
        if (jumpCount >= 3) {
            ctx.drawImage(jump, jumpX + 60, jumpY, jumpWidth, jumpHeight);
        }

    }else { 
        // Draw the start button
        ctx.drawImage(startcontrol, startcontrolX, startcontrolY, startcontrolWidth, startcontrolHeight);
    }


}






// Function to handle animation logic
function handleLogic(){



    
    // Horizontal movement with inner bounds check
    if (ArrowLeft) {
        if (actorX > 20) {
            actorX -= actorSpeed;
        }
    }
    if (ArrowRight) {
        if (actorX + actorWidth < canvas.width - 20) {
            actorX += actorSpeed;
        }
    }
    
    




    //jump and gravity logic
    if (ArrowUp && !isJumping) {
        isJumping = true;
        velocityY = jumpStrength;
    }
    if (isJumping) {
        actorY += velocityY;
        velocityY += gravity;

        // Check if the actor is on the ground
        if (actorY + actorHeight >= canvas.height - 180) {
            actorY = canvas.height - 180 - actorHeight;
            isJumping = false;
            velocityY = 0;
        }
    }
    
    // Check line collisions and failure
    checkLevelLineInteractions();



  
    if (gameLevel == 0)
    {
        drawMainUI();
    }
    if (gameLevel == 1)
    {   
        drawLevelOne();
        goalX = 700;
        goalY = 120;
       
        jumpCount = 3; // Reset jump count for level 1

        if (jumpCount > 0) {
            // Allow jumping
            if (ArrowUp && !isJumping) {
                isJumping = true;
                velocityY = jumpStrength;
                jumpCount--;
            }
        }else {
            // Prevent jumping if jump count is zero
            isJumping = false;
        }
        
        moveSecondActor();

        // Check if the actor is hit the second actor
        actorHitSecondActor();

        // Check if the actor is inside the goal
        checkActorInsideGoal();
    }
    if (gameLevel == 2)
    {
        drawLevelTwo();
        goalX = 100;
        goalY = 110;
       

        

        // Check if the actor is inside the goal
        checkActorInsideGoal();

    }
    if (gameLevel == 3)
    {
        drawLevelThree();
        goalX = 100;
        goalY = 240;
        
        // Check if the actor is inside the goal
        checkActorInsideGoal();
    }
    

} // end of handleLogic





function checkActorInsideGoal() {
    // Calculate the actor's center point
    var actorCenterX = actorX + actorWidth / 2;
    var actorCenterY = actorY + actorHeight / 2;

    // Check if the actor's center is inside the goal boundaries
    if (
        actorCenterX > goalX && actorCenterX < goalX + goalWidth &&
        actorCenterY > goalY && actorCenterY < goalY + goalHeight
    ) {
        alert("You reached the goal!");
        gameLevel += 1;

        // Reset to main menu if levels are completed
        if (gameLevel >= 4) {
            gameLevel = 0;
        }

        // Spawn actor for the next level
        spawnActor(gameLevel);
        

        // Reset movement keys
        ArrowLeft = false;
        ArrowRight = false;
        ArrowDown = false;
        ArrowUp = false;
    }
}






function spawnActor(level) {
        // Ensure the spawn points are defined for the level
        if (spawnPoints[level]) {
            actorX = spawnPoints[level].x; // Reset actor's X position
            actorY = spawnPoints[level].y; // Reset actor's Y position
            velocityY = 0; // Reset vertical velocity
            isJumping = false; // Reset jumping state
        }
    }






function resettingtGame() {
    console.log("Resetting game...");

    // Reset to level 1
    gameLevel = 1;

    // Reset actor position and velocity
    actorX = spawnPoints[gameLevel].x;
    actorY = spawnPoints[gameLevel].y;
    velocityY = 0;
    isJumping = false;

    // Reset input states
    ArrowLeft = false;
    ArrowRight = false;
    ArrowUp = false;
    ArrowDown = false;
    PressSpase = false;

    // Reset any game timers or progress
    gameTimer = 0;
    lifeCount = 3; // Reset life count
    // Force background image to update
    background.src = "images/Level1.png";

    console.log("Game has been reset.");
}



function resetGame() {
    console.log("Resetting current level...");

    // Keep the current level
    // Just reset actor and game state
    actorX = spawnPoints[gameLevel].x;
    actorY = spawnPoints[gameLevel].y;
    velocityY = 0;
    isJumping = false;

    // Reset input states
    ArrowLeft = false;
    ArrowRight = false;
    ArrowUp = false;
    ArrowDown = false;
    PressSpase = false;

    // Reset timer or level-specific state
    gameTimer = 0;
    lifeCount--;
    if (lifeCount <= 0) {
        alert("Game Over!");
        gameLevel = 0; // Reset to main menu
        lifeCount = 3; // Reset life count
    }
    // Refresh background if needed
    background.src = `images/Level${gameLevel}.png`;

    console.log("Level reset complete.");
}



function actorHitSecondActor() {
    // Check if the actor is inside the second actor's boundaries
    if (
        actorX < secondActorX + secondActorWidth &&
        actorX + actorWidth > secondActorX &&
        actorY < secondActorY + secondActorHeight &&
        actorY + actorHeight > secondActorY
    ) {
        secondActorX = 120; // Reset second actor position
        secondActorY = 120; // Reset second actor position
        // Decrease life count by 1
        lifeCount -= 1;

        
        // Check if life count is greater than zero
        if (lifeCount > 0) {
            // Respawn actor at the current level
            alert(`You were hit! Lives remaining: ${lifeCount}`);
            spawnActor(gameLevel);
        } else {
            // Game over logic
            alert("Game Over!");
            gameLevel = 0; // Reset to main menu
            lifeCount = 3; // Reset life count
            spawnActor(gameLevel); // Reset actor position for main menu
        }
    }
}




function moveSecondActor() {
    if (secondActorMoveRight) {
        secondActorX += secondActorSpeed;
        if (secondActorX + secondActorWidth >= canvas.width - 170) {
            secondActorMoveRight = false;
        }
    } else {
        secondActorX -= secondActorSpeed;
        if (secondActorX <= 170) {
            secondActorMoveRight = true;
        }
    }
}





// Get browser animation frame
var raf = window.requestAnimationFrame;

// Set up frame delay time 
var delay = 20  // 1 sec in 1000ms.

// Function to handle animation loop
function animate()
{
    setTimeout(function()
    {
        // Let the browser handle calling animate
        raf(animate);

        // Draw the screen
        drawScreen();

        // Move the  cirle to the Right
        handleLogic();

        

    }, delay)
}

// Start the animate 
animate();




// Add an event handler for key presses
window.addEventListener("keydown",handleKeyDown);
// Add an event handler for key releases
window.addEventListener("keyup",handleKeyUp);

var ArrowLeft = false;
var ArrowRight = false;
var ArrowUp = false;
var ArrowDown = false;
var PressSpase = false;

function handleKeyUp(e)
{
    var code = e.keyCode;

    if(code == 37)
    {
        ArrowLeft = false;
    }
    else if (code == 39)
    {
        ArrowRight = false;
    }
    else if (code == 38)
    {
        ArrowUp = false;
    }
    else if (code == 40)
    {
        ArrowDown = false;
    }
    if (code == 32) { // Space key
        if (gameLevel == 0) {
            resettingtGame(); // Call the reset function
            
        }
    }
    else if (code == 27) { // Escape key
        if (gameLevel != 0) {
            gameLevel = 0;
            spawnActor(gameLevel); // Reset actor position for main menu if needed
        }
    }
    else if (code == 82) { // R key
        resetGame(); // Call the reset function
    }
}

function handleKeyDown(e)
{
    var code = e.keyCode;

    if(code == 37)
    {
        ArrowLeft = true;
    }
    else if (code == 39)
    {
        ArrowRight = true;
    }
    else if (code == 38)
    {
        ArrowUp = true;
    }
    else if (code == 40)
    {
        ArrowDown = true;
    }
    
}







// Add touch event listeners for both touchstart and touchend
window.addEventListener("touchstart", handleTouchStart, false);
window.addEventListener("touchend", handleTouchEnd, false);

// Function to handle touch start event
function handleTouchStart(touchEvent) {
    // Get canvas rectangle object
    var canvasRectangle = canvas.getBoundingClientRect();

    // Retrieve the distance between the top and the left corners
    // of the canvas relative to the browser window
    var canvasTop = canvasRectangle.top;
    var canvasLeft = canvasRectangle.left;

    // Get distances from top and left of the  
    // browser windows where the touch happened
    var touchX = touchEvent.changedTouches[0].clientX;
    var touchY = touchEvent.changedTouches[0].clientY;

    // Get touch x and y relative to our reference the canvas
    var tX = touchX - canvasLeft;
    var tY = touchY - canvasTop;

    // Check if the touch is inside the left or right control buttons
    if (ClickLeftArrowButton(tX, tY)) {
        ArrowLeft = true;
    }
    if (ClickRightArrowButton(tX, tY)) {
        ArrowRight = true;
    }
    if (ClickQuestionMarkButton(tX, tY)) {
        ArrowUp = true;
    }
    if (ClickReloadArrowButton(tX, tY)) {
        resetGame();
        
    }
    if (ClickHomeButton(tX, tY)) {
        gameLevel = 0;
        spawnActor(gameLevel); // Reset actor position for main menu if needed
    }
    if (ClickStartButton(tX, tY)) {
        resettingtGame(); // Call the reset function
    }
}

// Function to handle touch end event
function handleTouchEnd() {
    // Stop movement when the touch ends
    ArrowLeft = false;
    ArrowRight = false;
    ArrowUp = false;
}

// Function to check if the touch is inside the left arrow button
function ClickLeftArrowButton(x, y) {
    var insideX = x >= leftcontrolX && x <= (leftcontrolX + leftcontrolWidth);
    var insideY = y >= leftcontrolY && y <= (leftcontrolY + leftcontrolHeight);
    return insideX && insideY;
}

// Function to check if the touch is inside the right arrow button
function ClickRightArrowButton(x, y) {
    var insideX = x >= rightcontrolX && x <= (rightcontrolX + rightcontrolWidth);
    var insideY = y >= rightcontrolY && y <= (rightcontrolY + rightcontrolHeight);
    return insideX && insideY;
}

function ClickQuestionMarkButton(x, y) {
    var insideX = x >= upcontrolX && x <= (upcontrolX + upcontrolWidth);
    var insideY = y >= upcontrolY && y <= (upcontrolY + upcontrolHeight);
    return insideX && insideY;
}

function ClickReloadArrowButton(x, y) {
    var insideX = x >= resetcontrolX && x <= (resetcontrolX + resetcontrolWidth);
    var insideY = y >= resetcontrolY && y <= (resetcontrolY + resetcontrolHeight);
    return insideX && insideY;
}
function ClickHomeButton(x, y) {
    var insideX = x >= exitcontrolX && x <= (exitcontrolX + exitcontrolWidth);
    var insideY = y >= exitcontrolY && y <= (exitcontrolY + exitcontrolHeight);
    return insideX && insideY;
}

function ClickStartButton(x, y) {
    var insideX = x >= startcontrolX && x <= (startcontrolX + startcontrolWidth);
    var insideY = y >= startcontrolY && y <= (startcontrolY + startcontrolHeight);
    return insideX && insideY;
}