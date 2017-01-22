// Write a program that will convert a dollar amount to the number of coins that make up the amount. 
// Use the common American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/



function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
     quarters: 0,
     dimes: 0,
     nickels: 0,
     pennies: 0 };
//   return coinPurse;
var currentCoins = prompt(coinPurse);
// currentCoins *= 100;
coinPurse.quarters = currentCoins % 25;
// console.log(coinPurse.quarters);
currentCoins -= coinPurse.quarters / 25;
coinPurse.dimes = (currentCoins - coinPurse.quarters) % 10;
currentCoins -= coinPurse.dimes / 10;
coinPurse.nickels = (currentCoins - coinPurse.dimes) % 5;
currentCoins -= coinPurse.nickels / 5;
currentCoins -= coinPurse.pennies / 1;


  return coinPurse;
}

var returnedCoins = coinCounter(coinPurse);
console.log(coinCounter(coinPurse));


returnedCoins();














