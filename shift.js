const array=[10,20,30,40,50];

function shift(collection){
    let shiftedElement = collection[0];
    for(let i=0;i<collection.length;i++){
        collection[i]=collection[i+1];
    }
    collection.length=collection.length-1;
    return shiftedElement;
}

console.log(shift(array));
console.log(array);
