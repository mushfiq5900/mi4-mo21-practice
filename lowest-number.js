let givenArray = [10, 45, 22, 41, 65, 32, 11, 4, 5, 88, 100];
let checker = givenArray[0];

for (let i = 0; i < givenArray.length; i++) {
    if (checker > givenArray[i]) {
        checker = givenArray[i];
    }
}
console.log("Smallest Number is", checker);