import {bestSellingTv, inventory} from "../constants/inventory.js";

function calculateTelevisionSales(tv) {
    let totalSoldInventory = 0;
    for (let i = 0; i < tv.length; i++) {
        totalSoldInventory += tv[i].sold
    }
    return totalSoldInventory;
}

export default calculateTelevisionSales;