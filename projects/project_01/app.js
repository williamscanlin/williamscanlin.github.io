var score = 0;
var clickingPower = 1;
var autoClickerCost = 100;
var autoClickerPlusCost = 500;
var autoClickerTurboCost = 10000;
var autoClicker = 0;
var autoClickerPlus = 0;
var autoClickerTurbo = 0;

function saveGame () {
  var gameSave = {
    score: score,
    clickingPower: clickingPower,
    autoClickerCost: autoClickerCost,
    autoClicker: autoClicker,
    autoClickerPlusCost: autoClickerPlusCost,
    autoClickerPlus: autoClickerPlus,
    autoClickerTurboCost: autoClickerTurboCost,
    autoClickerTurbo: autoClickerTurbo
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.score !== "undefined") score = savedGame.score;
  if (typeof savedGame.clickingPower !== "undefined") clickingPower = savedGame.clickingPower;
  if (typeof savedGame.autoClickerCost !== "undefined") autoClickerCost = savedGame.autoClickerCost;
  if (typeof savedGame.autoClicker !== "undefined") autoClicker = savedGame.autoClicker;
  if (typeof savedGame.autoClickerPlusCost !== "undefined") autoClickerPlusCost = savedGame.autoClickerPlusCost;
  if (typeof savedGame.autoClickerPlus !== "undefined") autoClickerPlus = savedGame.autoClickerPlus;
  if (typeof savedGame.autoClickerTurboCost !== "undefined") autoClickerTurboCost = savedGame.autoClickerTurboCost;
  if (typeof savedGame.autoClickerTurbo !== "undefined") autoClickerTurbo = savedGame.autoClickerTurbo;
}

function resetGame() {
  if (confirm("Are you sure you want to lose all your donuts ?")){
    var gameSave = {};
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
    location.reload();
  }
}

window.onload = function() {
  loadGame();
  updateAutoClickerEffect();
  document.getElementById("autoClickerCost").innerHTML = autoClickerCost;
  document.getElementById("autoClicker").innerHTML = autoClicker;
  document.getElementById("autoClickerPlusCost").innerHTML = autoClickerPlusCost;
  document.getElementById("autoClickerPlus").innerHTML = autoClickerPlus;
  document.getElementById("autoClickerTurboCost").innerHTML = autoClickerTurboCost;
  document.getElementById("autoClickerTurbo").innerHTML = autoClickerTurbo;
};


function addToScore(amount) {               // Keeps Score
  score = score + amount;
  document.getElementById("score").innerHTML = "Donuts Made : " + score;
}

function updateAutoClickerEffect() {          // multiplier effect 
  autoClickerEffect = autoClicker + autoClickerPlus * 10;
  autoClickerEffect = autoClicker + autoClickerPlus * 10 + autoClickerTurbo * 500;
  document.getElementById("autoClickerEffect").innerHTML = "Bonus Donuts Per Second : "+ autoClickerEffect;
}

function buyAutoClicker() {                // Allows Autoclicker purchase
  if (score >= autoClickerCost){
    score = score - autoClickerCost;
    autoClicker = autoClicker + 1;
    autoClickerCost = Math.round(autoClickerCost *1.10)       // Increases cost

    document.getElementById("score").innerHTML = "Donuts Made : " + score;
    document.getElementById("autoClickerCost").innerHTML = autoClickerCost;
    document.getElementById("autoClicker").innerHTML = autoClicker;
    updateAutoClickerEffect();
}
}

function buyAutoClickerPlus() {          // AutoClicker Plus purchase option
  if (score >= autoClickerPlusCost){
    score = score - autoClickerPlusCost;
    autoClickerPlus = autoClickerPlus + 1;
    autoClickerPlusCost = Math.round(autoClickerPlusCost *2)
  
    document.getElementById("score").innerHTML = "Donuts Made : " + score;
    document.getElementById("autoClickerPlusCost").innerHTML = autoClickerPlusCost;
    document.getElementById("autoClickerPlus").innerHTML = autoClickerPlus;
    updateAutoClickerEffect();
  }
}

function buyAutoClickerTurbo() {          // AutoClicker Turbo purchase option
  if (score >= autoClickerTurboCost){
    score = score - autoClickerTurboCost;
    autoClickerTurbo = autoClickerTurbo + 1;
    autoClickerTurboCost = Math.round(autoClickerTurboCost *2)
  
    document.getElementById("score").innerHTML = "Donuts Made : " + score;
    document.getElementById("autoClickerTurboCost").innerHTML = autoClickerTurboCost;
    document.getElementById("autoClickerTurbo").innerHTML = autoClickerTurbo;
    updateAutoClickerEffect();
  }
}

setInterval(function() {                           // auto clicker function based on time 1 click per sec 10 for auto clicker plus
  score = score + autoClicker;
  score = score + autoClickerPlus * 10;
  score = score + autoClickerTurbo * 500;
  document.title = score + " Donuts - Donut Maker 5000";                  //Displays score in tab
  document.getElementById("score").innerHTML = "Donuts Made : "+ score;
}, 1000);              // 1000 = 1 sec 

setInterval(function() {
  saveGame();
},30000);      // 30000 = 30 sec