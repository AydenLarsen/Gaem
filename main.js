let cnv = document.getElementById("cnv");
cnv.height = 600;
cnv.width = 800;
let ctx = cnv.getContext("2d");
let state = "start";
let mousePressed = false;
let upPressed = false;
let leftPressed = false;
let downPressed = false;
let rightPressed = false;
let randNum = 0;
let attack;
let enemyAttack;
let dmgRoll = 0;
let enemyDmgRoll = 0;
let dmgDealt = 0;
let enemyDmgDealt = 0;
let dmgMult = 1;
let enemyDmgMult = 1;
let enemyattacktext;
let slap = document.createElement("audio");
slap.src = "audio/slap.mp3";
let characterImg = document.createElement("img");
characterImg.src = "img/character.jpg";
let player = {
  x: 50,
  y: 275,
  w: 50,
  h: 50,
  hp: 100,
  moveleft: 0,
  moveright: 0,
  moveup: 0,
  movedown: 0,
};
let entity = {
  hp: 100,
};
let gameoverimg = document.createElement("img");
gameoverimg.src = "img/funny.jpg";
