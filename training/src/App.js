import React from 'react';
import './App.css';
import ComponenteComState from './components/ComponenteComState/ComponenteComState';
import ComponenteSimples from './components/componenteSimples/ComponenteSimples';
import AplicacaoTodoList01 from './components/UmaAplicacao/AplicacaoTodoList01';

function App() {
  return (
    <div>
      <ComponenteSimples name="Douglas" />
      <ComponenteComState />
      <AplicacaoTodoList01 />
    </div>
  );
}

export default App;
