const year = 2022;
const holidays = ['01/06', '04/01', '12/25'];

function countHours(year, holidays) {
    return holidays.reduce((acumulator, holiday)=> {

        const date = new Date(`${year}/${holiday}`);

        if (date.getDay() > 0 && date.getDay() < 6) {
            return acumulator += 2;
        }

        return acumulator;
    }, 0);
}

const count = countHours(year, holidays)
console.log(count);
