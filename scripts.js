const allYear = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec"
}

const week = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat"
}

const twoDigits = (num) => num.toLocaleString('en-US',{minimumIntegerDigits: 2});

const formatDateString = (date) => {
  const year = date.getUTCFullYear();
  const month = allYear[date.getUTCMonth()];
  const day = twoDigits(date.getUTCDate());
  const hr = twoDigits(date.getUTCHours());
  const min = twoDigits(date.getUTCMinutes());
  const sec = twoDigits(date.getUTCSeconds());
  const wday = week[date.getUTCDay()];
  const dateString = `${wday}, ${day} ${month} ${year} ${hr}:${min}:${sec} GMT`;

  return dateString;
}

const createDate = (timedata) => {
  let date;
  if(timedata == null) {date = new Date();}
  else {date = new Date(timedata);}
  const time = date.getTime();
  //In case an invalid string is passed
  if(Number.isNaN(time)) {return {'error': "Invalid Date"};}

  const dateString = formatDateString(date);
  
  return {'unix': time, 'utc': dateString};
}

exports.createDate = createDate;
