function getMost(str) {
    var result = Array.prototype.reduce.call(str, function (allWords, curWord) {
        allWords[curWord] ? allWords[curWord]++ : allWords[curWord] = 1;
        return allWords;
    }, {});
    return result;
}
var result = getMost("qaeweezserasrweewa");
console.log(result);