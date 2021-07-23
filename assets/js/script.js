/* Author: 

*/

// 1.


// 2.

let n = 5;
for (let i = 1; i <= n; i++)
{
    for (let j=i; j < n; j++) 
    {
        document.write("&nbsp;&nbsp; ");
    }
    for (j = 1; j <= 2*i - 1; j++)
    {
        if (j == 1 || j == 2*i-1 || i == n)
        {
            document.write("*" + " ");
        }
        else 
        {
            document.write("&nbsp;&nbsp; ");
        }

    }
    document.write("<br>");
}

document.write("<br>");

// 3.

let m = 3;
for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(j**i + " ");
    }
    document.write("<br>");
}

document.write("<br>");


// 4.

let a = 5;
for (let i = 0; i < a; i++) {
    for (let j = 0; j <  a - i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
let c = 5;
for (let i = 1; i < c; i++) {
    for (let j = 0; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");

let d = 4;
for (let i = 1; i <= d; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("&nbsp; ");
    }
    for (let k = i; k <= n; k++){
        document.write("*");
    }
    document.write("<br>");
}

let b = 5;
for (let i = 1; i <= b; i++) {
    for (let j = i; j <= b; j++){
        document.write("&nbsp; ");
    }
    for (let k = 1; k <= i  ; k++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");

// 5.

let e = 5;
for (let i = 1; i <= e; i++) {
    for (let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
let f = 5;
for (let i = 0; i < f; i++) {
    for (let j = 0; j <  a - i; j++) {
        document.write("*");
    }
    document.write("<br>");
}


document.write("<br>");

// 6.

let x = 6;
for (let i = 1; i <= x; i++) {
    for (let j = 0; j < i; j++) {
        document.write("#");
    }
    document.write("<br>");
}

document.write("<br>");

// Have an array stored with random numbers. 
// Take a number from the user through input. 
//  Display the possible numbers from array whose addition is 
// equal to the the user inputted number.

var sum = Number.parseInt(window.prompt("Enter the number: "));

let input = [1, 3, 5, 6, 4, 3, 5];


function random(input, sum) 
{
    for (let i = 0; i < input.length; i++)
    {
        for (let j = i+1; j < input.length; j++)
        {
            if (input[i] + input[j] == sum)
            {
                document.write("(" + input[i] + "," + input[j] + ")");
                document.write("<br>");
            }
        }
    }
}

random(input, sum);
























