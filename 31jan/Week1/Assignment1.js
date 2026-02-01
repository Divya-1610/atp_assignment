/* initial data:
 let finalAmount = 0;
 tasks:
 1.add 500 to final amount
 2.add 1200 to final amount
 3.apply a 200 discount
 4.add 18% GST
 5.print the final amount
*/

let finalAmount = 0;

function addAmount(value) {
    finalAmount += value;
    return finalAmount;
}

function applyDiscount(discountValue) {
    if (discountValue === 0)
        return finalAmount;
    finalAmount -= discountValue;
    return finalAmount;
}

function applyGST(gstRate) {
    let gstAmount = (finalAmount * gstRate) / 100;
    finalAmount += gstAmount;
    return finalAmount;
}

addAmount(500);
addAmount(1200);
applyDiscount(200);
applyGST(18);

console.log("Final Amount is:", finalAmount);