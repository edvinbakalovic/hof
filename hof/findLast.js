const array=[10,20,30,true,false,null,5,23,28,6,19];

const users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];


function findLast(collection,startIndex,callback){
    if(startIndex==undefined)
        startIndex=collection.length-1;
    for(let i=startIndex;i>=0;i--){
        if(callback(collection[i],i,collection))
            return collection[i];
    }
    return false;
}

console.log(findLast(array,undefined,(value,index,collection)=>{
    return value%2==0;
}));

console.log(findLast(users,undefined,(value,key,collection)=>{
    return value.active;
}));
