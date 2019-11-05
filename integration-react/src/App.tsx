import React from 'react';
import './App.css';
import CountValue from './components/CountValue'

const App: React.FC = () => {
  return (
    <div className="App">
     <CountValue count = {222} />
    </div>
  );
}

export default App;
