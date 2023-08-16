function fixLetter(string) {

    return string
    .trim()     // ✔ Eliminar espacios al inicio y al final
    .replace(/([?!.,;]){2,}/g, '$1')        // ✔ Las preguntas sólo deben terminar con un signo de interrogación
    .replace(/(\s){2,}/g, '$1')     // ✔ Eliminar múltiples espacios en blanco y dejar sólo uno
    .replace(/santa claus/gi, 'Santa Claus')        // ✔ Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
    .replace(/\s([?!.,;])/g, '$1')      // ✔ Quitar espacios antes de coma o punto
    .replace(/([?!.,;])([^\s])/g, '$1 $2')      // ✔ Dejar un espacio después de cada coma
    .replace(/([^?!.,;])$/g, '$1.')     // ✔ Poner un punto al final de la frase si no tiene puntuación
    .replace(/^([a-z])/, (string, $1) => $1.toUpperCase())      // ✔ 
    .replace(/([?!.])\s([a-z])/g, (string, $1,  $2) => `${$1} ${$2.toUpperCase()}`) // ✔ La primera letra de cada oración debe estar en mayúscula
}

console.log(
    fixLetter(` hello,how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
);

console.log(
    fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
);

console.log(
    fixLetter("  hi    santa    claus ")
);

console.log(
    fixLetter("  hi    santa    claus . santa claus is the best  ")
);

console.log(
    fixLetter("  hi    santa    claus . are you there???")
);

console.log(
    fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! ")
);