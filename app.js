var initialPrice = document.querySelector("#initial-price");
var numberOfStocks = document.querySelector("#number-of-stocks");
var currentPrice = document.querySelector("#current-price");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#message");


function totalInvestment(costOfOneStock, stocksPurchased) {
    var amountInvested = costOfOneStock * stocksPurchased;
    return amountInvested;
}

function currentValue(currentOneStockValue, stocksPurchased) {
    var currentTotalValueOfStocks = currentOneStockValue * stocksPurchased;
    return currentTotalValueOfStocks;
}


function showMesage(msg){
    message.innerText = msg
}

function calculateProfitLoss() {
    var amountInvested = totalInvestment(initialPrice.value, numberOfStocks.value);

    var currentTotalValueOfStocks = currentValue(currentPrice.value, numberOfStocks.value);

    if (initialPrice.value&&numberOfStocks.value&&currentPrice.value){

        if (currentTotalValueOfStocks > amountInvested) {
            var profit = currentTotalValueOfStocks - amountInvested
            var profitPercentage = (profit / initialPrice.value) * 100;
            showMesage(`Woaaah🚀! You made a profit of Rs. ${profit} and your profit percentage is ${profitPercentage}%`);
    
        } else if (currentTotalValueOfStocks < amountInvested) {
            var loss = amountInvested - currentTotalValueOfStocks
            var lossPercentage = (loss / initialPrice.value) * 100;
            showMesage(`So sorry😞! You made a loss of Rs. ${loss} and your loss percentage is ${lossPercentage}%`);
    
        } else {
            showMesage("Hey, you didn't make any profit nor any loss. Keep Investing and you will make profit some day soon. All the best Happy Investing✌️.")
        }

    }else {
        showMesage("Kindly fill all the fields!!")
    }

    

}

checkButton.addEventListener("click", calculateProfitLoss);