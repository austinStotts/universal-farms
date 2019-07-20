import React, { Component } from 'react';

class Controller extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="controller-wrapper">
        <button className="controller-plant-seed" onClick={this.props.plant_seed}>plant seed</button>
        <button className="controller-plant-seed" onClick={this.props.sell_fruit}>sell fruit</button>
        <button className="controller-plant-seed" onClick={this.props.buy_seeds}>buy seed</button>
      </div>
    )
  }
}

export default Controller;