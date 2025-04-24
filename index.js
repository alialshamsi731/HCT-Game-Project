//Get canvas and context objects
var canvas = document.getElementById("gc");
var ctx = canvas.getContext("2d");



// Attributes of an Actor 
var actor = new Image();
actor.src = "images/image.png";
var actorHeight = 27;
var actorWidth = 25;
var actorX = 50;
var actorY = 393;
var actorSpeed = 5; // Speed of the actor
// Add gravity and jump variables
var gravity = 0.5; // Gravity force
var jumpStrength = -10; // Jump force
var velocityY = 0; // Vertical velocity
var isJumping = false; // To prevent double jumps
// Define spawn points for each level
var spawnPoints = {
    1: { x: 50, y: 393 }, // Level 1 spawn point
    2: { x: 100, y: 393 }, // Level 2 spawn point
    3: { x: 700, y: 265 }  // Level 3 spawn point
};


// Attributes of an background
var background = new Image();
background.src = "images/Level1.png";
var backgroundHeight = canvas.height;
var backgroundWidth = canvas.width;
var backgroundX = 0;
var backgroundY = 0;

// Attributes of an goal
var goal = new Image();
goal.src = "images/goal.png";
var goalHeight = 50;
var goalWidth = 50;
var goalX = 700;
var goalY = 120;

// game static variables

var gameLevel = 1; // Game level (0: Main Menu, 1: Level 1, 2: Level 2, 3: Level 3)
var gameTimer = 0; // Game time in seconds



// Function to draw screen
function drawScreen()
{
    
    ctx.clearRect(0,0,canvas.width,canvas.height);  
    

    // call to draw the background
    ctx.drawImage(background,backgroundX,backgroundY,backgroundWidth,backgroundHeight);

    if (!gameLevel == 0){
    // Call to draw the actor
    ctx.drawImage(actor,actorX,actorY,actorWidth,actorHeight);
    // Call to draw the goal
    ctx.drawImage(goal,goalX,goalY,goalWidth,goalHeight);
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




    if (PressSpase) {
        if (gameLevel == 0) {
            gameLevel = 1;
            spawnActor(gameLevel); // Spawn actor for level 1
        }
    }


 


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
    







// Function to check if the actor is inside the goal
function checkActorInsideGoal() {
    if (actorX < goalX + goalWidth && actorX + actorWidth > goalX &&
        actorY < goalY + goalHeight &&
        actorY + actorHeight > goalY
    ) {
        alert("You reached the goal!");
        gameLevel += 1;
        
        ArrowLeft = false;
        ArrowRight = false;
        
    }
}
}








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
    else if (code == 32)
    {
        if (gameLevel == 0) {
            gameLevel = 1;
            
        }
    }
    else if (code == 27)
        {
            if (!gameLevel == 0) {
                gameLevel = 0;
                
            }
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