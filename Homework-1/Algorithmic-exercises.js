/*
   Ex.1. Two sum problem
*/
var twoSum = function (array, target) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var current = array[i];
        var difference = target - current;
        if (difference in result) {
            return [result[difference], i];
        }
        else {
            result[array[i]] = i;
        }
    }
    ;
    return result;
};
/*
   Ex.2. Length of last word
*/
var getLastWord = function (word) {
    var formatedWord = word.trim().split(' ');
    var lastWord = formatedWord[formatedWord.length - 1];
    return lastWord ? lastWord.length : 0;
};
/*
   Ex.3. Hamming Distance
*/
var hammingDistance = function (x, y) {
    var xor = (x ^ y).toString(2);
    var count = 0;
    for (var i = 0; i < xor.length; i++) {
        if (xor[i] === '1') {
            count++;
        }
    }
    return count;
};
/*
Ex.4. Flip horizontally & invert matrix
*/
var processImage = function (image) {
    var result = image.map(function (row) { return row.reverse().map(function (num) { return num === 1 ? 0 : 1; }); });
    return result;
};
/*
Ex.5. Reverse bits
*/
var reverseBits = function (int32) {
    var result = int32.split("").reverse().join("");
    return result;
};
// console.log(twoSum([2, 7, 11, 15], 22));
// console.log(getLastWord('Hello World'));
// console.log(hammingDistance(1, 4));
// console.log(processImage([[1,1,0],[1,0,1],[0,0,0]]))
// console.log(reverseBits('00000010100101000001111010011100'));
