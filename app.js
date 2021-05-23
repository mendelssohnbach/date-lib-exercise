const { addDays } = require('date-fns');
const { utcToZonedTime } = require('date-fns-tz');

const date = new Date('2012-05-23T15:00:00.000Z');

// UTC TimeをAsia/Tokyo TimeZoneに切り替え
const timeZone = 'Asia/Tokyo';
const asiaZoneDate = utcToZonedTime(date, timeZone);
console.log(`Asia/Tokyo Timezone: ${asiaZoneDate}`);

console.log(addDays(asiaZoneDate, 1));
