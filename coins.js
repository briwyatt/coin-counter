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



function coinCounter (currentCoins) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
     quarters: 0,
     dimes: 0,
     nickels: 0,
     pennies: 0 };
// var currentCoins = prompt(coinPurse);
var currentCoins;
currentCoins *= 100;

var quartersRemainder = currentCoins % 25;
coinPurse.quarters = (currentCoins - quartersRemainder) / 25;

var dimesRemainder = quartersRemainder % 10;
coinPurse.dimes = (quartersRemainder - dimesRemainder) / 10;

var nickelsRemainder = dimesRemainder % 5;
coinPurse.nickels = (dimesRemainder - nickelsRemainder) / 5;

coinPurse.pennies = (nickelsRemainder);

//   return coinPurse;

  return coinPurse;
}

console.log(coinCounter(.67));












