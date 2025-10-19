let playerX;
let playerY;
let playerSize = 20;
let playerSpeed = 3;

let dotX;
let dotY;
let dotSize = 15;

// let firstName = "Rafid"

// let dots = [1, 2, 3];
// let dots = ["Rafid", "John", "Quentin"];

let dots = [];

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

    for (let i = 0; i < 5; i++) {
        dots[i] = {
            x: random(dotSize, windowWidth - dotSize),
            y: random(dotSize, windowHeight - dotSize),
            size: random(5, playerSize + 5)
        };
    }
}

function draw() {
    background(100);
    fill(255);
    ellipse(playerX, playerY, playerSize, playerSize);
    fill(0);
    ellipse(dotX, dotY, dotSize, dotSize);

    for (let i = 0; i < 5; i++) {
        ellipse(dots[i].x, dots[i].y, dots[i].size);
    }

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

    for (let i = 0; i < 5; i++) {
        if (dist(playerX, playerY, dots[i].x, dots[i].y) <= playerSize / 2 + dots[i].size / 2) {
            dots[i] = {
                x: random(dotSize, windowWidth - dotSize),
                y: random(dotSize, windowHeight - dotSize),
                size: random(5, playerSize + 5)
            };

            // playerSize = playerSize + dots[i].size;
            playerSize = playerSize + (dots[i].size) / 5;
        }
    }
}