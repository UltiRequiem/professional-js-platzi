const asynPrint = (isError) => 
  // eslint-disable-next-line no-new
   new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) {
        reject(new Error('Error'));
      } else {
        resolve('Hello');
      }
    }, 1000);
  })
;

let greeting;
// eslint-disable-next-line no-return-assign
const a = asynPrint().then((x) => (greeting = x));
console.log(a);
setTimeout(() => console.log(greeting), 1000);
console.log(greeting);
