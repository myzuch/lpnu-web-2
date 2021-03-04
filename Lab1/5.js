//5
function getDifference(start, end){
  diff = start.getTime() - end.getTime();
  sec = diff/1000;
  days = sec/60/60/24;
  weeks = days/7;
  return [Math.abs(days), Math.abs(weeks), Math.abs(sec)];
}
var s = new Date('09/08/2019');//mm-dd-yyyy
var e = new Date('09/18/2020');
console.log(getDifference(s, e));
