var money = 0;
var fuel = 0;
var fuelGenerationPrice = 15;
document.getElementById("Money").innerHTML = money;
console.log("i love deez");

function fuelGeneration(amountGenerating) {
    fuel = fuel+amountGenerating
    document.getElementById("Fuel").innerHTML = fuel;
}


function moreMoney(amount) {
    money = money+amount
    document.getElementById("Money").innerHTML = money;
}

function startFuelGeneration(amountGenerating) {
    if (money >= fuelGenerationPrice) {
    money = money-fuelGenerationPrice;
    fuelGenerationPrice = Math.round(fuelGenerationPrice*1.15);
    document.getElementById("Money").innerHTML = money;
    document.getElementById("Oil Rig Cost").innerHTML = fuelGenerationPrice;
    setInterval(() => {
    fuel = fuel+amountGenerating;
    document.getElementById("Fuel").innerHTML = fuel;
    }, 1000);
  } 
}

