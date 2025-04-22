function concat(str1:string | string[] ,str2?:string):string{
    if(Array.isArray(str1)){
        return str1.join(' ');
    }
    else{
    return str1+str2;
    }
}

console.log(concat('hi ','Jessina'));

console.log(concat(['hi','Jessina','how','are','you','?']));