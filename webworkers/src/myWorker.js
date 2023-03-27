/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('message', (event) => {
    const result = event.data * 2;
    /* eslint-disable-next-line no-restricted-globals */
    self.postMessage(result);


    for (let i =0; i <= 100000; i++){
            // setDisplayNum(i)
            console.log(i)
            if(i==100000){
                break;
            }
        }
        
  });
