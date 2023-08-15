function getMaxGifts(giftsCities, maxGifts, maxCities) {

  let maxSum = 0;
  
  function generateCombinations(remaining, selected, sum) {

      if(sum === maxGifts) {
        maxSum = sum;
        return;
      }

      if(selected.length === maxCities || remaining.length === 0) {
          maxSum = Math.max(maxSum, sum);
          return;
      }
    
      for(let i = 0; i < remaining.length; i++) {
        const extracted = remaining[i];
        const updatedSum = sum + extracted;
        
        if(updatedSum > maxGifts) {
          maxSum = Math.max(maxSum, sum);
          return;
        }        
        
        // const updatedRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)]
        const updatedRemaining = [...remaining.slice(i + 1)]
        const updatedSelected = [...selected, extracted];
        
        generateCombinations(updatedRemaining, updatedSelected, updatedSum);
      }
  }

  // Me quedo solo con los valores validos
  const availablesGifts = giftsCities.filter(gift => gift <= maxGifts).sort((a, b) => a - b);

  if(availablesGifts.length === 0) return maxSum;

  generateCombinations(availablesGifts, [], 0);

  return maxSum;  
}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3));
