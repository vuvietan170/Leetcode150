var maxProfit = function (prices) {
    let minPrices = prices[0];
    let maxprofit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (minPrices > prices[i]) {
            minPrices = prices[i];
        }

        let profit = prices[i] - minPrices;
        if (profit > maxprofit) {
            maxprofit = profit;
        }
    }
    if (maxprofit <= 0) {
        return 0;
    } else {
        return maxprofit;
    }
};
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
