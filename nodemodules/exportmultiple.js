const pi= 3.14;
const sum =(num1,num2)=> num1+num2;
class anobj{
    constructor(){
        console.log('object created');
    }
}

module.exports.sum=sum;
module.exports.pi=pi;
module.exports.anobj = anobj;
