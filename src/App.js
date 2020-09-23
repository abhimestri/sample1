import React from 'react';
import './App.css'
import Mainblock from './components/displayBlock'

function App() {
  return (
    <div className="APP">
      <div className="Header"><p>header</p></div>
      <Mainblock/>
      <footer className="footer"><p>footer</p></footer>
    </div>
  );
}

export default App;
