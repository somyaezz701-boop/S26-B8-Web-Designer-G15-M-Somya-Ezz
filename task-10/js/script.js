 var degree = prompt("Enter Your degree")
 if ( degree ==null || degree == ""){
     alert('please enter your degree')
 }
 else if(degree>100){
     console.log('invalid degree')
 }
 else if(degree>90){
     console.log('Excellent')
 }
 else if(degree>80){
     console.log('very good')
 }
 else if(degree>70){
     console.log('good')
 }
 else{
     console.log('failed') 
    }
