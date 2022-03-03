/*
 * Prints the given string in white
 */
var printDefault = function (input) {
    console.log('\x1b[37m%s\x1b[0m', input);
};
/*
 * Prints the given string in green
 */
var printSuccess = function (input) {
    console.log('\x1b[32m%s\x1b[0m', input);
};
/*
 * Prints the given string in yellow
 */
var printWarning = function (input) {
    console.log('\x1b[33m%s\x1b[0m', input);
};
/*
 * Prints the given string in red
 */
var printDanger = function (input) {
    console.log('\x1b[31m%s\x1b[0m', input);
};
/*
 * Prints the given string in blue
 */
var printInfo = function (input) {
    console.log('\x1b[34m%s\x1b[0m', input);
};
