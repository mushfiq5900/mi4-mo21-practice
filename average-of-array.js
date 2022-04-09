function arrayAverage(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum = sum + inputArray[i];
    }
    let averagenum = sum / inputArray.length;
    return averagenum;
}

let averageOutput = arrayAverage([12, 14, 15, 2, 5]);
console.log("Average is: ", averageOutput);