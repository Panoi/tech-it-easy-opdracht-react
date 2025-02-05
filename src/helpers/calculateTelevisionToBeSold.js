import {bestSellingTv, inventory} from "../constants/inventory.js";

function calculateTelevisionToBeSold(television) {
    let televisionToBeSold = 0;
    for (let i = 0; i < television.length; i++) {
        televisionToBeSold += television[i].originalStock - television[i].sold
    }
    return televisionToBeSold
}

export default calculateTelevisionToBeSold;