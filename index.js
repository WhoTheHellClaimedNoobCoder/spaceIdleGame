<<<<<<< HEAD
let moneyDisplay = document.getElementById("Money");
let fuelDisplay  = document.getElementById("Fuel");
let game = {
=======
var moneyDisplay = document.getElementById("Money");
var fuelDisplay  = document.getElementById("Fuel");
var game = {
>>>>>>> 8c2d979 (Second commit)
    moneyOwned: 0,
    fuel: 0,
    fuelPerSecond: 1,
    power: 0,
    stone: 0,
<<<<<<< HEAD

    fuelGain: function(){
      game.fuelPerSecond = pumpJack.boost * pumpJack.amountOwned;
      if (pumpJack.amountOwned >= 1) {
       game.fuel += game.fuelPerSecond;
       fuelDisplay.innerHTML = game.fuel;
} else {
    //So it basically does nothing if you dont have any pumpjacks cuz u stoopid
};
  },
 moneyGain:  function(){
    game.moneyOwned += 1;
    moneyDisplay.innerHTML = game.moneyOwned;
},
};

let pumpJack = {
=======
};

var pumpJack = {
>>>>>>> 8c2d979 (Second commit)
    price: 20,
    boost: 1,
    status: true,
    amountOwned: 0,

    pumpjackOpen: function() {
        this.status = true;
    },

    pumpJackClose: function() {
        this.status = false; 
    },

    pumpJackBuy: function() {
        if (game.moneyOwned >= pumpJack.price) {
        game.moneyOwned -= pumpJack.price;
        this.amountOwned += 1;
        moneyDisplay.innerHTML = game.moneyOwned;
        }
    },
};

<<<<<<< HEAD
let rocket = {
   fuelReq: 500,
   launchedAmount: 0,
 //Make a rocket launch function that resets all player stats  
    rocketLaunch: function() {
      if (game.fuel >= this.fuelReq) {
        game.stone += game.fuel^1.5;
        this.launchedAmount += 1;
        game.fuel = 0;
        game.moneyOwned = 0;
        pumpJack.amountOwned = 0;
      };
  
},
};

setinterval(game.fuelGain, 1000);
=======
var rocket = {
  
  fuelRequirement: 1000,
  launchAmount: 0,

  rocketLaunch: function () {
    if (game.fuel >= game.fuelRequirement) {
      game.moneyOwned = 0;
      game.fuel = 0;
      pumpJack.amountOwned = 0;
      this.launchAmount++;
      game.stone += Math.pow(game.fuel, 1.4);
      console.log(pumpJack.amountOwned);
    } 
    return game.stone += game.fuel^1.4;
  }
};

game.fuelGain = function(){
    game.fuelPerSecond = pumpJack.boost * pumpJack.amountOwned;
    if (pumpJack.amountOwned >= 1) {
    game.fuel += game.fuelPerSecond;
    fuelDisplay.innerHTML = game.fuel;
} else {
    //So it basically does nothing if you dont have any pumpjacks cuz u stoopid
};
};

game.moneyGain = function(){
    game.moneyOwned += 1;
    moneyDisplay.innerHTML = game.moneyOwned;
};


setInterval(game.fuelGain, 1000);
>>>>>>> 8c2d979 (Second commit)
