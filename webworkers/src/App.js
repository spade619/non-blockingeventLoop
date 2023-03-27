
import { useEffect, useState } from 'react';
import './App.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader?filename=./my-worker.js!./myWorker.js';

function App() {

  const [changeColor, setChangeColor] = useState('white')
  let [display, setDisplay] = useState(null)

  const [result, setResult] = useState(null);

 
  
  

 
  const mystyle ={
    background: changeColor
  }


 
//  const handleStart = () => {
//   const myWorker = new Worker();
//   myWorker.onmessage = (event) => {
//     setResult(event.data);
//     myWorker.terminate();
//   };
//   myWorker.postMessage(10);
 
//  } 




 


  const handleClick = (color) =>{
    
              setChangeColor(color)

              if(color === 'red'){

                const fetchRed= async () => {
                  const response = await fetch('http://localhost:4000/api/red', {
                        method: 'GET'
                  })
                    
                  
                  const json = await response.text()
                  if(response.ok){
                      
                    console.log(json)
                    setResult(json)
                   
                  }
              }
          
              fetchRed()
              }else if(color === 'blue'){
                const fetchRed= async () => {
                  const response = await fetch('http://localhost:4000/api/blue', {
                        method: 'GET'
                  })
                    
                  
                  const json = await response.text()
                  if(response.ok){
                      
                    console.log(json)
                    setResult(json)
                   
                  }
              }
          
              fetchRed()

                
              }else if(color === 'green'){
                const fetchRed= async () => {
                  const response = await fetch('http://localhost:4000/api/green', {
                        method: 'GET'
                  })
                    
                  
                  const json = await response.text()
                  if(response.ok){
                      
                    console.log(json)
                    setResult(json)
                   
                  }
              }
          
              fetchRed()
              }else if(color === 'pink'){
                const fetchRed= async () => {
                  const response = await fetch('http://localhost:4000/api/pink', {
                        method: 'GET'
                  })
                    
                  
                  const json = await response.text()
                  if(response.ok){
                      
                    console.log(json)
                    setResult(json)
                   
                  }
              }
          
              fetchRed()
              }else{
                  console.log('testing error')
              }
             
  }

 

 

  
  return (
    <div className="App">
      <section id='firstSection'></section>

      <section id='secondSection'  style={mystyle}>


        <div id='workerContainer'>

      <div id='workersHolder'>
            <div className='workersTesting'>
                <h4> This Data is Fetched From Backend :  {result}</h4>
            </div>
      </div>

            {/* <button id='startButton' onClick={() => handleStart()}>START</button> */}

      <div id='buttonClicker'>
            <button onClick={() =>handleClick('red')}>Red</button>
            <button onClick={() =>handleClick('blue')}>Blue</button>
            <button onClick={() =>handleClick('green')}>Green</button>
            <button onClick={() =>handleClick('pink')}>Pink</button>
      </div>
        </div>
    
        
        

      </section>

    </div>
  );
}

export default App;
