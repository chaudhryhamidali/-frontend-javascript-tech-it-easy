
                //  opdracht 1a
const tvNames = inventory.map((searchName ) => {
    return searchName.name;
});
console.log(tvNames);


                //  opdracht 1b
const tvSold = inventory.filter((sold) => {
    return sold.sold === sold.originalStock;
});
console.log(tvSold);

                //  opdracht 1c
const tvAmbient = inventory.filter((hasAmbient ) =>{
    return hasAmbient.options.ambiLight === true;
});
console.log(tvAmbient);

                //  opdracht 1d
function sortPrice(inventory){
    return inventory.sort((a,b) => {
        if(a.price > b.price){
            return 1;
        }
        if(a.price < b.price){
            return -1;
        }
        return 0;
    });
}
console.log(sortPrice(inventory));
