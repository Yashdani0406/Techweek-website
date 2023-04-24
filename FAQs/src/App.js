import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
import faq from "./FAQs.png"

function App() {
  const [labelText, setLabelText] = useState("DEFAULT");
  const arr = [
    'First Text',
    'Second Text',
    'Third Text',
    'Fourth Text',
  ]
  function handleClick(index) {
    setLabelText(arr[index]);
  }
  return (
    <div className="App">
      <div className='image'>
        <img className='fq' src={faq} alt="map" />
      </div>
      <div className='container'>
        <div className="final">
          <div className="sq" onClick={() => { handleClick(0) }} >
            hello Urja
          </div>
          <div className="sq" onClick={() => { handleClick(1) }}>
            2
          </div>
          <div className="sq" onClick={() => { handleClick(2) }}>
            3
          </div>
          <div className="sq" onClick={() => { handleClick(3) }}>
            4
          </div>
        </div>
      </div>
      <div className='textbox'>

        {labelText}
      </div>

    </div>

  );
}

export default App;
