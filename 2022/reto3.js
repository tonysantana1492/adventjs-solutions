const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts, reindeers) {

    // const weigthOfGifts =  packOfGifts.reduce((weigth, gift) => {
    //     return weigth += gift.length;
    // }, 0);

    // const capacityOfRenos = reindeers.reduce((capacity, reindeer) => {
    //     return capacity += reindeer.length*2;
    // }, 0);
    const weigthOfGifts = packOfGifts.join('').length;
    const capacityOfRenos = reindeers.join('').length*2;
    
    return Math.trunc(capacityOfRenos/weigthOfGifts)
}

const distributed = distributeGifts(packOfGifts, reindeers);

console.log(distributed);