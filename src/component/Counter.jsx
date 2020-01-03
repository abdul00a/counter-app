import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'zero' : count;
  }

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
}

export default Counter;
