// ✔ Eliminar espacios al inicio y al final
// ✔ Eliminar múltiples espacios en blanco y dejar sólo uno
// ✔ Dejar un espacio después de cada coma
// ✔ Quitar espacios antes de coma o punto
// Las preguntas sólo deben terminar con un signo de interrogación
// ✔ La primera letra de cada oración debe estar en mayúscula
// ✔ Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
// ✔ Poner un punto al final de la frase si no tiene puntuación


function fixLetter(string) {

    return string.replace(/\s+/g, ' ');

    // modifiedString = modifiedString.split(' ').map((item, index, array) => {
    //     if(index === 0) {
    //         const [firstChar] = item;
    //         return `${firstChar.toLocaleUpperCase()}${item.slice(1)}`
    //     }

    //     const lastCharater = array[index-1].at(-1);

    //     if(['?', '.', '!'].includes(lastCharater)) {
    //         const [firstChar] = item;
    //         return `${firstChar.toLocaleUpperCase()}${item.slice(1)}`
    //     }

    //     return item;

    // }).join(' ');
            
    // return modifiedString = ['?', '.', '!'].includes(modifiedString.at(-1)) ? modifiedString : modifiedString + '.';
}

console.log(
    fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
);

// console.log(
//     fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// );

// console.log(
//     fixLetter("  hi    santa    claus ")
// );

// console.log(
//     fixLetter("  hi    santa    claus . santa claus is the best  ")
// );

// console.log(
//     fixLetter("  hi    santa    claus . are you there???")
// );

// console.log(
//     fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! ")
// );