console.log("Aufgabe1");
function countTrue(arri) {
    let count = [];
    for (let i = 0; i < arri.length; i++) {
        if (arri[i] === true) {
            count.push(arri[i]);
        }
    }

    return count.length;
}
console.log(countTrue([true, false, false, true, false]));

console.log("Aufgabe2");
function numInStr(arr) {
    let putIn = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == parseInt(arr[i][j])) {
                putIn.push(arr[i]);
                break;
            }
        }
    }
    return putIn;
}
console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));

console.log("Aufgabe3");
function maxItems(dataNum) {
    let input = [];
    for (let i = 0; i < dataNum.length; i++) {
        sumArray = dataNum[0];
        if (dataNum[1] >= sumArray) {
            // show amout of ithems i can buy
        }
    }
    console.log(dataNum[0]);
}
maxItems(["1", "1", "2"], "3");
