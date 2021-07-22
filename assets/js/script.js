/* Author: 

*/

// 1.

// 2. 

// let m = 3;
// let power = "";
// for (let i = 1; i <= m; i++) {
//     for (let j = 1; j < i ; j++){
//         power = power + "";
//     }
//     power = power + "\n"
// }
// console.log(power);





// 4.

let a = 5;
for (let i = 0; i < a; i++) {
    for (let j = 0; j <  a - i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
let b = 5;
for (let i = 0; i < b; i++) {
    for (let j = 0; j < b - i - 1; j++){
        document.write(" ");
    }
    for (let k = 0; k < i + 1  ; k++) {
        document.write("*");
    }
    document.write("<br>");
}
let c = 4;
let lower_tri = "";
for (let i = 1; i <= c; i++) {
    for (let j = 0; j <= i; j++) {
        lower_tri = lower_tri + "*";
    }
    lower_tri = lower_tri + "\n";
}
let d = 5;
let low_right = "";
for (let i = 1; i <= d; i++) {
    for (let j = 0; j < d - i; j++) {
        low_right = low_right + "";
    }
    for (let k = 0; k < i; k++){
        low_right = low_right + "*";
    }
    low_right = low_right + "\n";
}


// 5.

let e = 5;
let tri_left = "";
for (let i = 1; i <= e; i++) {
    for (let j = 0; j < i; j++) {
        tri_left = tri_left + "*";
    }
    tri_left = tri_left + "\n";
}
let f = 5;
let  tri_right = "";
for (let i = 0; i < f; i++) {
    for (let j = 0; j <  a - i; j++) {
        tri_right = tri_right + "*";
    }
    tri_right = tri_right + "\n";
}
console.log(tri_left + tri_right);


// 6.

let x = 6;
let hash = "";
for (let i = 1; i <= x; i++) {
    for (let j = 0; j < i; j++) {
        hash = hash + "#";
    }
    hash = hash + "\n";
}
console.log(hash);
























