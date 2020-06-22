import React from 'react';
import './App.css';
import './index.css'

function App() {
 function prepareFood(callback) {
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
return <div >
 <h1>Asynchronous function example</h1>
 {prepareFood(function (value)
 {
   console.log(value);
   prepareEgg(function (value)
   {
     console.log(value);
   }
   );
 })}
 </div>
}

export default App;
