// Interval timeout............



console.log('first');
// setInterval(() => {
//     console.log('tik tik tik tik')
// }, 1000);



// let seconds = 0;
// setInterval(() => {
//     seconds++;
//     console.log(seconds);
// }, 1000);

// time interval time continous colar jonno use kora hoi


//  let seconds = 0;
//  const timeId = setInterval(() => {
//     seconds++;
//     console.log(seconds);
//     if(seconds>15){
//         clearInterval(timeId);
//     }
// }, 1000);


let seconds = 0;
const timeId = setInterval(() => {
//    seconds++;

//    console.log(seconds++);

console.log(++seconds);
   if(seconds>15){
       clearInterval(timeId);
   }
}, 1000);







console.log('Second');
