//used to create , read delte files and folders

const fs= require('fs');

//create file;

fs.writeFile('example.txt',"this is an example",(err)=>{
    if(err)
     console.log(err);
    else  
       {
          console.log('File created successfully');
          //read file
          fs.readFile('example.txt','utf8',(err,file)=>{
            if(err) {
                console.log(err);
            }
            else {
                console.log(file);
            }
        });
}});