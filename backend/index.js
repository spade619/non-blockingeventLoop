const express = require('express')
const app = express()
const {Worker} = require('worker_threads')

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
   const worker = new Worker('./worker1.js')
       
    worker.on('message', (data) => {
        res.status(200).json({data})
        })
   
})

app.get('/api/blue', async (req, res) => {
    const worker = new Worker('./worker2.js')
       
    worker.on('message', (data) => {
        res.status(200).json({data})
        })
   
})

app.get('/api/green', async (req, res) => {
    const worker = new Worker('./worker3.js')
       
    worker.on('message', (data) => {
        res.status(200).json({data})
        })
})

app.get('/api/pink', async (req, res) => {
    const worker = new Worker('./worker4.js')
       
    worker.on('message', (data) => {
        res.status(200).json({data})
        })
   
})

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
   
    next()

})

// app.use('/api/red', workoutRoutes)

app.listen(4000, () => {
    console.log('server listeneing port 4000')
})