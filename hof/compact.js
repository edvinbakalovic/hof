const array = [0,1,false,2,'',3];

function compact(array){
    let newArray=[];
    for(let i=0;i<array.length;i++){
        if(array[i])
            newArray.push(array[i]);
    }
    return newArray;
}

console.log(compact(array))