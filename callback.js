// Callbacks

/*1.1
​
-   Erstelle eine Funktion, die eine Begrüßungsnachricht ausgibt.
-   Erstelle eine weitere Funktion, die ein Array von verschiedenen Namen und eine Begrüßungsfunktion (callback) empfängt und jeden Namen begrüßt.
​
```javascript
greetMessage("John"); // drucke "Guten Morgen, John"
​
greetUsers(["John", "Peter", "Mark"], greetMessage);
// "Guten Morgen, John"
// "Guten Morgen, Peter"
// "Guten Morgen, Markus"
```
​*/
console.log(1.1);

// const greetUsers = [`John, Parker, Mark`];
// greetUsers.forEach((greetUsers) => {
//     console.log(greetUsers);
// });
// console.log(greetUsers());
// const greetMessage = (greetUsers) => {
//     console.log(`Guten Morgen, ${greetUsers}`);
// };

// greetUsers(["John", "Peter", "Mark"], greetMessage);
/* 1.2
​
-   Schreibe eine Funktion getSquaredNumber, die die Quadratzahl einer gegebenen Zahl zurückgibt.
-   Schreibe eine weitere Funktion getSquaredNumbersFromArray, welche ein Array mit Zahlen und die Funktion getSquaredNumber (callback) als Parameter erhält und die Quadratzahl jeder Zahl im Array zurückgibt.
​
```javascript
const array = [1, 2, 3, 4];
getSquaredNumber(2); // 4
getSquaredNumbersFromArray(array, getSquaredNumber); // 1, 4, 9, 16
```
*/

function test(word) {
    word();
}
var word = ["John", "Peter", "Markus", "Leo"],
    message = "Guten Morgen, ";
word.forEach(function (word) {
    console.log(message, word);
});
