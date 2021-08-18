import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Rotas from './router'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  );
}

export default App;

