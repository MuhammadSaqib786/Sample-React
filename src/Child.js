import React,{useContext} from 'react';
import valueContext from './valueContext';

function Child() {
  
    let value = useContext(valueContext);
    return (
    <div>
            child number = {value}
            <button onClick={()=>{ value[1](++value[0]) }}>
                update value
            </button>
    </div>

    );


}

export default Child;