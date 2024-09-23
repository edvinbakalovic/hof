const array=['a','b','c','d'];

function unshift(collection,element){
    collection.length=collection.length+1;
    for(let i=collection.length-1;i>0;i--){
        collection[i]=collection[i-1];
    }
    collection[0]=element;
    return collection.length;
}

console.log(unshift(array,4));
console.log(array);