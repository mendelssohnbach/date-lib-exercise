import { getDate, getMonth, getYear } from 'date-fns';

const date = new Date(2021, 0, 1);
console.log(date); // 2020-12-31T15:00:00.000Z

console.log(`getDate(date): ${getDate(date)}`); // 1

console.log(`getMonth(date): ${getMonth(date)}`); // 0

console.log(`getYear: ${getYear(date)}`); // 2021
