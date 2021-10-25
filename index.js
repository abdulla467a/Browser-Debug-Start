console.log(111111111);
console.log(222222222);
console.log(333333333);
console.log(4444444444);
setTimeout (()=> console.log('aaaaaaaaaaaaaa'),4000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

console.log(555555555);

for( let i = 0; i < 40000; i++){
    console.log(i);
}