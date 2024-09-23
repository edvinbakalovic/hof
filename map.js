const array=[2,4,6,8,10];

function map(collection,callback){
    let mappedArray=[];
    for(let i=0;i<collection.length;i++){
        mappedArray.push(callback(collection[i],i,collection));
    }

    return mappedArray;
}

console.log(map(array,(value,index,collection)=>{
    return value*2;
}));