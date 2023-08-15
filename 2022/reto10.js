function checkJump(heights) {

    const [first, second] = heights;

    if (second < first) return false; // No puede comenzar bajando

    const maxHeight = Math.max(...heights);
    const indexOfMaxHeight = heights.indexOf(maxHeight);

    const down = heights.slice(indexOfMaxHeight + 1);

    if(down.length === 0) return false; // Tiene que bajar siempre

    const up = heights.slice(0, indexOfMaxHeight);    

    if(up.length === 0) return false; // Tiene que subir primero

    // Analizo la subida
    const isUpOk = up.every((height, index, array) => { 
        if(index === 0) return true;
        return height >= array[index - 1];
    });

    if(!isUpOk) return false;

    // Analizo la bajada
    const isDownOk = down.every((height, index, array) => {
        if(index === 0) return true;
        return height <= array[index - 1];
    });

    return isDownOk;
}

// console.log(checkJump([1, 2, 1]));                          // true
// console.log(checkJump([1, 3, 8, 5, 2]));                    // true
// console.log(checkJump([1, 7, 3, 5]));                       // false
// console.log(checkJump([1, 2, 3, 2, 1]));                    // true
// console.log(checkJump([1, 2, 2, 2, 1]));                    // true
// console.log(checkJump([0, 1, 0]));                          // true
// console.log(checkJump([2, 2, 2, 2]));                       // false
console.log(checkJump([1, 2, 3]));                          // false
// console.log(checkJump([1, 2, 3, 2, 1, 2, 3]));              // false
// console.log(checkJump([1, 1000, 900, 800]));                // true
// console.log(checkJump([1, 1000, 100, 800]));                // false
// console.log(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1]));     // true
// console.log(checkJump([1, 2, 3, 1, 3, 1]));                 // false
// console.log(checkJump([1, 3, 2, 5, 4, 3, 2, 1]));           // false