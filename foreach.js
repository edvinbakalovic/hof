let array=[1,2,3,4,5];

function forEach(collection,callback){
    for(let i=0;i<collection.length;i++){
        callback(collection[i]);
    }
}

forEach(array,(value) => console.log(value));