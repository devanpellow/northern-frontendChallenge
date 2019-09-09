import React, {useState} from 'react';
import InternForm from './Components/InternForm'
import Header from './Components/Header'
import Thankyou from './Components/Thankyou'

import './App.css';

function App() {

  const[hasSubmitted, setHasSubmitted] = useState(false)

  return (
    <div className="App">
      <Header />
      {hasSubmitted ? <Thankyou /> : <InternForm setHasSubmitted={setHasSubmitted}/> }
    </div>
  );
}

export default App;
