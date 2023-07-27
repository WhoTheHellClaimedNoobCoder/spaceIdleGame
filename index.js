let moneyDisplay = document.getElementById("Money");
let fuelDisplay  = document.getElementById("Fuel");
let game = {
    moneyOwned: 0,
    fuel: 0,
    fuelPerSecond: 1,
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

game.fuelGain = function(){
    if (pumpJack.amountOwned >= 1) {
    game.fuel += (pumpJack.boost * pumpJack.amountOwned);
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