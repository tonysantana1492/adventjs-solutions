const isPalindromo = (array) => {
    return array.join('') === array.reverse().join('');
}

function checkPart(string){
    const array = [...string];

    if (isPalindromo(array)) true;

    return array.some((value, index) => {

        const test = [...array.slice(0, index), ...array.slice(index + 1)]
        if (isPalindromo(test)) return true;  

        return false;
    });
}

const result = checkPart("zzzoonzzz");
console.log(result);