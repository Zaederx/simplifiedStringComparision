# simplifiedStringComparision
 Simplified personal solution to the two string comparision problem.

Usage:

Install the package
````
npm install simplystring-comparision

````

Import the package and use
````
import { compareTwoStrings } from 'simplystring-comparision'
var str1 = 'string'
var str2 = 'string'//exactly the same
var comparisionScore = compareTwoStrings(str1,str2)

console.log(comparisionScore)//prints 1 // completely the same


var str1 = 'string'
var str2 = 'trngsi'//'string' jumbled up
var comparisionScore = compareTwoStrings(str1,str2)

console.log(comparisionScore)//prints '0.7555555555555555' //can tell that it's very similar but not quite the same

var str1 = 'string'
var str2 = 'tr8390'//only two characters in common
var comparisionScore = compareTwoStrings(str1,str2)

console.log(comparisionScore)//prints 0.3333333333333333 //not very similar


var str1 = 'string'
var str2 = '00'//no characters in common
var comparisionScore = compareTwoStrings(str1,str2)

console.log(comparisionScore)//prints 0 //not at all the same 

````

It also accepts an optional boolean argument after the second string. This indicates whether it should print internal information or not. True = print 

````
var str1 = 'string'
var str2 = '00'//no characters in common
var print = true
var comparisionScore = compareTwoStrings(str1,str2, print)
//prints a lot of extra info while running
````