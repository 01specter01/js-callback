# js-callback

# Callbacks

​

## 1.1

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

​

## 1.2

​

-   Schreibe eine Funktion getSquaredNumber, die die Quadratzahl einer gegebenen Zahl zurückgibt.
-   Schreibe eine weitere Funktion getSquaredNumbersFromArray, welche ein Array mit Zahlen und die Funktion getSquaredNumber (callback) als Parameter erhält und die Quadratzahl jeder Zahl im Array zurückgibt.
    ​

```javascript
const array = [1, 2, 3, 4];
getSquaredNumber(2); // 4
getSquaredNumbersFromArray(array, getSquaredNumber); // 1, 4, 9, 16
```

1.111.11

# Recursion

​

-   Benutze Recursion um die Aufgaben zu lösen
-   for, while, do while, forEach, map, filter etc sind nicht erlaubt
    ​

## 2.1

​

-   Implementiere eine Funktion getSumOfArray, welche ein Array erhält und die Summe zurückgibt.
    ​
    ​

```javascript
const array = [1, 2, 3, 4, 5, 6];
getSumOfArray(array); // 21
```

​

## 2.2

​

-   Schreiben Sie eine Funktion reverse, die einen string als Parameter erhält und den string umgekehrt zurückgibt.
    ​

```javascript
const hello = "hello world";
reverse(hello); // dlrow olleh
```
