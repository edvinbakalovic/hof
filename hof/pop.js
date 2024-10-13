const array=[10,20,30,40];

function pop(collection){
    let poppedElement = collection[collection.length-1];
    collection.length=collection.length-1;
    return poppedElement;
    
}
console.log(array); // original array
console.log(pop(array)); // poped element
console.log(array); // new array

