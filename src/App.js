import React from 'react';
import './App.css';
import './index.css'

function App() {
 /*function prepareFood(callback) {
    setTimeout(()=>
    {
      console.log("prepare paratha");
      callback("paratha is ready");

    },10);
  }
  function prepareEgg(callback) {
    setTimeout(()=>
    {
      console.log("prepare Amlet");
      callback("Amlet is ready");

    },20);
  }
  */
 function prepareFood(data) {
   let promise = new Promise(function(resolve,reject)
   {
     console.log("prepare food");
     resolve("food is ready")
   })
 return promise;
}

function prepareMilkShake(data) {
  let promise = new Promise(function(resolve,reject)
  {
    console.log("prepare MilkShake");
    resolve("Milkshake is ready")
  })
  return promise;
}
async function startProcess() {
  let foodValue = await prepareFood();
  console.log(foodValue);
  let milshakeValue= await prepareMilkShake();
  console.log(milshakeValue);
}
startProcess();
return <div >
 <h1>Asynchronous function example</h1> <h3>Check console</h3> 
 </div>
}

export default App;
