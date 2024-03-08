console.log('Start!')

setTimeout(() => {console.log('Timer!')})

Promise.resolve('Promise').then(res => console.log(res))

console.log('End!')

//Start
//Timer
//Promise
//End