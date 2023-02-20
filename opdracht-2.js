
                //  opdracht 2a

const totalTvSold = inventory.map((total) => {
    return total.sold;
});
console.log(totalTvSold);
let sumTvSold = 0;
for(let i = 0; i < totalTvSold.length; i++){
    sumTvSold += totalTvSold[i];
}
console.log(sumTvSold);


                //  opdracht 2b //

const tts = document.getElementById("sold");
tts.textContent = sumTvSold;


                //   opdracht 2c //

const purchase = inventory.map((bought)=> {
    return bought.originalStock;
});
console.log(purchase);
let sumPurchase = 0;
for(let i = 0; i < purchase.length; i++){
    sumPurchase += purchase[i];
}
console.log(sumPurchase);

                //  opdracht 2d //

const buy = document.getElementById("purchase");
buy.textContent = sumPurchase;


                //  opdracht 2e //

const toSale = sumPurchase - sumTvSold;
console.log(toSale);
const available = document.getElementById("available");
available.textContent = toSale;