const array=[10,20,30,40,50];
//console.log(array.splice(-2,1));
//console.log(array);

function splice(collection,start,deleteCount){
    let newArray=[];
    if(deleteCount<=0)
        return [];
    let end;
    if(start<0){
        start=collection.length+start;
        end=start-deleteCount;
        for(let i=start;i>end;i--){
            newArray.push(collection[i]);
        }
    }

    else{
        for(let i=start;i<=deleteCount;i++){
            newArray.push(collection[i]);
        }
    }
    return newArray;
}
console.log(splice(array,1,3));
//console.log(splice(array,-2,2));