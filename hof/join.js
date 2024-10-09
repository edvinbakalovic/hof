let array=[10,20,30,40];

function join(collection,separator){
    let stringReturn="";
    for(let i=0;i<collection.length;i++){
        if(i==collection.length-1)
            stringReturn+=collection[i];
        else
            stringReturn+=collection[i]+separator;
    }
    return stringReturn;
}

console.log(join(array,"*"));