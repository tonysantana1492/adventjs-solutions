

function getCombinations(target) {

  const results = [];

  function generateCombination(remaining, posibleCombination) {

      if (remaining.length === 0) {
          results.push(posibleCombination);
          return;
      }

      for(let i = 0; i < remaining.length; i++) {
          const currentValue = remaining[i];
          // const updatedRemaning = [...remaining.slice(0, i), ...remaining.slice(i + 1)];            
          const updatedRemaning = [...remaining.slice(i + 1)];            
          const updatedPosibleCombination = [...posibleCombination, currentValue];

          generateCombination(updatedRemaning, updatedPosibleCombination);
      }
      
  }

  generateCombination(target, []); 
  return results;
}

const result = getCombinations([1, 2, 3]);
console.log(result);