let moneyDisplay = document.getElementById("Money");
let fuelDisplay  = document.getElementById("Fuel");
let game = {
    moneyOwned: 0,
    fuel: 0,
    fuelPerSecond: 1,
    power: 0,
    stone: 0,

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