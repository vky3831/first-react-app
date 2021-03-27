import React, { Component } from 'react';
import NavBar from "./components/navbar";
import Counters from "./components/counters"
import './App.css';


class App extends Component {
  
  state = { 
    counters: [
        
    ],
    newId: 0,
    sum: 0
 };

 handleDelete = counterId =>{
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({counters});
 };

 handleIncrement = counter => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value++
     this.setState({counters});
 };

 handleDecrement = counter =>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  let val = --counters[index].value;
  counters[index].value = val < 0 ? 0 : val; // restricts negative numbers
  this.setState({counters});
 }

 handleResetOne = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value = 0;
  this.setState({counters});
};

 handleResetAll = () =>{
     const counters = this.state.counters.map(c => {
         c.value = 0;
         return c;
     });
     this.setState({counters});
 }

 handleAdd = () => {
  const counters = [...this.state.counters];
  counters.push({id:this.state.newId , value:0});
  this.setState({counters, newId: this.state.newId+1});
 };

  render() { 
    return ( 
      <React.Fragment>
    <NavBar totalCounters = {this.state.counters.filter(c => c.value >0).length} 
    totalSum = {this.state.counters.reduce((a,v) => a = a + v.value, 0)} />
    <main className="container">
      <Counters 
      onDelete={this.handleDelete}
      onIncrement = {this.handleIncrement}
      onResetAll = {this.handleResetAll}
      counters = {this.state.counters}
      onAdd = {this.handleAdd}
      onDecrement = {this.handleDecrement}
      onResetOne = {this.handleResetOne}
      />
    </main>
    </React.Fragment>
     );
  }
}
 
export default App;
