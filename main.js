function startGame() {
  myGameArea.start();
  myGamePiece = new component(30, 30, "red", 200, 570);
  document.onkeydown = handle;
  // myGamePiece.gravity = 0.05;
  // myScore = new component("30px", "Consolas", "black", 280, 40, "text");
  // myGameArea.start();
}


var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "background.jpg";

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 480;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    // this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function movePiece(direction) {
  switch (direction) {
    case 'left':
      myGamePiece.x -= 10;
      break;
    case 'right':
      myGamePiece.x += 10;
      break;
    case 'up':
      myGamePiece.y -= 10;
      break;
    case 'down':
      myGamePiece.y += 10;
      break;
  }
  updateGameArea();
}


function handle(e) {
  switch (e.keyCode) {
    case 37:
      movePiece('left');
      break;
    case 38:
      movePiece('up');
      break;
    case 39:
      movePiece('right');
      break;
    case 40:
      movePiece('down');
      break;
  }
};

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillstyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.update();
}