# Date library

[date-fns](https://www.npmjs.com/package/date-fns)
[date-fns 使い方あれこれ](https://zenn.dev/snjssk/articles/f05d1bcfeb9604)

## 年月日

```JavaScript
import { getDate, getMonth, getYear } from 'date-fns';

const date = new Date(2021, 0, 1);
console.log(date);

// 2020-12-31T15:00:00.000Z
```

```JavaScript
console.log(`getMonth(date): ${getMonth(date)}`);

// 0 月は0始まり
```

## format

```JavaScript
console.log(format(new Date(), 'yyyy-MM-dd'));
// 2021-05-23

console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
// 2021-05-23
```

`RangeError: Use `yyyy` instead of `YYYY``

```JavaScript
console.log(format(new Date(), 'YYYY-MM-DD'));
```

[format: Description](https://date-fns.org/v1.28.5/docs/format)
