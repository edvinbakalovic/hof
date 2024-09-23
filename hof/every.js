const array = [10,20,30,40,41];
const users = [
    {'user':'barney', 'age': 36, 'active':false},
    {'user':'fred', 'age': 40, 'active':false}
];

function every(collection,callback){
    for(let i=0;i<collection.length;i++){
        if(!callback(collection[i],i,collection))
            return false;
    }
    return true;
}

console.log(every(array,(value,index,collection)=>value%2==0));
console.log(every(users,(value,index,collection)=>value.age<50));