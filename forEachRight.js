const array=[10,20,30,40];

function forEachRight(collection,callback){
    for(let i=collection.length-1;i>=0;i--){
        callback(collection[i]);
    }
}

forEachRight(array,value=>console.log(value));