console.log('Start!');

setTimeout(() => {console.log('Timeout!')})

Promise.resolve('Promise').then(res => console.log(res))

console.log('End!')