const player = document.getElementById("player");
const pauseButton = document.getElementById("pauseButton");
const backgroundMusic = new Audio("resources/sound/sound.mp3");
const explosionSound = new Audio("resources/sound/explosion.mp3");
const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");

let jumping = false;
let gamePaused = false;
let gameOver = false;
let gameSpeed = 7;
let canJump = true;
let progress = 0;

let consecutiveObstacles = 0;
let obstacleIntervals = [];
let progressInterval;
let obstacleCreationInterval;

backgroundMusic.loop = true;
window.onload = () => {
  backgroundMusic.play();
};

function getRandomInterval() {
  if (consecutiveObstacles >= 3) {
    consecutiveObstacles = 0;
    return Math.random() * 1500 + 1000;
  }
  return Math.random() * 600 + 500;
}

function jump() {
  jumping = true;
  player.classList.add("jump");
  setTimeout(() => {
    player.classList.remove("jump");
    jumping = false;
  }, 650);
}

function moveObstacle(obstacle, moveInterval) {
  if (gamePaused || gameOver) return;

  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  if (obstacleLeft <= -20) {
    obstacle.remove();
    clearInterval(moveInterval);
    const index = obstacleIntervals.indexOf(moveInterval);
    if (index > -1) {
      obstacleIntervals.splice(index, 1);
    }
  } else {
    obstacle.style.left = obstacleLeft - gameSpeed + "px";
  }

  checkCollision(obstacle);
}

function createObstacle() {
  if (gamePaused || gameOver) return;

  const existingObstacles = document.querySelectorAll(".obstacle");
  if (existingObstacles.length >= 2) {
    return;
  }

  const shouldCreateMultipleObstacles = Math.random() < 0.3;

  if (shouldCreateMultipleObstacles) {
    createConsecutiveObstacles();
  } else {
    createSingleObstacle();
  }
}
function createSingleObstacle() {
  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");
  obstacle.style.left = "1600px";
  document.querySelector(".game-container").appendChild(obstacle);

  const moveInterval = setInterval(
    () => moveObstacle(obstacle, moveInterval),
    17
  );
  obstacleIntervals.push(moveInterval);
}

function createConsecutiveObstacles() {
  const numberOfObstacles = Math.floor(Math.random() * 3) + 1;
  let lastObstacleLeft = 1600;

  for (let i = 0; i < numberOfObstacles; i++) {
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    obstacle.style.left = `${lastObstacleLeft}px`;
    document.querySelector(".game-container").appendChild(obstacle);

    const moveInterval = setInterval(
      () => moveObstacle(obstacle, moveInterval),
      17
    );
    obstacleIntervals.push(moveInterval);

    lastObstacleLeft += 50;
  }
  consecutiveObstacles++;
}

function checkCollision(obstacle) {
  const playerRect = player.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();

  const reducedObstacleRect = {
    left: obstacleRect.left + 20,
    right: obstacleRect.right - 20,
    top: obstacleRect.top + 30,
    bottom: obstacleRect.bottom - 20,
  };

  if (
    playerRect.left < reducedObstacleRect.right &&
    playerRect.right > reducedObstacleRect.left &&
    playerRect.top < reducedObstacleRect.bottom &&
    playerRect.bottom > reducedObstacleRect.top
  ) {
    canJump = false;
    triggerExplosion();
  }
}

function triggerExplosion() {
  gameOver = true;
  explosionSound.play();

  const originalImage = player.style.backgroundImage;
  player.style.backgroundImage = 'url("resources/videos/explosion.gif")';
  player.style.width = "100px";
  player.style.height = "100px";
  player.style.position = "absolute";

  setTimeout(() => {
    player.style.width = "50px";
    player.style.height = "50px";
    endGame();
  }, 500);
}

function endGame() {
  gameOver = true;
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
  pauseButton.disabled = true;
  showGameOverWindow();
}

function showGameOverWindow() {
  const gameOverWindow = document.createElement("div");
  gameOverWindow.style.position = "fixed";
  gameOverWindow.style.top = "50%";
  gameOverWindow.style.left = "50%";
  gameOverWindow.style.transform = "translate(-50%, -50%)";
  gameOverWindow.style.padding = "30px";
  gameOverWindow.style.background =
    "linear-gradient(145deg, rgba(255, 0, 0, 0.7), rgba(255, 69, 0, 0.7))";
  gameOverWindow.style.color = "white";
  gameOverWindow.style.borderRadius = "15px";
  gameOverWindow.style.textAlign = "center";
  gameOverWindow.style.display = "flex";
  gameOverWindow.style.flexDirection = "column";
  gameOverWindow.style.alignItems = "center";
  gameOverWindow.style.justifyContent = "center";
  gameOverWindow.style.width = "300px";
  gameOverWindow.style.height = "200px";
  gameOverWindow.style.gap = "20px";
  gameOverWindow.style.border = "5px solid rgba(255, 0, 0, 0.8)";
  gameOverWindow.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.5)";

  const gameOverText = document.createElement("h2");
  gameOverText.textContent = "¡Game Over!";
  gameOverText.style.margin = "0";
  gameOverText.style.fontSize = "28px";
  gameOverText.style.fontFamily = "'Roboto', sans-serif";
  gameOverText.style.fontWeight = "bold";
  gameOverText.style.color = "white";
  gameOverText.style.textShadow = "3px 3px 8px rgba(0, 0, 0, 0.5)";

  const restartButton = document.createElement("button");
  restartButton.id = "restartButton";
  restartButton.textContent = "Reiniciar";
  restartButton.style.padding = "14px 28px";
  restartButton.style.fontSize = "18px";
  restartButton.style.fontWeight = "bold";
  restartButton.style.background =
    "linear-gradient(145deg, rgba(255, 99, 71, 0.9), rgba(255, 69, 0, 0.9))";
  restartButton.style.color = "white";
  restartButton.style.border = "2px solid rgba(255, 69, 0, 1)";
  restartButton.style.borderRadius = "12px";
  restartButton.style.cursor = "pointer";
  restartButton.style.transition = "all 0.3s ease-out";
  restartButton.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";

  restartButton.addEventListener("mouseover", () => {
    restartButton.style.transform = "scale(1.1)";
    restartButton.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.4)";
  });

  restartButton.addEventListener("mouseout", () => {
    restartButton.style.transform = "scale(1)";
    restartButton.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
  });

  restartButton.addEventListener("mousedown", () => {
    restartButton.style.background = "rgba(255, 255, 255, 0.6)";
    restartButton.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.4)";
  });

  restartButton.addEventListener("mouseup", () => {
    restartButton.style.background =
      "linear-gradient(145deg, rgba(255, 99, 71, 0.9), rgba(255, 69, 0, 0.9))";
  });

  restartButton.addEventListener("click", () => {
    pauseButton.disabled = false;
    window.location.reload();
  });

  gameOverWindow.appendChild(gameOverText);
  gameOverWindow.appendChild(restartButton);
  document.body.appendChild(gameOverWindow);
}

function styleRestartButton(button) {
  button.style.padding = "12px 25px";
  button.style.fontSize = "18px";
  button.style.fontWeight = "bold";
  button.style.background =
    "linear-gradient(145deg, rgba(255, 99, 71, 0.3), rgba(255, 69, 0, 0.3))";
  button.style.color = "white";
  button.style.border = "2px solid rgba(255, 69, 0, 0.5)";
  button.style.borderRadius = "12px";
  button.style.cursor = "pointer";
  button.style.transition = "all 0.3s ease-out";
  button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";

  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
    button.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.4)";
  });
  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
    button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
  });
  button.addEventListener("mousedown", () => {
    button.style.background = "rgba(255, 255, 255, 0.3)";
    button.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.6)";
  });
  button.addEventListener("mouseup", () => {
    button.style.background =
      "linear-gradient(145deg, rgba(255, 99, 71, 0.3), rgba(255, 69, 0, 0.3))";
  });
}

function restartObstacleMovement() {
  const obstacles = document.querySelectorAll(".obstacle");
  obstacles.forEach((obstacle) => {
    const moveInterval = setInterval(
      () => moveObstacle(obstacle, moveInterval),
      17
    );
    obstacleIntervals.push(moveInterval);
  });
}

function showVictoryWindow() {
  canJump = false;
  pauseButton.disabled = true;
  const victoryWindow = document.createElement("div");
  victoryWindow.style.position = "fixed";
  victoryWindow.style.top = "50%";
  victoryWindow.style.left = "50%";
  victoryWindow.style.transform = "translate(-50%, -50%)";
  victoryWindow.style.padding = "30px";
  victoryWindow.style.background = "rgba(34, 193, 195, 0.8)";
  victoryWindow.style.color = "white";
  victoryWindow.style.borderRadius = "15px";
  victoryWindow.style.textAlign = "center";
  victoryWindow.style.display = "flex";
  victoryWindow.style.flexDirection = "column";
  victoryWindow.style.alignItems = "center";
  victoryWindow.style.justifyContent = "center";
  victoryWindow.style.width = "320px";
  victoryWindow.style.height = "250px";
  victoryWindow.style.gap = "20px";
  victoryWindow.style.border = "4px solid rgba(0, 128, 0, 0.6)";

  const victoryText = document.createElement("h2");
  victoryText.textContent = "¡Felicitaciones!";
  victoryText.style.margin = "0";
  victoryText.style.fontSize = "30px";
  victoryText.style.color = "gold";
  victoryText.style.textShadow = "3px 3px 5px rgba(0, 0, 0, 0.6)";
  victoryText.style.transition = "transform 0.5s ease-in-out";
  victoryText.addEventListener("mouseover", () => {
    victoryText.style.transform = "scale(1.1)";
  });
  victoryText.addEventListener("mouseout", () => {
    victoryText.style.transform = "scale(1)";
  });

  const victoryMessage = document.createElement("p");
  victoryMessage.textContent = "¡Has completado el nivel con éxito!";
  victoryMessage.style.fontSize = "20px";
  victoryMessage.style.margin = "10px 0";
  victoryMessage.style.color = "lightyellow";

  const restartButton = document.createElement("button");
  restartButton.textContent = "Jugar Siguiente Nivel";
  styleRestartButton(restartButton);
  restartButton.style.background =
    "linear-gradient(145deg, rgba(255, 215, 0, 0.6), rgba(255, 165, 0, 0.8))";
  restartButton.style.border = "none";

  restartButton.addEventListener("click", () => {
    pauseButton.disabled = false;
    window.location.reload();
  });

  victoryWindow.appendChild(victoryText);
  victoryWindow.appendChild(victoryMessage);
  victoryWindow.appendChild(restartButton);
  document.body.appendChild(victoryWindow);
}

function startGame() {
  if (obstacleCreationInterval) clearInterval(obstacleCreationInterval);
  if (progressInterval) clearInterval(progressInterval);

  obstacleCreationInterval = setInterval(() => {
    if (!gamePaused && !gameOver) createObstacle();
  }, getRandomInterval());

  progressInterval = setInterval(() => {
    if (!gamePaused && !gameOver && progress < 100) {
      progress += 0.1;
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${Math.round(progress)}%`;

      if (progress >= 100) {
        gameOver = true;
        clearInterval(obstacleCreationInterval);
        clearInterval(progressInterval);
        obstacleIntervals.forEach(clearInterval);

        showVictoryWindow();
      }
    }
  }, 100);
}

pauseButton.addEventListener("click", () => {
  gamePaused = !gamePaused;
  pauseButton.textContent = gamePaused ? "Reanudar" : "Pausar";

  if (gamePaused) {
    backgroundMusic.pause();
    clearInterval(obstacleCreationInterval);
    clearInterval(progressInterval);
    obstacleIntervals.forEach(clearInterval);
    obstacleIntervals = [];
  } else {
    backgroundMusic.play();
    startGame();
    restartObstacleMovement();
  }
});

document.addEventListener("keydown", function (event) {
  if (
    (event.code === "Space" || event.code === "ArrowUp") &&
    !jumping &&
    !gamePaused &&
    canJump
  ) {
    jump();
  }
});

document.addEventListener("mousedown", function (event) {
  if (event.button === 0 && !jumping && !gamePaused && canJump) {
    jump();
  }
});

startGame();