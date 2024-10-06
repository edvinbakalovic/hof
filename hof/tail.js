const array = [1,2,3,4,5];

function tail(array){
   for(let i=0;i<array.length;i++){
    array[i]=array[i+1];
   }
   array.length=array.length-1;
   return array;
}

console.log(tail(array));