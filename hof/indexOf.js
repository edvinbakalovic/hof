const array = [2,4,6,7,4];

function indexOf(array,value,fromIndex){
    if(fromIndex==undefined)
        fromIndex=0;
    let indexReturn;

    for(let i=fromIndex;i<array.length;i++){
        if(array[i]===value){
            indexReturn = i;
            break;
        }
    }
    return indexReturn;
}

console.log(indexOf(array,4));
console.log(indexOf(array,4,3));