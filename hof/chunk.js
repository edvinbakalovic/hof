const array = ['a','b','c','d','e','f'];

function chunk(collection,size){
    let chunkArray=[];
    let chunk=[];
    for(let i=0;i<collection.length;i++){
       chunk.push(collection[i]);

       if(chunk.length===size || i===collection.length-1){
        chunkArray.push(chunk);
        chunk=[];
       }
    }
    
    return chunkArray;
}
console.log(chunk(array,2));