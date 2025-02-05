import {bestSellingTv} from "../constants/inventory.js";

// function addTelevisionScreenAttribute() {
//     let inchToCm = '';
//     for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {
//       inchToCm += bestSellingTv.availableSizes[i] + ' inch (' + bestSellingTv.availableSizes[i] * Math.round(2.54)  + ') cm | '
//     }
//     const resultInchToCm = inchToCm.join('|');
//     return resultInchToCm
// }
//
// console.log(addTelevisionScreenAttribute());
// export default addTelevisionScreenAttribute;

function addTelevisionScreenAttributes(television) {
    const inchToCm = [];
    for (let i = 0; i < television.availableSizes.length ; i++) {
        inchToCm.push(
            `${television.availableSizes[i]} inch ${(television.availableSizes[i] * 2.54).toFixed(0)} cm     `
        )
    }
    const addStripe = inchToCm.join('| ')
    return addStripe;
}

export default addTelevisionScreenAttributes;