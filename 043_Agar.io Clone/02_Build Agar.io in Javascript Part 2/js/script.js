let playerX;
let playerY;
let playerSize = 20;
let playerSpeed = 3;

let dotX;
let dotY;
let dotSize = 15;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    playerX = windowWidth / 2;
    playerY = windowHeight / 2;

    // dotX = 7;
    // dotY = 7;

    /*
    dotX = windowWidth - dotSize;
    dotY = windowHeight - dotSize;
    */

    dotX = random(dotSize, widnowWidth - dotSize);
    dotY = random(dotSize, windowHeight - dotSize);
}

function draw() {
    background(100);
    fill(255);
    ellipse(playerX, playerY, playerSize, playerSize);
    fill(0);
    ellipse(dotX, dotY, dotSize, dotSize);

    if (keyIsDown(LEFT_ARROW)) {
        playerX = playerX - playerSpeed;
    } else if (keyIsDown(RIGHT_ARROW)) {
        playerX = playerX + playerSpeed;
    }
    if (keyIsDown(UP_ARROW)) {
        playerY = playerY - playerSpeed;
    } else if (keyIsDown(DOWN_ARROW)) {
        playerY = playerY + playerSpeed;
    }

    if (dist(PlayerX, PlayerY, dotX, dotY) <= playerSize / 2 + dotSize / 2) {
        dotX = random(dotSize, windowWidth - dotSize);
        dotY = random(dotSize, windowHeight - dotSize);

        playerSize = playerSize + 2;
    }
}