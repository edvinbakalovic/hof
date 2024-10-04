const array = [10,20,30,50,3];

function sortedIndex(array,number){
    array.push(number);
    //array.sort();

    // bubble sort :"D
    for(let i=0;i<array.length;i++){
        for(j=0;j<array.length-1;j++){
            if(array[j]>array[j+1]){
                let pom=array[j];
                    array[j]=array[j+1];
                    array[j+1]=pom ; 
            }
        }
    }

    
    let index=null;
    for(let i=0;i<array.length;i++){
        if(array[i]==number){
            index=i;
            break;
        }
    }

    return index; 
}

console.log(sortedIndex(array,40))