const array = [10,20,30,40,50];


function push(collection,pushElement){
    collection[collection.length]=pushElement;
    return collection.length;
    
}

console.log(array);
console.log(push(array,10));
console.log(array);
