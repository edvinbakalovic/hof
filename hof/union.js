const array = [2];

function union(...Array){
    let unionArrayDuplicates = [];
    for(let i=0;i<Array.length;i++){
        let currentArray = Array[i];

        for(let j=0;j<currentArray.length;j++)
            unionArrayDuplicates.push(currentArray[j]);

        currentArray=null;
    }

    let unionArray=[];
    unionArrayDuplicates.sort();
    for(let i=0;i<unionArrayDuplicates.length;i++){
        if(unionArrayDuplicates[i]!=unionArrayDuplicates[i+1])
            unionArray.push(unionArrayDuplicates[i]);
    }

    return unionArray;
}

console.log(union([2],[1,2]));