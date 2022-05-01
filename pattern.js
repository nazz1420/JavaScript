console.log("hello")
    // 1..
    // var n = 5;
    // stng = "";
    // for (let i = 1; i <= n; i++) {

//     for (let space = 1; space <= n - i; space++) {
//         stng += "s";
//     }
//     for (str = 1; str <= (2 * i - 1); str++) {
//         stng += "*";
//     }
// }
// console.log(stng);


// 2..
// let n = 5;
// let str = "";
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//         str += " ";
//     }

//     for (let k = 0; k < 2 * (n - i) - 1; k++) {
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);

// 3..
// let n = 5;
// let string = "";
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//     // printing spaces
//     for (let j = n; j > i; j--) {
//         string += " ";
//     }
//     // printing star
//     for (let k = 0; k < i * 2 - 1; k++) {
//         string += "*";
//     }
//     string += "\n";
// }
// // downside pyramid
// for (let i = 1; i <= n - 1; i++) {
//     // printing spaces
//     for (let j = 0; j < i; j++) {
//         string += " ";
//     }
//     // printing star
//     for (let k = (n - i) * 2 - 1; k > 0; k--) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// 4..

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
        string += " ";
    }
    for (let k = 0; k < i; k++) {
        string += "*";
    }
    string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
        string += " ";
    }
    for (let k = 0; k < n - i; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);