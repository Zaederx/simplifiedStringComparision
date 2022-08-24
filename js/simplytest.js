import { compareTwoStrings } from "./simplystring.js";
var str1 = 'string';
var str2 = 'string'; //exactly the same
var comparisionScore1 = compareTwoStrings(str1, str2);
console.log(`comparisionScore1: ${comparisionScore1}`); //prints 1 // completely the same
var expectedAns1 = 1;
if (comparisionScore1 == expectedAns1) {
    console.log('test 1 passed');
}
var str1 = 'string';
var str2 = 'trngsi'; //'string' jumbled up
var comparisionScore2 = compareTwoStrings(str1, str2);
console.log(`comparisionScore2: ${comparisionScore2}`); //prints '0.7555555555555555' //can tell that it's very similar but not quite the same
var expectedAns2 = 0.7555555555555555;
if (comparisionScore2 == expectedAns2) {
    console.log('test 2 passed');
}
var str1 = 'string';
var str2 = 'tr8390'; //only two characters in common
var comparisionScore3 = compareTwoStrings(str1, str2);
console.log(`comparisionScore3: ${comparisionScore3}`); //prints 0.3333333333333333 //not very similar
const expectedAns3 = 0.3333333333333333;
if (comparisionScore3 == expectedAns3) {
    console.log('test 3 passed');
}
var str1 = 'string';
var str2 = '00'; //no characters in common
var comparisionScore4 = compareTwoStrings(str1, str2);
console.log(`comparisionScore4: ${comparisionScore4}`); //prints 0 //not at all the same
var expectedAns4 = 0;
if (comparisionScore4 == expectedAns4) {
    console.log('test 4 passed');
}
