const array = [1];

function concat(array,...values){
    let newArray=[];
    for(let i=0;i<array.length;i++){
        newArray.push(array[i]);
    }
    for(let i=0;i<values.length;i++){
        newArray.push(values[i]);
    }
    return newArray;
}
console.log(concat(array, 2, [3], [[4]]));