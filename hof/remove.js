let array = [1,2,3,4,5];

function remove (array,callback){
    let returnArray = new Array();

    for(let i=0;i<array.length;i++){
        if(callback(array[i])){
            //console.log("el to splice" + array[i])
            returnArray.push(array[i]);
            array.splice(i,1);
        }
    }
    return returnArray;
}

console.log(remove(array,el=>el%2==0));
console.log(array);