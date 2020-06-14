import React,{useState, useReducer} from 'react';
import './App.css';
import './index.css';
import Parent from './Parent';
import valueContext from './valueContext';

function App() {
  let value=useState(48);
  
return (
<valueContext.Provider value={value}>
    <div>
      Hello world
      <Parent/>
    </div>
  </valueContext.Provider>
);
}

export default App;
