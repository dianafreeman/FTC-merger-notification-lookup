/* eslint-disable */
import React, { Component } from "react"; 
import ReactDOM from 'react-dom';
import '@babel/polyfill';


class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [],
      error: null,
      isLoading: false,

    }
  }
  componentDidMount(){
      fetch('/data')
            .then(response => response.json())
            .then(resp => this.setState({ data: resp.data, isLoading: false }))
            .catch(error => this.setState({ error }));  

  }
  render() {
    return (
      <div>
    Hello React,Webpack 4 & Babel 7!
    </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
