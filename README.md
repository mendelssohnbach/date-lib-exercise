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
import { format } from 'date-fns';

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

## 加算

年の加算

```JavaScript
import { addYears, addMonths, addDays } from 'date-fns';

console.log(addYears(new Date(2021, 4, 23), 1));
// 2022-05-22T15:00:00.000Z

console.log(addYears(new Date(2021, 4, 23), 10));
// 2031-05-22T15:00:00.000Z
```

月の加算

```JavaScript
console.log(addMonths(new Date(2012, 4, 23), 1));
// 2012-06-22T15:00:00.000Z

console.log(addMonths(new Date(2012, 4, 23), 12));
// 2013-05-22T15:00:00.000Z
```

日の加算

```JavaScript
console.log(addDays(new Date(2012, 4, 23), 1));
// 2012-05-23T15:00:00.000Z

console.log(addDays(new Date(2012, 4, 23), 7));
// 2012-05-29T15:00:00.000Z

console.log(addDays(new Date(2012, 4, 23), 10));
// 2012-06-01T15:00:00.000Z
```

### 問題の発生

`2021/05/23` の処理で1日加算したが、当日が出力される

```JavaScript
console.log(addDays(new Date(2012, 4, 23), 1));
// 2012-05-23T15:00:00.000Z
```

`0` を関した結果

```JavaScript
console.log(addDays(new Date(2012, 4, 23), 0));
// 2012-05-20T15:00:00.000Z
```
