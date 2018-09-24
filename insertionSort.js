/**
 * Best case - when array is almost sorted
 *  O(n²) worst case; O(n) - best case
 */

let arr = [10, 11, 5, 5, 3, 8, 2, 6, 4, 7, 9, 1];

function pureInsertionSort(array) {
    if (array.length === 0) {
        console.log('empty array');
        return;
    }

    let newArray = [];

    for (let idx = 0; idx < array.length; idx++) {

        if (idx === 0) {
            newArray = [array[idx]];
            continue;
        }

        // could be replaced with while for clearer code
        for (let i = newArray.length; i >= 0; i--) {

            if (array[idx] >= newArray[i]) {
                newArray.splice(i+1, 0, array[idx]);
                break;
            }

            if (i === 0) {
                newArray.splice(i, 0, array[idx]);
                break;
            }
        }
    }

    return newArray;
}

console.log(insertionSort(arr));