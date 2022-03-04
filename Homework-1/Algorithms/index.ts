/*
   Ex.1. Two sum problem
*/
const twoSum = (array: number[], target: number): number[]=> {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        const difference = target - current;
        
        if (difference in result) {
            return [result[difference], i];
        } else {
            result[array[i]] = i;
        }
    }
    
    return result;
};

/*
   Ex.2. Length of last word
*/
const getLastWord = (word: string): number => {
    const formatedWord = word.trim().split(' ');
    const lastWord = formatedWord[formatedWord.length - 1];

    return lastWord ? lastWord.length : 0
};


/*
   Ex.3. Hamming Distance
*/
const hammingDistance = (x: number, y: number) : number => {
    const xor = (x ^ y).toString(2);

    let count = 0
    for(let i=0; i<xor.length; i++) {
        if (xor[i] === '1') {
            count++
        }
    }
    return count;
};

/*
Ex.4. Flip horizontally & invert matrix
*/
const processImage = (image: number[][]): number[][] => {
    const result = image.map(
        (row) => row.reverse().map(
            (num) => num === 1 ? 0 : 1));
            
    return result;
};

/*
Ex.5. Reverse bits
*/
const reverseBits = (int32: string): string => {
    const result = int32.split("").reverse().join("");
    return result;
};


console.log(twoSum([2, 7, 11, 15], 22));
console.log(getLastWord('Hello World'));
console.log(hammingDistance(1, 4));
console.log(processImage([[1,1,0],[1,0,1],[0,0,0]]))
console.log(reverseBits('00000010100101000001111010011100'));