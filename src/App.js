import React from 'react';
import { DataProvider } from './GlobalState';
import HomePage from './components/homepage';

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <HomePage />
      </div>
    </DataProvider>
  );
}

export default App;
