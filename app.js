import { addYears, addMonths, addDays } from 'date-fns';

console.log(addYears(new Date(2021, 4, 23), 1));
console.log(addYears(new Date(2021, 4, 23), 10));

console.log(addMonths(new Date(2012, 4, 23), 1));
console.log(addMonths(new Date(2012, 4, 23), 12));
