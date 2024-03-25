import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import PropDrilling from './component/PropDrilling';
import Context from './component/Context';
import MyForm from './component/Form';
import Fruit from './component/Fruit';
import { AppleTree } from './component/AppleTree';
import { AnimalProvider } from './provider/AnimalContextProvider';
import Color from './component/Color';
import Species from './component/Species';

function App() {
  return (
  <div className='center'>
      <Counter initialCount={300}/>
      <PropDrilling/>
      <Context/>
      <MyForm/>
      <AppleTree/>
    <AnimalProvider>
      <Color/>
      <Species/>
    </AnimalProvider>
    

  </div>

  );
}

export default App;
