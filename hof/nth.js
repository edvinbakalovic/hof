const array = [1,2,3,4,5];

function nth(array,number){
    if(number>=0)
        return array[number];
    else
        return array[array.length+number];
}

console.log(nth(array,-2));