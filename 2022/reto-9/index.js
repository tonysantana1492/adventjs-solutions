function countTime(array) {

    let count = 0;
    let condition = true;

    while(condition) {

        const newArray = array.map((item, index, array) => {
            if(index === 0 && array.at(-1) === 1) return 1;

            if(item === 0 && array[index - 1] === 1) return 1;
            return item
        }); 

        count += 7;
        condition = newArray.some(item => item === 0);  
        array = newArray;        
    }

    return count;

}

const result = countTime([0, 0, 0, 1]);

console.log(result);