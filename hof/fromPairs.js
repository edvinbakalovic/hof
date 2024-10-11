
function fromPairs(array){
    const object={};

    for(let i=0;i<array.length;i++){
        const [key,value] = array[i];
        object[key]=value;
    }

    return object;
}

console.log(fromPairs([['a', 1], ['b', 2]]))