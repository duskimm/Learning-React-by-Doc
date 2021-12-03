import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class AplicacaoTodoList01suport extends Component {
  // static propTypes = {
  //   items: PropTypes,
  // }

  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
}
