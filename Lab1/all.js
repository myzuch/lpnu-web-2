//1
const str = 'The quick brown fox fox jumps over the lazy dog dog';
const words = str.split(' ');
function merge_words(ar){
  for (i = 0, len = ar.length, text = ""; i < len; i++) {
    text += ar[i] + " ";
    }
    return text;
}
// console.log(merge_words(words));
//2
function up(ar){
  for (i = 0, len = ar.length, text = ""; i < len; i++) {
    word = ar[i].charAt(0).toUpperCase() + ar[i].slice(1);
    text += word + " ";
    }
    return text;
}
// console.log(up(words));
//3
function fibonachi(n){
  const ar = [0,1,1];
  for(i = 0; i < n-1; i++){
    ar[2] = ar[0] + ar[1];
    ar[0] = ar[1];
    ar[1] = ar[2];
  }
  return ar[2];
}
// console.log(fibonachi(3))
//4
function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
uniq_words = [...new Set(words)];
// console.log(uniq(words));
//5
function getDifference(start, end){
  diff = start.getTime() - end.getTime();
  sec = diff/1000;
  days = sec/60/60/24;
  weeks = days/7;
  return Math.abs(days);
}
var s = new Date('09/08/1997');
var e = new Date('09/18/1997');
// console.log(getDifference(s, e));
//6
function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
  const half = array.length / 2

  // Base case or terminating case
  if(array.length < 2){
    return array
  }

  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}
// console.log(mergeSort([5,4,7,2,1]))
