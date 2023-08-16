const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

function getGiftsToRefill(a1, a2, a3) {

    const set1 = new Set(a1);
    const set2 = new Set(a2);
    const set3 = new Set(a3);

    const storage = [...set1, ...set2, ...set3];

    const countedStorage = storage.reduce((amount, item) => {
        amount[item] ??= 0;
        amount[item]++;
        
        return amount;
    }, {});

    return Object.entries(countedStorage).filter(([key, value]) => value === 1).map(([key, value]) => key); 
}

// function getGiftsToRefill(a1, a2, a3) {
//     return [...new Set([...a1, ...a2, ...a3])].filter(
//       (gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1
//     );
// }

const gifts = getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f']);

console.log(gifts);
