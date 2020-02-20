var hero;

function startGame() {
    gameArea.start();
    image = new Image();
    image.src = './assets/hero.jpg';
    hero = new component(image, 30, 30, 285, 570);
    document.onkeydown = handle;
    hero.update();
    updateGameArea();
}

var gameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.setAttribute("id", "canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");

        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        // this.interval = setInterval(updateGameArea, 20);
      },
      clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    };

    function component(img, width, height, x, y) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.img = img;
      this.update = function () {
        ctx = gameArea.context;
        // ctx.fillstyle = img;
        // ctx.fillStyle = '#fe57a1'; // hot pink!
        // ctx.fillRect(10, 10, 30, 50); // fill a rectangle (x, y, width, height)
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
}

function movePiece(direction) {
    switch (direction) {
        case 'left': hero.x -= 10;
            break;
        case 'right': hero.x += 10;
            break;
        case 'up': hero.y -= 10;
            break;
        case 'down': hero.y += 10;
            break;
    }
    updateGameArea();
}

function lazer() {
    // lazer = new component(30, 5, "red", hero.x, hero.y);
    console.log("pewpew!");
}

function handle(e) {
    switch (e.keyCode) {
        case 37: movePiece('left');
            e.preventDefault();
            break;
        case 38: movePiece('up');
            e.preventDefault();
            break;
        case 39: movePiece('right');
            e.preventDefault();
            break;
        case 40: movePiece('down');
            e.preventDefault();
            break;
        case 70: lazer();
            e.preventDefault();
            console.log("pew...");
            break;
    }
}

function updateGameArea() {
    gameArea.clear();
    hero.update();
}
