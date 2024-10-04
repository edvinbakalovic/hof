const array = [0,1,1,2,4,4,3];

function sortedUniq(array){

    //sorting array
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-1;j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }

    let newArray=[];
    for(let i=0;i<array.length;i++){
        if(array[i]!=array[i+1])
            newArray.push(array[i]);
    }

    return newArray;
}

console.log(sortedUniq(array));