import React from 'react';

export default function ChallengeSixteen() {
  const prices: number[] = [7, 1, 5, 3, 6, 4];

  /* 
buy at 1
sell at 6
profit = 5
*/

  const highestProfit = (stockPrices: number[]): number[] => {
    // Initialize variables to track the minimum price, buy price, sell price, and maximum profit

    let minPrice: number = stockPrices[0]; // Initialize minPrice to the first day's price
    let buyPrice: number = 0;
    let sellPrice: number = 0;
    let maxProfit: number = 0;

    for (let i = 1; i < stockPrices.length; i++) {
      // Start from the second day
      if (stockPrices[i] < minPrice) {
        // Update minPrice if a lower price is found
        minPrice = stockPrices[i];
      }

      let profit = stockPrices[i] - minPrice; // Calculate profit if selling on the current day

      if (profit > maxProfit) {
        // Update values if this profit is greater than the previous max
        maxProfit = profit;
        buyPrice = minPrice;
        sellPrice = stockPrices[i];
      }
    }

    return [buyPrice, sellPrice];
  };

  return (
    <div>
      <h2>Best Time to Buy & Sell Stock 📈</h2>
      <h3>Prices: {prices.join(', ')}</h3>
      <p>
        Given daily stock prices listed in order Monday to Saturday, find the
        biggest possible profit by buying once and selling later.
      </p>

      <h3>Highest Profit Return: {highestProfit(prices).join(' + ')}</h3>
    </div>
  );
}
