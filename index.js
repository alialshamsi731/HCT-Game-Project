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

var ui = new Image();
    ui.src = "images/ui.png";
    var uiX = 20;
    var uiY = 460;
    var uiWidth = 240;
    var uiHeight = 120;




// game static variables
var gameLevel = 1; // Game level (0: Main Menu, 1: Level 1, 2: Level 2, 3: Level 3)
var gameTimer = 0; // Game time in seconds



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
        // Call to draw the goal
        ctx.drawImage(goal,goalX,goalY,goalWidth,goalHeight);

        // Call to draw the control arrow
        ctx.drawImage(leftcontrol,leftcontrolX,leftcontrolY,leftcontrolWidth,leftcontrolHeight);
        ctx.drawImage(rightcontrol,rightcontrolX,rightcontrolY,rightcontrolWidth,rightcontrolHeight);
        ctx.drawImage(upcontrol,upcontrolX,upcontrolY,upcontrolWidth,upcontrolHeight);
        ctx.drawImage(ui,uiX,uiY,uiWidth,uiHeight);
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
    // // Vertical movement with inner bounds check
    // if (ArrowUp) {
    //     if (actorY > 20) { // Prevent moving above the canvas
    //         actorY -= actorSpeed;
    //     }
    // }
    // if (ArrowDown) {
    //     if (actorY + actorHeight < canvas.height - 20) { // Prevent moving below the canvas
    //         actorY += actorSpeed;
    //     }
    // }
    





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
        if (spawnPoints[level]) {
            actorX = spawnPoints[level].x;
            actorY = spawnPoints[level].y;
        }
    }

 
    



    
} // end of handleLogic








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

    // Refresh background if needed
    background.src = `images/Level${gameLevel}.png`;

    console.log("Level reset complete.");
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