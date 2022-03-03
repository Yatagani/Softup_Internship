/*
   Ex.1. Two sum problem
*/
const twoSumIndex = (array, target) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        const difference = target - current;
        if (difference in result) {
            return [result[difference], i];
        }
        else {
            result[array[i]] = i;
        }
    }
    return result;
};
// console.log(twoSumIndex([2, 7, 11, 15], 22));
/*
   Ex.2. Length of last word
*/
const getLast = (word) => {
    const formatedWord = word.trim().split(' ');
    const lastWord = formatedWord[formatedWord.length - 1];
    return lastWord ? lastWord.length : 0;
};
// console.log(getLast('Hello World'));
/*
   Ex.3. Hamming Distance
*/
const hammingDistance = (x, y) => {
    const xor = (x ^ y).toString(2);
    let count = 0;
    for (let i = 0; i < xor.length; i++) {
        if (xor[i] === '1') {
            count++;
        }
    }
    return count;
};
console.log(hammingDistance(1, 4));
/*
   Ex.4. Flip horizontally & invert matrix
*/
const processImage = (image) => {
    const result = image.map((row) => row.reverse().map((num) => num === 1 ? 0 : 1));
    return result;
};
console.log(processImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
/*
   Ex.5. Reverse bits
*/
const reverseBits = (int32) => {
    const result = int32.split("").reverse().join("");
    return result;
};
console.log(reverseBits('00000010100101000001111010011100'));
//# sourceMappingURL=Algorithmic-exercises.js.map