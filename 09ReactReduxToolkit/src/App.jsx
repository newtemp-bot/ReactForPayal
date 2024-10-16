import React from 'react'
import Counter from "./features/counter/Counter";
import { useSelector } from 'react-redux';

const App = () => {
  let count = useSelector((state)=>state.counter.value);
  return (
    
    <div>
      {count}
      <Counter/>
    </div>
  )
}

export default App