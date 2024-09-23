const array=[10,20,30,40,50];

function slice(collection,start,end){
    let slicedArray=[];
    for(let i=start;i<end;i++){
        slicedArray.push(collection[i]);
    }
    return slicedArray;
}

console.log(slice(array,1,3));


