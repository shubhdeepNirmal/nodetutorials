const fs = require('fs');

 
 //create folder
 fs.mkdir('fsfoldertut',(err)=>{
    if(err) console.log(err);
    else console.log("created folder");
}); 

//remove folder
  fs.rmdir('fsfoldertut',(err)=>{

    if(err) console.log(err);
    else console.log("removed folder");
});  

//make file within folder
fs.mkdir('tutorial',(err)=>{
    if(err) console.log(err);
    else {
        fs.writeFile('./tutorial/ttutorial.txt',"this is a sample file within folder",(err)=>{
            if(err) console.log(err);
            else console.log("created file within folder");
        });
    }
}); 



 //detele folder with file within folder
fs.unlink('./tutorial/ttutorial.txt',(err)=>{
  if(err) console.log(err);
  else{
    fs.rmdir('tutorial',(err)=>{
        if(err) console.log(err);
        else console.log("deleted");}
        );
  }
}); 



//delete files from folder with multiple files
fs.readdir('folderr',(err,files)=>{
    if(err) console.log(err);
    else {
        console.log(files);

        for(let file of files){
            fs.unlink('./folderr/'+ file,(err)=>{
                if(err) console.log(err);
                else console.log("deleted file");
            });
        }
    }
});


