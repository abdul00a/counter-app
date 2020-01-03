import React, { Component } from 'react';
import Counter from '../component/Counter';

class Counters extends Component {
  state = {
    Counters: [
      {
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };

  handleIncrement = counter => {
    const Counters = [...this.state.Counters];
    const index = Counters.indexOf(counter);
    Counters[index] = { ...counter };
    Counters[index].value++;
    this.setState({ Counters });
  }; 

  handleDelete = counterID => {
    const counters = this.state.Counters.filter(c => c.id !== counterID);
    this.setState({ Counters: counters });
  };

  handleReset = () => {
    const counters = this.state.Counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ Counters: counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.Counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
