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

restartBtn.addEventListener();
