window.addEventListener("load", draw);

document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
  mousePressed = true;

  if (state === "start") {
    state = "house";
  } else if (state === "info1") {
    state = "enemyroom2";
  }
}

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(event) {
  if (!event.repeat) {
    if (event.keyCode === 87) {
      upPressed = true;
    } else if (event.keyCode === 65) {
      leftPressed = true;
    } else if (event.keyCode === 83) {
      downPressed = true;
    } else if (event.keyCode === 68) {
      rightPressed = true;
    }
  }

  collisions();
  housecollisions();
}

function keyUp(event) {
  if (!event.repeat) {
    if (event.keyCode === 87) {
      upPressed = false;
    } else if (event.keyCode === 65) {
      leftPressed = false;
    } else if (event.keyCode === 83) {
      downPressed = false;
    } else if (event.keyCode === 68) {
      rightPressed = false;
    }
  }
}

function mouseupHandler() {
  mousePressed = false;
}

function draw() {
  if (upPressed) {
    player.y -= player.moveup;
  } else if (downPressed) {
    player.y += player.movedown;
  }
  if (rightPressed) {
    player.x += player.moveright;
  } else if (leftPressed) {
    player.x -= player.moveleft;
  }

  if (state === "start") {
    start();
  } else if (state === "house") {
    house();
  } else if (state === "enemyroom") {
    enemyroom();
  } else if (state === "enemyroom2") {
    enemyroom2();
  } else if (state === "enemy") {
    enemy();
  } else if (state === "enemy2") {
    enemy2();
  } else if (state === "info1") {
    info1();
  } else if (state === "attackused1") {
    attackused1();
  } else if (state === "attackused2") {
    attackused2();
  } else if (state === "enemyattackused1") {
    enemyattackused1();
  } else if (state === "enemyattackused2") {
    enemyattackused2();
  } else if (state === "win") {
    win();
  } else if (state === "gameover") {
    gameover();
  }
  requestAnimationFrame(draw);
}

function collisions() {
  if (player.x < 1 && player.y > 249 && player.y + player.h < 351) {
    player.moveleft = 0;
  } else if (player.x > 1 && player.y > 249 && player.y + player.h < 351) {
    player.moveleft = 5;
  } else if (player.x < 51 && player.y > 49 && player.y < 250) {
    player.moveleft = 0;
  } else if (player.x > 51 && player.y > 49 && player.y < 250) {
    player.moveleft = 5;
  } else if (
    player.x < 51 &&
    player.y + player.h > 349 &&
    player.y + player.h < cnv.width - 50
  ) {
    player.moveleft = 0;
  } else if (
    player.x > 51 &&
    player.y + player.h > 349 &&
    player.y + player.h < cnv.width - 50
  ) {
    player.moveleft = 5;
  }

  if (player.x < 50 && player.y < 251) {
    player.moveup = 0;
  } else if (player.x < 50 && player.y > 250) {
    player.moveup = 5;
  } else if (player.x >= 50 && player.y > 50) {
    player.moveup = 5;
  } else if (player.x > 49 && player.x + player.w < 751 && player.y < 51) {
    player.moveup = 0;
  }

  if (
    player.x + player.w > 749 &&
    player.y >= 50 &&
    player.y + player.h <= cnv.width - 50
  ) {
    player.moveright = 0;
  } else if (
    player.x + player.w < 749 &&
    player.y > 49 &&
    player.y + player.h <= cnv.width - 50
  ) {
    player.moveright = 5;
  }

  if (player.x < 50 && player.y + player.h > 349) {
    player.movedown = 0;
  } else if (player.x < 50 && player.y < 350) {
    player.movedown = 5;
  } else if (player.x > 49 && player.y + player.h < 550) {
    player.movedown = 5;
  } else if (
    player.x > 49 &&
    player.x + player.w < 751 &&
    player.y + player.h > 549
  ) {
    player.movedown = 0;
  }
}

function housecollisions() {
  if (player.x < 51) {
    player.moveleft = 0;
  } else if (player.x > 51) {
    player.moveleft = 5;
  }

  if (player.x + player.w > 750 && player.y < 251) {
    player.moveup = 0;
  } else if (player.x + player.w > 750 && player.y > 250) {
    player.moveup = 5;
  } else if (player.x + player.w < 751 && player.y > 51) {
    player.moveup = 5;
  } else if (player.x + player.w < 751 && player.y < 51) {
    player.moveup = 0;
  }

  if (
    player.x + player.w > 799 &&
    player.y > 249 &&
    player.y + player.h < 351
  ) {
    player.moveright = 0;
  } else if (
    player.x + player.w < 799 &&
    player.y > 249 &&
    player.y + player.h < 351
  ) {
    player.moveright = 5;
  } else if (player.x + player.w > 749 && player.y > 49 && player.y < 250) {
    player.moveright = 0;
  } else if (player.x + player.w < 750 && player.y > 49 && player.y < 250) {
    player.moveright = 5;
  } else if (
    player.x + player.w > 749 &&
    player.y > 49 &&
    player.y + player.h > 349
  ) {
    player.moveright = 0;
  } else if (player.x + player.w < 750 && player.y > 49 && player.y < 250) {
    player.moveright = 5;
  }

  if (player.x + player.w > 750 && player.y + player.h > 349) {
    player.movedown = 0;
  } else if (player.x + player.w > 750 && player.y < 350) {
    player.movedown = 5;
  } else if (
    player.x > 49 &&
    player.x + player.w < 751 &&
    player.y + player.h > 549
  ) {
    player.movedown = 0;
  } else if (player.x + player.w < 751 && player.y + player.h < 550) {
    player.movedown = 5;
  }
}
