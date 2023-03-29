// Import stylesheets
import './style.css';

// Write Javascript code!

let a = [4, 1, 2, 5, 3];
let b = [7, 10, 8, 6, 9];
let c = [];

const input_a = document.getElementById('input_a');
const input_b = document.getElementById('input_b');
const output = document.getElementById('output');
input_a.innerHTML = '<b>Input A:</b>   ' + a;
input_b.innerHTML = '<b>Input B:</b>   ' + b;

//Order first array ASC
a.sort(function (a, b) {
  return a - b;
});

//Order second array DESC
b.sort(function (a, b) {
  return b - a;
});

//Mix arrays
function arrayHandler(array1, array2, array_output) {
  if (array1.length === array2.length) {
    for (var i = 0; i < array1.length; i++) {
      array_output.push(array1[i], array2[i]);
    }
  }
}

arrayHandler(a, b, c);

output.innerHTML = '<b>Output:</b>   ' + c;
