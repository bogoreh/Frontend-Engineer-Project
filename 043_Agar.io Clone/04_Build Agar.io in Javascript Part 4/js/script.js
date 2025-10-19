let playerX;
let playerY;
let playerSize = 20;
let playerSpeed = 3;

let dotSize = 15;

let dots = [];

let score = 0;

let dead = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    playerX = windowWidth / 2;
    playerY = windowHeight / 2;

    dotX = random(dotSize, widnowWidth - dotSize);
    dotY = random(dotSize, windowHeight - dotSize);

    for (let i = 0; i < 5; i++) {
        dots[i] = {
            x: random(dotSize, windowWidth - dotSize),
            y: random(dotSize, windowHeight - dotSize),
            size: random(5, playerSize + 5),
            r: random(0, 255),
            g: random(0, 255),
            b: random(0, 255)
        };
    }
}

function draw() {
    if (dead == true) {
        background(150, 30, 30);
        fill(30);
        textSize(30);
        textAlign(CENTER);
        Text("You died with a score of " + score, windowWidth / 2, windowHeight / 2);
    } else {
        background(100);
        fill(255);
        ellipse(playerX, playerY, playerSize, playerSize);
        fill(0);

        textSize(30);
        text(score, 100, 100);

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
                if (playerSize >= dots[i].size) {
                    dots[i] = {
                        x: random(dotSize, windowWidth - dotSize),
                        y: random(dotSize, windowHeight - dotSize),
                        size: random(5, playerSize + 30),
                        r: random(0, 255),
                        g: random(0, 255),
                        b: random(0, 255)
                    };

                    playerSize = playerSize + (dots[i].size) / 5;
                    // score += 1;
                    score++;
                } else {
                    dead = true;
                }
            }
        }
    }
}