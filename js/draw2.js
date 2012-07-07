onload = function() {
  draw1();
  draw2();
  draw3();
};
/* 円を描く */
function draw1() {
  var canvas = document.getElementById('c1');
  if ( ! canvas || ! canvas.getContext ) { return false; }
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(0, 0, 0, 0, true);
  ctx.fill();
}