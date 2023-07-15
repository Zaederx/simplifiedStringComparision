import { compareTwoStrings } from "./simplystring.js";
import { testOuput } from "./test-output.js";
const print = false;
var test = 1;
var str1 = 'string';
var str2 = 'string'; //exactly the same
const expectedAns1 = 1;
const comparisionScore1 = compareTwoStrings(str1, str2, print);
testOuput(test, str1, str2, expectedAns1, comparisionScore1);
var test = 2;
var str1 = 'string';
var str2 = 'trngsi'; //'string' jumbled up
const expectedAns2 = 0.7555555555555555;
const comparisionScore2 = compareTwoStrings(str1, str2, print);
testOuput(test, str1, str2, expectedAns2, comparisionScore2); //prints '0.7555555555555555' //can tell that it's very similar but not quite the same
var test = 3;
var str1 = 'string';
var str2 = 'tr8390'; //only two characters in common
const expectedAns3 = 0.3333333333333333;
const comparisionScore3 = compareTwoStrings(str1, str2, print);
testOuput(test, str1, str2, expectedAns3, comparisionScore3); //prints 0.3333333333333333 //not very similar
var test = 4;
var str1 = 'string';
var str2 = '00'; //no characters in common
var expectedAns4 = 0;
var comparisionScore4 = compareTwoStrings(str1, str2, print);
testOuput(test, str1, str2, expectedAns4, comparisionScore4); //prints 0 //not at all the same
