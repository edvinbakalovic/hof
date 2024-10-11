const array = [1,2,3];

function drop(array,number){
    let newArray=[];
    if(number===undefined)
        number=1;

    for(let i=number;i<array.length;i++){
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(drop(array,2));