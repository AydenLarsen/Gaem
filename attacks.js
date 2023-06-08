cnv.addEventListener("click", cnvClicked);

function cnvClicked(event) {
  let cnvRect = cnv.getBoundingClientRect();

  let mouseX = event.clientX - cnvRect.left;
  let mouseY = event.clientY - cnvRect.top;

  randNum = Math.random();

  if (enemyDmgRoll <= 0.2) {
    enemyDmgMult = 0.8;
  } else if (enemyDmgRoll <= 0.4) {
    enemyDmgMult = 0.9;
  } else if (enemyDmgRoll <= 0.6) {
    enemyDmgMult = 1;
  } else if (enemyDmgRoll <= 0.8) {
    enemyDmgMult = 1.1;
  } else {
    enemyDmgMult = 1.2;
  }

  if (state === "enemy") {
    if (mouseX > 0 && mouseX < 200 && mouseY > 0 && mouseY < 100) {
      console.log("Click Worked");

      attack = "Slap";

      slap.currentTime = 0;
      slap.play();

      setTimeout(() => {
        slap.pause();
      }, 1000);

      dmgRoll = Math.random();
      enemyDmgRoll = Math.random();

      if (dmgRoll < 0.2) {
        dmgDealt = 8;
      } else if (dmgRoll > 0.2 && dmgRoll < 0.4) {
        dmgDealt = 9;
      } else if (dmgRoll > 0.4 && dmgRoll < 0.6) {
        dmgDealt = 10;
      } else if (dmgRoll > 0.6 && dmgRoll < 0.8) {
        dmgDealt = 11;
      } else if (dmgRoll > 0.8) {
        dmgDealt = 12;
      }
      entity.hp -= dmgDealt;
      if (randNum <= 0.25) {
        enemyDmgDealt = Math.round(10 * enemyDmgMult);

        enemyAttack = "Slap";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      } else if (randNum >= 0.25 && randNum <= 0.5) {
        enemyDmgDealt = Math.round(7 * enemyDmgMult);

        enemyAttack = "Squeeze";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      } else if (randNum >= 0.5 && randNum <= 0.75) {
        enemyAttack = "Eat Food";

        enemyattacktext = `Red used ${enemyAttack}! It healed 3 health!`;

        setTimeout(() => {
          entity.hp += 3;
        }, 1000);
      } else {
        enemyDmgDealt = Math.round(4 * enemyDmgMult);

        enemyAttack = "Poke";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      }

      state = "attackused1";

      randNum = Math.random();

      if (entity.hp > 0) {
        setTimeout(() => {
          state = "enemyattackused1";
        }, 1000);
      } else if (entity.hp <= 0) {
        setTimeout(() => {
          state = "info1";
        }, 1000);
      }

      if (entity.hp > 0) {
        setTimeout(() => {
          state = "enemy";
        }, 2000);
      }
    }
  }
  if (state === "enemy2") {
    if (mouseX > 0 && mouseX < 200 && mouseY > 0 && mouseY < 100) {
      console.log("Click Worked");

      attack = "Slap";

      slap.currentTime = 0;
      slap.play();

      setTimeout(() => {
        slap.pause();
      }, 1000);

      dmgRoll = Math.random();
      enemyDmgRoll = Math.random();

      if (dmgRoll < 0.2) {
        dmgDealt = 8;
      } else if (dmgRoll > 0.2 && dmgRoll < 0.4) {
        dmgDealt = 9;
      } else if (dmgRoll > 0.4 && dmgRoll < 0.6) {
        dmgDealt = 10;
      } else if (dmgRoll > 0.6 && dmgRoll < 0.8) {
        dmgDealt = 11;
      } else if (dmgRoll > 0.8) {
        dmgDealt = 12;
      }

      entity.hp -= dmgDealt;

      if (randNum <= 0.25) {
        enemyDmgDealt = Math.round(12 * enemyDmgMult);

        enemyAttack = "Clap";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      } else if (randNum >= 0.25 && randNum <= 0.5) {
        enemyDmgDealt = Math.round(8 * enemyDmgMult);
      }

      enemyAttack = "Grabby";

      enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

      setTimeout(() => {
        player.hp -= enemyDmgDealt;
      }, 1000);
    } else if (randNum >= 0.5 && randNum <= 0.75) {
      enemyAttack = "Eat Food";

      enemyattacktext = `Red used ${enemyAttack}! It healed 3 health!`;

      setTimeout(() => {
        entity.hp += 5;
      }, 1000);
    } else {
      enemyDmgDealt = Math.round(5 * enemyDmgMult);

      enemyAttack = "Poke";

      enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

      setTimeout(() => {
        player.hp -= enemyDmgDealt;
      }, 1000);
    }

    state = "attackused2";

    if (entity.hp > 0) {
      setTimeout(() => {
        state = "enemyattackused2";
      }, 1000);
    } else if (entity.hp <= 0) {
      setTimeout(() => {
        state = "win";
      }, 1000);
    }

    if (entity.hp > 0) {
      setTimeout(() => {
        state = "enemy2";
      }, 2000);
    }

    randNum = Math.random();
  } else if (mouseX > 200 && mouseX < 400 && mouseY > 0 && mouseY < 100) {
    console.log("Click Worked");

    attack = "Chomp";

    dmgRoll = Math.random();
    enemyDmgRoll = Math.random();

    if (dmgRoll < 0.2) {
      dmgDealt = 12;
    } else if (dmgRoll > 0.2 && dmgRoll < 0.4) {
      dmgDealt = 14;
    } else if (dmgRoll > 0.4 && dmgRoll < 0.6) {
      dmgDealt = 15;
    } else if (dmgRoll > 0.6 && dmgRoll < 0.8) {
      dmgDealt = 16;
    } else if (dmgRoll > 0.8) {
      dmgDealt = 18;
    }

    entity.hp -= dmgDealt;

    if (randNum <= 0.25) {
      enemyDmgDealt = Math.round(12 * enemyDmgMult);

      enemyAttack = "Clap";

      enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

      setTimeout(() => {
        player.hp -= enemyDmgDealt;
      }, 1000);
    } else if (randNum >= 0.25 && randNum <= 0.5) {
      enemyDmgDealt = Math.round(8 * enemyDmgMult);

      enemyAttack = "Grabby";

      enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

      setTimeout(() => {
        player.hp -= enemyDmgDealt;
      }, 1000);
    } else if (randNum >= 0.5 && randNum <= 0.75) {
      enemyAttack = "Eat Food";

      enemyattacktext = `Red used ${enemyAttack}! It healed 5 health!`;

      setTimeout(() => {
        entity.hp += 5;
      }, 1000);
    } else {
      enemyDmgDealt = Math.round(5 * enemyDmgMult);

      enemyAttack = "Poke";

      enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

      setTimeout(() => {
        player.hp -= enemyDmgDealt;
      }, 1000);
    }

    state = "attackused2";

    if (entity.hp > 0) {
      setTimeout(() => {
        state = "enemyattackused2";
      }, 1000);
    } else if (entity.hp <= 0) {
      setTimeout(() => {
        state = "win";
      }, 1000);
    }

    if (entity.hp > 0) {
      setTimeout(() => {
        state = "enemy2";
      }, 2000);
    }
  }
}
