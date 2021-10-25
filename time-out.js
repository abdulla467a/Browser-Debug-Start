// synchronize way aktar por akta

function doSomething(){
    console.log('I am doing well')
}

console.log('First: i am the first');
console.log('second: i am the econd');
console.log('third: i am the third');

// doSomething();
// time out use krle akbare last a cole jabe


// Time set krte chaile 
// setTimeout(doSomething, 5000);


// function use kore + time use kore ai jaigai 5000 bolte 5 second bujaice kenona 1000 Ms = 1s
setTimeout(function(){
    console.log('i am using vs code');
},5000);
console.log('fourth: i am the fourth');

//  Aroow function use kore 
setTimeout( () =>{
    console.log('exploring Bomb')
},4000)
console.log('Fifth: i am the Fifth');
console.log('six: i am the six');