import React, { useState,useEffect } from 'react';
import './App.css';
import './index.css'

function App() {

  let data ={title : "waiting for data"}
  const [todo,setTodo]= useState(data);
  const [isData, setData] = useState(false);
  const [isFetching, setFetching] = useState(false);

  useEffect(()=> {
    async function fetchData(){
      setFetching(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log("response = ",response);
      let data2 = await response.json()
      setTodo(data2); 
      setFetching(false); 
      console.log("Data = ",todo);
    }
    fetchData();
  },[isData]);

if(isFetching){
  return <div>Data Loading.....</div>
}

return <div >
  <h1>This is about fetch data</h1>
<span>Title = {todo.title}</span>
 </div>
}

export default App;
