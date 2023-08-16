const distance = 30
const sleighs = [
    { name: "Dasher", consumption: 0.3 },
    { name: "Dancer", consumption: 0.5 },
    { name: "Rudolph", consumption: 0.7 },
    { name: "Midu", consumption: 1 }
];


function selectSleigh(distance, sleighs) {

    const best = sleighs.reduce((best, sleigh) => {

        const { consumption, name } = sleigh;
        const totalConsumption = consumption*distance;

        if( totalConsumption > 20) return best;

        if(totalConsumption > best.totalConsumption || best.totalConsumption === undefined) {
           return { name,  totalConsumption }; 
        }
        
        return best;
    }, {});

    return best.name ?? null;    
}

console.log(selectSleigh(1, [
    { name: 'pheralb', consumption: 0.3 },
    { name: 'TMChein', consumption: 0.5 }
]))

console.log(selectSleigh(10, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 5 }
]))

console.log(selectSleigh(10, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
]))

console.log(selectSleigh(50, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
]))