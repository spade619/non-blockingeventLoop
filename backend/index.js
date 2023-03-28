const express = require('express')
const app = express()

app.use(express.json())

const cors = require('cors');

app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000',
    methods:['GET', 'POST']
  }));


app.get('/', (req, res) => {
    res.send('Hello, World!');
  });


app.get('/api/red', async (req, res) => {
   
        for (let i =0; i <= 10000; i++){
           
            console.log(i)
            if(i==10000){
                break;
                // res.send('hello testing :)')
            }
        }
    
    await res.send('red')
    
   
})

app.get('/api/blue', async (req, res) => {
    for (let i =0; i <= 10000; i++){
        // setDisplayNum(i)
        console.log(i)
        if(i==10000){
            break;
            // res.send('hello testing :)')
        }
    }
   await res.send('blue')
    
   
})

app.get('/api/green', async (req, res) => {
    for (let i =0; i <= 10000; i++){
        // setDisplayNum(i)
        console.log(i)
        if(i==10000){
            break;
            // res.send('hello testing :)')
        }
    }
    await res.send('green')
    
   
})

app.get('/api/pink', async (req, res) => {
    for (let i =0; i <= 10000; i++){
        // setDisplayNum(i)
        console.log(i)
        if(i==10000){
            break;
            // res.send('hello testing :)')
        }
    }
   await res.send('pink')
    
   
})

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
   
    next()

})

// app.use('/api/red', workoutRoutes)

app.listen(4000, () => {
    console.log('server listeneing port 4000')
})