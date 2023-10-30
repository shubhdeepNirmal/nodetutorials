const fs = require('fs');

 ///renaming a file
fs.rename('example.txt','example2.txt',(err)=>{
   
    if(err) console.log(err);
    else{
        console.log("rename sucessful");
    }

}); 

 //adding data to the file
fs.appendFile('example2.txt',"data appneded here",(err)=>{
    if(err) console.log(err);
    else console.log ("sucessfully appended");

});  
 
//delete a file through fs module
fs.unlink('example2.txt',(err)=>{
    if(err) console.log(err);
    else console.log ("deleted");
});