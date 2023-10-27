const readline = require('readline');

const rl= readline.createInterface({input: process.stdin, output: process.stdout});

let n1= Math.floor((Math.random()*10+1));
let n2= Math.floor((Math.random()*10+1));
let ans=n1+n2;

rl.question(`What is  ${ n1 } + ${ n2 }  ?\n`,(userInput)=>{
    if(userInput.trim()==ans){
        rl.close();
    }
    else{
         rl.setPrompt('incorrect , try again!!!\n');
         rl.prompt();
         //setloop condition if wromng again check until right
         rl.on('line',(userInput)=>{
            if(userInput.trim()==ans) {
                rl.close();
            }
            else{
            rl.setPrompt('NO, try again!!!\n');
            rl.prompt();
            }
         });
    }
}); 


rl.on('close',()=>{
    console.log("yeah baby!!! that's correct");
    console.log("closed the app");
});


