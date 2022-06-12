const printSegitiga =(baris)=>{
    if (typeof baris !== "number"){
        return console.log("Data harus number");
    }
    let index;
    for(index=0;index<baris;index++){
        var output="";
       
        for(let index2=baris;index2>index;index2--){
            output=output+(baris-(index2-1));
            
        }
        console.log(output);      
    }
}
printSegitiga(5);
