import React from 'react';
import {Bar} from 'react-chartjs-2';
import './App.css';
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Muhammad Saqib Progress BSCS',
      backgroundColor: ['red','green','blue','yellow','purple','brown','pink'],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 30]
    }
  ]
};

function App() {
 
return <div>
  <Bar
          data={data}
          width={100}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
</div>
}

export default App;
