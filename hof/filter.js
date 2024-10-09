const array=[true,false,5,7,11,28,14,32];

function filter(collection,callback){
    let filterArray=[];

    for(let i=0;i<collection.length;i++){
        if(callback(collection[i],i,collection))
            filterArray.push(collection[i]);
    }
    
    return filterArray;
}

console.log(filter(array,(value,index,collection)=>{
    return value%3==0
}));