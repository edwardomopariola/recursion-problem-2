// problem 2: WWrite a javascript function to compute the sum of an array of integers.

const array = [2, 4, 6, 4, 7, 9]

function sumOfArray(intergers) {
    if(intergers.length === 1) { // if integers.length is equal to 1 
        return intergers[0];
    }
    else {
        return intergers.pop() + sumOfArray(intergers); //Using pop method to remove the last element and return the value
    }
}

console.log(sumOfArray(array)); // final output