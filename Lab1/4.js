const str = 'The quick brown fox fox jumps over the lazy dog dog';
const words = str.split(' ');
//4
function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
uniq_words = [...new Set(words)];
console.log(uniq(words));
