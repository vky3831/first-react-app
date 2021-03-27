import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-success btn-sm m-2">Increment</button>
            <button onClick={() => this.props.onDecrement(this.props.counter)} className={this.getDecrementClasses()}>Decrement</button>
            <button onClick={() => this.props.onResetOne(this.props.counter)} className="btn btn-secondary m-2 btn-sm">Reset</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
        </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : (this.props.counter.value < 0 ? "danger" : "primary");
        return classes;
    }
    getDecrementClasses(){
        let classes = "btn btn-warning m-2 btn-sm "
        classes += this.props.counter.value === 0 ? "disabled" : "";
        return classes;
    }
    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;