let triple = (x) => {
    return x * 3
}

let add20 = (x) => {
    return x + 20;
}
function logger(x) {
    console.log(x);
}

logger(add20(triple(3)));
// let logger = ((x) => {
//     return add20((x) => {
//         return triple(x)
//     })
// });
// console.log(logger(3));

