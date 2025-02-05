import {bestSellingTv, inventory} from "../constants/inventory.js";

function calculateTelevisionBought(television) {
    let totalBoughtInventory = 0;
    for (let i = 0; i < television.length; i++) {
        totalBoughtInventory += television[i].originalStock
    }
    return totalBoughtInventory
}


export default calculateTelevisionBought;