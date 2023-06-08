function info1() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  player.x = 0;
  player.y = 275;

  ctx.font = "30px Consolas";
  ctx.fillStyle = "white";
  ctx.fillText("You have learned a new move: Chomp!", 10, cnv.height / 2);
  ctx.fillText("Click to continue", 10, 410);
}
