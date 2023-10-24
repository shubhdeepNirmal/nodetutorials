const pi= 3.14;
const sum =(num1,num2)=> num1+num2;
class anobj{
    constructor(){
        console.log('object created');
    }
}

//export type1
module.exports.sum=sum;
module.exports.pi=pi;
module.exports.anobj = anobj;

//export type2
module.exports{ sum:sum, PI:pi,CLASSOBJ:anobj};
