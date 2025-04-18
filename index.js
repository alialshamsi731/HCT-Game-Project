//Get canvas and context objects
var canvas = document.getElementById("gc");
var ctx = canvas.getContext("2d");



// Attributes of an Actor 
var actor = new Image();
actor.src = "images/actor.jpg";
var actorHeight = 50;
var actorWidth = 50;
var actorX = 0;
var actorY = 0;
var actorSpeed = 5;





// Function to draw screen
function drawScreen()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Call to draw the actor
    ctx.drawImage(actor,actorX,actorY,actorWidth,actorHeight);

}





// Function to handle animation logic
function handleLogic(){

    // Horizontal movement with inner bounds check
    if (ArrowLeft) {
        if (actorX > 0) {
            actorX -= actorSpeed;
        }
    }
    if (ArrowRight) {
        if (actorX + actorWidth < canvas.width) {
            actorX += actorSpeed;
        }
    }

    // Vertical movement with inner bounds check
    if (ArrowUp) {
        if (actorY > 0) {
            actorY -= actorSpeed;
        }
    }
    if (ArrowDown) {
        if (actorY + actorHeight < canvas.height) {
            actorY += actorSpeed;
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