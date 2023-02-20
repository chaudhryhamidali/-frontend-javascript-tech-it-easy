const sortTvButton = document.getElementById("sort-tv");
sortTvButton.addEventListener("click", showSortedTv);

function showSortedTv(){
    sortPrice(inventory);
    generateTvList(inventory);
}


const ambiLightButton = document.getElementById("ambi-light");
ambiLightButton.addEventListener("click", showAmbiLight);

function showAmbiLight(){
    const tvAmbient = inventory.filter((hasAmbient ) =>{
        return hasAmbient.options.ambiLight === true;
    });
    generateTvList(tvAmbient);
}


const soldOutButton = document.getElementById("sold-out");
soldOutButton.addEventListener("click", soldTv);

function soldTv(){
    const tvSold = inventory.filter((sold) => {
        return sold.sold === sold.originalStock;
    });
    generateTvList(tvSold);
}