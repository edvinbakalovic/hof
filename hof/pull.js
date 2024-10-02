const array = ['a','b','c','a','b','c'];

function pull(array, ...values){
    let newArray=[];
    
    for(let i=0;i<array.length;i++){
        let found = false;

        for(let j=0;j<values.length;j++){
            if(array[i]==values[j]){
                found=true;
                break;
            }
        }

        if(!found){
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(pull(array,'c','a'));