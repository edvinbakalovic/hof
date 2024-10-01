const array = [2,4,false,"string"];

function head(array){
    if(array.length===0)
        return undefined;
    else
     return array[0];
}

console.log(head(array));