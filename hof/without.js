const array = [2, 1, 2, 3];

function without(array, ...values) {
    let newArray = [];
    let push = false;

    function lengthArray(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            let current = arr1[i];
            for (let j = 0; j < arr2.length; j++) {
                if (current == arr2[j]) {
                    push = true;
                    break;
                }
                else
                    push = false;
            }
            if (!push)
                newArray.push(current);
        }
    }

    if (array.length > values.length)
        lengthArray(array, values)
    else
        lengthArray(values, array);

    return newArray;
}
//console.log(without(array, 1, 2));
console.log(without(array, 1, 2, 3, 4, 2));