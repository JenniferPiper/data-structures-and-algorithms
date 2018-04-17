'use strict'

function reverseArray(inputArray){
    let outputArray = [],
        j = 0;
    for (let i = inputArray.length - 1; i >= 0; i--) {
        outputArray[j] = inputArray[i];
        j++;
    }
    return outputArray;
}