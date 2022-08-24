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
