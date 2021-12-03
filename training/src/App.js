import React from 'react';
import './App.css';
import ComponenteComState from './components/ComponenteComState/ComponenteComState';
import ComponenteSimples from './components/componenteSimples/ComponenteSimples';

function App() {
  return (
    <div>
      <ComponenteSimples name="Douglas" />
      <ComponenteComState />
    </div>
  );
}

export default App;
