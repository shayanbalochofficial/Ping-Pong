// ke ye aankhein hai nam, tu jaane na oh beparwah
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var startBtn = document.getElementById("start-btn");
var pauseBtn = document.getElementById("pause-btn");
var restartBtn = document.getElementById("restart-btn");

var animationId;

var gameRunning = false;

startBtn.addEventListener("click", function () {
  if (!gameRunning) {
    gameRunning = true;
    //!   Loop Function will run, not made yet
  }
});

pauseBtn.addEventListener("click", function () {
  gameRunning = false;
  //! Game Pause Func here
});

restartBtn.addEventListener("click", function () {
  document.location.reload();
});

addEventListener("load", (event) => {
  draw();
});

// 😶
var ballRadius = 10;

var ballX = canvas.width / 2;
var ballY = canvas.height / 2;

var ballSpeedX = 5;
var ballSpeedY = 5;

var paddleHeight = 80;
var paddleWidth = 10;

var leftPaddleY = canvas.height / 2 - paddleHeight / 2;
var rightPaddleY = canvas.height / 2 - paddleHeight / 2;

var paddleSpeed = 10;

// Scores
var leftPlayerScore = 0;
var RightPlayerScore = 0;
var maxScore = 10;

var upPressed = false;
var downPressed = false;
let wPressed = false;
let sPressed = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener( );

function keyDownHandler(e) {
  if (e.key === "ArrowUp") {
    upPressed = true;
  } else if (e.key === "ArrowDown") {
    downPressed = true;
  } else if (e.key === "w") {
    wPressed = true;
  } else if (e.key === "s") {
    sPressed = true;
  }
}

function KeyUpHandler() {}
