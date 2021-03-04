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
console.log(fibonachi(8));
