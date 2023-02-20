

                //  opdracht 3a  //

const tvBrands = inventory.map((tvItem) => {
    return `<li>${tvItem.brand}</li>`;
});
const tvList = document.getElementById('tv-list');
tvList.innerHTML = `${tvBrands.join("")}`;


                //  opdracht 3b //
function tv(inventory){
    const tvBrands = inventory.map((tvItem) => {
        return `<li>${tvItem.brand}</li>`;
    });
    const tvList = document.getElementById('tv-list');
    tvList.innerHTML = `${tvBrands.join('')}`;
}
tv(inventory);