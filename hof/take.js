const array = [1,2,3];

function take(array,number){

    if(number==undefined)
        return array[0];
    else if(number==0)
        return [];
    else{
        return array.slice(0,number);
    }
}

console.log(take(array,5));

