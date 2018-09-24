/**
 * Classique O(n²)
 */

let array = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1, 17];

function bubbleSort(array) {
    if (array.length === 0) {
        console.log('empty array');
        return;
    }

    for (let idx = 0; idx <= array.length; idx++) {
        for (let i = 0; i <= array.length; i++) {
            // swap
            if (array[i] > array[i + 1]) {
                let temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
            }
        }
    }

    return array;
}

console.log(bubbleSort(array));