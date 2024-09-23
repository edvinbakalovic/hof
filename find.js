const array=[10,20,21,27,28,30,50,true,false];
const users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

function find(collection,startIndex,callback){
    if(startIndex==undefined)
        startIndex=0;
    for(let i=startIndex;i<collection.length;i++){
        if(callback(collection[i],i,collection))
            return collection[i];
    }
    return undefined;
}

console.log(find(array,undefined,(value,index,collection)=>{
    return value>20 && value%2==0;
}));

console.log(find(users,0,(value,key,collection)=>{
    return value.active==false;
}))