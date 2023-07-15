import { printFormatted } from "printformatted-js";
export function testOuput(test_id, str1, str2, expectedScore, actualScore) {
    printFormatted('yellow', '\n', 'Test ', test_id);
    printFormatted('white', 'string 1:"', str1, '"\n', 'string 2:"', str2, '"');
    printFormatted('blue', `expected score: ${expectedScore}`, '\n', `actual score: ${actualScore}`); //prints 1 // completely the same
    if (actualScore == expectedScore) {
        printFormatted('green', `test ${test_id} passed`);
    }
    else {
        printFormatted('red', `test ${test_id} failed`);
    }
}
