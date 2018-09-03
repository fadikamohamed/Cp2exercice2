var c = document.getElementById('ufo');
var ctx = c.getContext('2d');

ctx.fillStyle = '#0000FF';
ctx.fillRect(0,0,400,400);

ctx.beginPath();
ctx.moveTo(160,180);
ctx.quadraticCurveTo(200,80,240,180);
ctx.closePath();
ctx.fillStyle = '#FFFFFF';
ctx.fill();

ctx.beginPath();
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,130,300,200);
ctx.closePath();
ctx.fillStyle = '#E0E1F3';
ctx.fill();

ctx.beginPath();
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,270,300,200);
ctx.closePath();
ctx.fillStyle = '#E0E1F3';
ctx.fill();
