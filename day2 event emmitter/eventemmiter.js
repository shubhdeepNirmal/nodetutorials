const EventEmitter = require('node:events');

class MyEmmitter extends EventEmitter {}
const myemit= new MyEmmitter();
myemit.on('event',()=>{
    console.log('event occured here');
});

myemit.emit('event');




//created a human class with constructor that returns the name of human
class human extends EventEmitter{
    constructor(name,age){
        super();
        this._name=name;
        this.umar=age;
    }

    get name(){
        return this._name;
    }

    
};

let shubh=new human('shubh',21);
shubh.on('name',()=>{
    console.log('my name is ' + shubh.name);
    console.log('my age is '+ shubh.umar);
});

shubh.emit('name');

let sakshi= new human('sakshi',21);
sakshi.on('paneer',()=>{
    console.log('her name  is '+ sakshi.name);
    console.log('her age is '+ sakshi.umar);}
);

sakshi.emit('paneer');
shubh.emit('name');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

