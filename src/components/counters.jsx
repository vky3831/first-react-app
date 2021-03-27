import React, { Component } from 'react';
import Counter from './counter';

class counters extends Component {
    render() { 
        const {onResetAll, counters, onDelete, onIncrement, onAdd, onDecrement, onResetOne} = this.props;
        return ( 
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={onResetAll}>Reset All</button>
                {counters.map(counter => <Counter 
                    key={counter.id}  
                    onDelete={onDelete}
                    onIncrement={onIncrement} 
                    onDecrement ={onDecrement}
                    onResetOne = {onResetOne}
                    counter = {counter}
                    />)}
                <button className="btn btn-primary btn-sm m-2" onClick={onAdd}>Add</button>
            </div>
         );
    }
}
 
export default counters;