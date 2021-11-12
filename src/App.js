import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './GlobalState';
import Header from './components/header/Header';
import MainPage from './components/mainpages/MainPage';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className='App'>
          <Header />
          <MainPage />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
