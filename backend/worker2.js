const {parentPort} = require('worker_threads')

for (let i =0; i <= 10000; i++){
           
    console.log(i)
    if(i==3000){
        break;
        // res.send('hello testing :)')
    }
}

parentPort.postMessage('blue')