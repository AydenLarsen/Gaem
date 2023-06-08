function enemyattackused1() {
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "green";
  ctx.fillRect(0, 340, cnv.width, cnv.height - 340);

  ctx.fillStyle = "sandybrown";
  ctx.fillRect(0, 410, cnv.width, cnv.height - 410);

  ctx.font = "20px Consolas";
  ctx.fillStyle = "black";
  ctx.fillText(`Health: ${player.hp}`, 70, 330);
  ctx.fillText(`Health: ${entity.hp}`, 510, 220);

  ctx.drawImage(characterImg, 70, 360, 120, 120);

  ctx.fillStyle = "red";
  ctx.fillRect(510, 260, 220, 220);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 100);

  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.strokeRect(0, 0, 800, 100);

  ctx.font = "40px Consolas";
  ctx.fillStyle = "black";
  ctx.fillText(`${enemyattacktext}`, 30, 70);
}

function enemyattackused2() {
  ctx.fillStyle = "lightgray";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "darkgray";
  ctx.fillRect(0, 340, cnv.width, cnv.height - 340);

  ctx.fillStyle = "gray";
  ctx.fillRect(0, 410, cnv.width, cnv.height - 410);

  ctx.font = "20px Consolas";
  ctx.fillStyle = "black";
  ctx.fillText(`Health: ${player.hp}`, 70, 330);
  ctx.fillText(`Health: ${entity.hp}`, 510, 220);

  ctx.drawImage(characterImg, 70, 360, 120, 120);

  ctx.fillStyle = "red";
  ctx.fillRect(510, 260, 220, 220);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 200, 100);
  ctx.fillRect(200, 0, 200, 100);
  ctx.fillRect(400, 0, 200, 100);
  ctx.fillRect(600, 0, 200, 100);

  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.strokeRect(0, 0, 800, 100);

  ctx.font = "40px Consolas";
  ctx.fillStyle = "black";
  ctx.fillText(`${enemyattacktext}`, 30, 70);
}
