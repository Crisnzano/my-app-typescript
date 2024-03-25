import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import PropDrilling from './component/PropDrilling';
import Context from './component/Context';
import MyForm from './component/Form';

function App() {
  return (
  <div className='center'>
   <Counter initialCount={300}/>
   <PropDrilling/>
   <Context/>
   <MyForm/>
  </div>

  );
}

export default App;
