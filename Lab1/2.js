const str = 'The quick brown fox fox jumps over the lazy dog dog';
const words = str.split(' ');
//2
function up(ar){
  for (i = 0, len = ar.length, text = ""; i < len; i++) {
    word = ar[i].charAt(0).toUpperCase() + ar[i].slice(1);
    text += word + " ";
    }
    return text;
}
console.log(up(words));
