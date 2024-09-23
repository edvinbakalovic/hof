const array=[10,20,30,true,false,null,undefined,-0];

function includes(collection,value,startIndex){
    if(startIndex<0)
        startIndex=collection.length-(startIndex*(-1));

    if(typeof(collection)==="string" && typeof(value)==="string"){
        let arrayWords=[];
        let word='';
        if(collection.length<=value.length)
            arrayWords.push(collection);
        else{
            for(let i=0;i<collection.length-value.length+1;i++){
                for(let j=i;j<value.length+i;j++){
                    word+=collection[j];
                }
                arrayWords.push(word);
                word="";
            }

            for(let i=0;i<arrayWords.length;i++){
                if(arrayWords[i]===value)
                    return true;
            }
            return false;
        }
    }
    else{
        for(let i=startIndex;i<collection.length;i++){
            if(value===collection[i])
                return true;
        }
        return false;
    }
}

console.log(includes([1,2,3],1,0));
console.log(includes("abcdef","bcd",0))






