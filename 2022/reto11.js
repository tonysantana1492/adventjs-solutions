
const convertToSeconds  = (time) => {
    const [hours, minutes, seconds] = time.split(':');    
    return +seconds + minutes*60 + hours*3600;
}

const getMinimunCommonDivisor = (numerator, divisor) => {
    const rest = numerator%divisor;

    if(rest === 0) return divisor;

    return getMinimunCommonDivisor(divisor, rest);
}

function getCompleted(timeWorking, during) {
    const timeWorkingSeconds = convertToSeconds(timeWorking);
    const duringSeconds = convertToSeconds(during);

    const minimunCommonDivisor = getMinimunCommonDivisor(timeWorkingSeconds, duringSeconds);

    const numerator = timeWorkingSeconds/minimunCommonDivisor;
    const denominator = duringSeconds/minimunCommonDivisor;   
    
    return `${numerator}/${denominator}`;    
}

console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')) // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')) // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')) // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')) // '1/3'
console.log(getCompleted('03:30:30', '05:50:50')) // '3/5