/* Author: 

*/

// 1.

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
        string = string + "";
    }

    for (k = 1; k < 2 - i; k++) {
        string = string + "*";
    }
    string = string + "\n";
}
console.log(string);























