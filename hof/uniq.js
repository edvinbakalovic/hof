const array = [1,2,3,2];

function uniq(array){
    let uniqArray=[];
    array.sort();
    for(let i=0;i<array.length;i++){
        if(array[i]!=array[i+1])
            uniqArray.push(array[i]);
    }

    return uniqArray;
}

console.log(uniq(array));