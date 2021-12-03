import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ComponenteSimples extends Component {
  render() {
    const { name } =this.props;
    return (
      <div>
        Olá, {name}
      </div>
    )
  }
}

ComponenteSimples.propTypes = {
  name: PropTypes.string.isRequired,
}

// JEITO TRYBE DE FAZER ACIMA

//  &

// DOCUMENTAÇÃO

// class HelloMessage extends React.Component {
//   render() {
//     return (
//       <div>
//         Olá, {this.props.name}!
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <HelloMessage name="Taylor" />,
//   document.getElementById('hello-example')
// );