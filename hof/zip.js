function zip(...Arrays){
    let finalArray=[];
    let firstArray=[];
    let secondArray=[];

    for(let i=0;i<Arrays.length;i++){
        let currentArray = Arrays[i];

        for(let j=0;j<currentArray.length;j=j+2){
            firstArray.push(currentArray[j]);
        }

        for(let k=1;k<=currentArray.length;k=k+2){
            secondArray.push(currentArray[k]);
        }

        currentArray=null;
    }

    finalArray.push(firstArray);
    finalArray.push(secondArray);
    return finalArray;
}

console.log(zip(['a','b'],[1,2],[true,false]));
