

                //  opdracht 4a //
function tvInfo(tv){
    return `${tv.brand} ${tv.type} - ${tv.name}`
}
console.log(tvInfo(inventory[1]));



                //    opdracht 4b   //
function priceTag(price){
    return  "€" + price + "-";
}
console.log(priceTag(379));


                //    opdracht 4c   //
function screenSize(sizes){
    let sizesString = "";
    for (let i = 0; i < sizes.length; i++) {
        let size = sizes[i];
        let sizeInCm = size * 2.54;
        sizesString += `${size} inch (${sizeInCm} cm)`;
        if (i < sizes.length - 1) {
            sizesString += " | ";
        }
    }
    return sizesString;
}

console.log(screenSize([32]));
console.log(screenSize([43, 50, 55, 58]));



                //  opdracht 4d //

const displayTvInfo = document.getElementById('tv-detail');
displayTvInfo.innerHTML = `<h3>${tvInfo(inventory[3])}</h3>
                           <h4>${priceTag(inventory[3].price)}</h4>
                           <p>${screenSize(inventory[3].availableSizes)} `;




                //  opdracht 4e //

function generateTvList(tvArray){
    const tvModest = document.getElementById('inventory-models');

    const modelItems = tvArray.map((tvObject) => {
        return `<li>
            <h3>${tvInfo(tvObject)}</h3>
            <h4>${priceTag(tvObject.price)}</h4>
            <p>${screenSize(tvObject.availableSizes)}</p>
            </li>`
        });
            tvModest.innerHTML = modelItems.join(" ");
    }
    generateTvList(inventory);