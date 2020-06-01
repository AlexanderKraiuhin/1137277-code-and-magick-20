'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var FONT_SIZE = 16;
var TITLE_ARR = ['Ура вы победили!', 'Список результатов:'];
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color, textArr) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  if (textArr) {
    for (var i = 0; i < textArr.length; i++) {
      ctx.fillStyle = 'black';
      ctx.font = 'FONT_SIZE PT Mono';
      ctx.textBaseline = 'hanging';
      ctx.fillText(textArr[i], CLOUD_X + GAP * 2, CLOUD_Y + FONT_SIZE + FONT_GAP * i);
    }
  }
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

function randomColor() {
  var h = 202;
  var s = Math.floor(Math.random() * 101);
  var l = 50;
  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', TITLE_ARR);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], CLOUD_X + GAP * 2 + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, (CLOUD_Y + GAP + FONT_GAP) * 2 + FONT_SIZE + BAR_HEIGHT);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randomColor();
    }
    ctx.fillRect(CLOUD_X + GAP * 2 + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + (GAP + FONT_GAP) * 2 + FONT_SIZE + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP * 2 + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + (GAP + FONT_GAP) * 2 + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime);
  }
};
