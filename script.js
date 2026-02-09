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
var rightPlayerScore = 0;
var maxScore = 10;

var upPressed = false;
var downPressed = false;
let wPressed = false;
let sPressed = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", KeyUpHandler);

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

function KeyUpHandler(e) {
  if (e.key === "ArrowUp") {
    upPressed = false;
  } else if (e.key === "ArrowDown") {
    downPressed = false;
  } else if (e.key === "w") {
    wPressed = false;
  } else if (e.key === "s") {
    sPressed = false;
  }
}

function update() {
  if (upPressed && rightPaddleY > 0) {
    rightPaddleY -= paddleSpeed;
  } else if (downPressed && rightPaddleY + paddleHeight < canvas.height) {
    rightPaddleY += paddleSpeed;
  }

  if (wPressed && leftPaddleY > 0) {
    leftPaddleY -= paddleSpeed;
  }

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY - ballRadius < 0 || ballY + ballRadius > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }

  if (
    ballX - ballRadius < paddleWidth &&
    ballY > leftPaddleY &&
    ballY < leftPaddleY + PaddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
  }

  // Checking if ball goes out of boundaries on sides of the canvas
  if (ballX < 0) {
    rightPlayerScore++;
    //! reset function
  } else if (ballX > canvas.width) {
    leftPlayerScore++;
    //! reset function
  }

  if (leftPlayerScore === maxScore) {
    playerWin("Left player");
  } else if (rightPlayerScore === maxScore) {
    playerWin("Right player");
  }
}

function PlayerWin() {
  var message = "Congratulations! " + player + " win!";
  $("#message").text(message);
  $("#message-modal").modal("show");
  reset();
}

function reset() {
  ballX = canvas.
}
