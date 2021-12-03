import React, { Component } from 'react'

export default class ComponenteComState extends Component {
  constructor() {
    super();
    this.state = { seconds: 0 };
  }

  tick = () => {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Segundos: {this.state.seconds }
      </div>
    )
  }
}

// DOCUMENTAÇÃO

// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//   }

//   tick() {
//     this.setState(state => ({
//       seconds: state.seconds + 1
//     }));
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div>
//         Segundos: {this.state.seconds}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Timer />,
//   document.getElementById('timer-example')
// );