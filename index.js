let game = {
    moneyOwned: 0,
    fuel: 0,
    fuelPerSecond: 1,
};
let pumpJack = {
    price: 20,
    boost: 1,
    status: 'open',
    amountOwned: 1,

    pumpjackOpen: function() {
        this.status = 'open';
    },

    pumpJackClose: function() {
        this.status = 'closed'; 
    },

    pumpJackBuy: function() {
        if (game.moneyOwned >= pumpJack.price) {
        game.moneyOwned -= pumpJack.price;
        this.amountOwned += 1;
        }
    },
};

game.fuelGain = function() {
    fuel += (pumpJack.boost * pumpJack.amountOwned);
    console.log(fuel);
};

setInterval(game.fuelGain(), 1000);