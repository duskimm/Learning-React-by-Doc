import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import AplicacaoTodoList01suport from './AplicacaoTodoList01suport';

export default class AplicacaoTodoList01 extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      text: '',
    };
  }

  // static propTypes = {
  //   prop: PropTypes
  // }

  handleChange = (event) => { // registra/guarda o digitado no input
    this.setState({text: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.text.length === 0) {
      return;
    }

    const newItem = {
      text: this.state.text,
      id: Date.now() // Cria um Id com base na data atual
    };

    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  }


  render() {
    return (
      <div>
        <h3>Tarefas</h3>
        <AplicacaoTodoList01suport items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label>
            O que precisa ser feito?
            <input
              id="new-todo"
              onChange={ this.handleChange }
              value={this.state.text}
            />
          </label>
          <button>
            Adicionar #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    )
  }
}
