// /* Author: 

// */


// // 2.

// let n = 5;
// for (let i = 1; i <= n; i++)
// {
//     for (let j=i; j < n; j++) 
//     {
//         document.write("&nbsp;&nbsp; ");
//     }
//     for (j = 1; j <= 2*i - 1; j++)
//     {
//         if (j == 1 || j == 2*i-1 || i == n)
//         {
//             document.write("*" + " ");
//         }
//         else 
//         {
//             document.write("&nbsp;&nbsp; ");
//         }

//     }
//     document.write("<br>");
// }

// document.write("<br>");

// // 3.

// let m = 3;
// for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j**i + " ");
//     }
//     document.write("<br>");
// }

// document.write("<br>");


// // 4.

// let a = 5;
// for (let i = 0; i < a; i++) {
//     for (let j = 0; j <  a - i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }
// let c = 5;
// for (let i = 1; i < c; i++) {
//     for (let j = 0; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// document.write("<br>");

// let d = 5;
// for (let i = 1; i < d; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("&nbsp; ");
//     }
//     for (let k = i; k <= d; k++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// let b = 5;
// for (let i = 1; i <= b; i++) {
//     for (let j = i; j <= b; j++){
//         document.write("&nbsp; ");
//     }
//     for (let k = 1; k <= i  ; k++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// document.write("<br>");

// // 5.

// let e = 5;
// for (let i = 1; i <= e; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }
// let f = 5;
// for (let i = 0; i < f; i++) {
//     for (let j = 0; j <  a - i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// document.write("<br>");

// let g = 5;
// for (let i = 1; i <= g; i++) {
//     for (let j = i; j <= g; j++){
//         document.write("&nbsp; ");
//     }
//     for (let k = 1; k <= i  ; k++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// let h = 5;
// for (let i = 1; i <= h; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("&nbsp; ");
//     }
//     for (let k = i; k <= h; k++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// document.write("<br>");



// // 6.

// let x = 6;
// for (let i = 1; i <= x; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write("#");
//     }
//     document.write("<br>");
// }

// document.write("<br>");

// 7.
var n = 5, i, j, num = 1, gap;
gap = n - 1;

for (j = 1; j <= n; j++) 
{
    num = j;
    for (i = 1; i <= gap; i++)
    {
        document.write("  ");
        gap--;
    }
    for (i = 1; i <= j; i++) 
    {
        document.write(num);
        num++;
    }
    num--;
    num--;
    for (i = 1; i < j; i++) 
    {
        document.write(num);
        num--;
    }
    document.write("<br>");
}

// 4. 
// const result = document.getElementById('result');
// let s = 14;
// let halfValue = s/2;
// let string='';
// for(let i = 0 ; i <=  halfValue - 2 ; i++) {
// 	let counter = 0;
//   for(let j = 0 ; j < s-1; j++) {
//      if(j == halfValue-i) {
//         for(let space = 1; space < i*2; space++) {
//           string+='&nbsp&nbsp';
//           counter++;
//         }
//      }
// 			if(counter < s-1)
// 	     	string+='*';
//       counter++;
//   }
 
//   if(i < s-1)
//   string+='<br>'

// }

// for(let n = halfValue-1 ; n >=0  ; n--) {
// 	let revCounter = 0;
//   for(let m = 0; m < s-1; m++) {
//   	if(m == halfValue-n) {
//   	        for(let revSpace = 1; revSpace < n*2; revSpace++) {
//   	          string+='&nbsp&nbsp';
//   	          revCounter++;
//   	        }
//   	     }
//   	  if(revCounter < s-1) 
//   			string+='*'
//     revCounter++;
//   }
//   string+='<br>'
// }

// result.innerHTML = string

// document.write("<br>");




// // Have an array stored with random numbers. 
// // Take a number from the user through input. 
// //  Display the possible numbers from array whose addition is 
// // equal to the the user inputted number.

// // var sum = Number.parseInt(window.prompt("Enter the number: "));

// // let input = [1, 3, 5, 6, 4, 3, 5];


// // function random(input, sum) 
// // {
// //     for (let i = 0; i < input.length; i++)
// //     {
// //         for (let j = i+1; j < input.length; j++)
// //         {
// //             if (input[i] + input[j] == sum)
// //             {
// //                 document.write("(" + input[i] + "," + input[j] + ")");
// //                 document.write("<br>");
// //             }
// //         }
// //     }
// // }

// // random(input, sum);


























