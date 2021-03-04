const str = 'The quick brown fox fox jumps over the lazy dog dog';
const words = str.split(' ');
//1
function merge_words(ar){
  for (i = 0, len = ar.length, text = ""; i < len; i++) {
    text += ar[i] + " ";
    }
    return text;
}
console.log(merge_words(words));
