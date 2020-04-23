import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    //state는 object 이고, component의 data를 공간이있고 이 데이터는 변한다
    count : 0
  };
  constructor(props){
    super(props);
    console.log("hello");
  }
  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just updated")
  }
  
  add = () => {
    this.setState(current =>({count: current.count +1}));
  };
  minus = () => {
    this.setState(current =>({count: current.count -1}));
  };
  render(){
    console.log("i am rendering!");
  return (
    <div>
      <h1>the number is :  {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>);
  }
}

export default App;
