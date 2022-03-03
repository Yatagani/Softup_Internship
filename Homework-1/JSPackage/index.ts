/* 
 * Prints the given string in white
 */
const printDefault = (input: string) => {
    console.log('\x1b[37m%s\x1b[0m', input);
}


/* 
 * Prints the given string in green
 */
const printSuccess = (input: string) => {
    console.log('\x1b[32m%s\x1b[0m', input);
};


/* 
 * Prints the given string in yellow
 */
const printWarning = (input: string) => {
    console.log('\x1b[33m%s\x1b[0m', input);
};


/* 
 * Prints the given string in red
 */
const printDanger = (input: string) => {
    console.log('\x1b[31m%s\x1b[0m', input);
};


/* 
 * Prints the given string in blue
 */
const printInfo = (input: string) => {
    console.log('\x1b[34m%s\x1b[0m', input);
};