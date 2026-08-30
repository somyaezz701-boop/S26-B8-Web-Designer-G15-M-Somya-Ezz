function looping(startNum,endNum,breakNum,contNum){
    if (startNum==undefined|| endNum==undefined ||breakNum==undefined ||contNum==undefined){
        alert('Enter all numbers')
        return;
    }
    for(var i=startNum; i<=endNum ; i++){
        if(i==contNum){
            continue;  
        }
        if(i==breakNum){ 
            break;
        }
        console.log(i);
    }
    return i;
}
looping(1,10,9,3);

var cources=["html","cSS","js"]
var input=prompt ('Enter the course')
if (cources.includes(input)){
    console.log('founded');
}
else{
    alert('not founded')
    cources.push(input);
    alert(cources)
    console.log(cources)
}