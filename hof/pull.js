const array = ['a','b','c','a','b','c'];

function pull(array, ...values){
    let newArray=[];
    for(let i=0;i<array.length;i++){
        for(let j=0;j<values.length;j++){
            if((array[i]==values[j])){
               // newArray.push(array[i]);
            }
            else
                newArray.push(array[i]);
                
        }
    }

    return newArray;
}

console.log(pull(array,'a','c'));