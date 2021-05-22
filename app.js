import { format } from 'date-fns';

console.log(format(new Date(), 'yyyy-MM-dd')); // 2021-05-23
console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss')); // 2021-05-23 08:30:58

// RangeError: Use `yyyy` instead of `YYYY`
// console.log(format(new Date(), 'YYYY-MM-DD'));
