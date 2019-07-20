import React, { Component } from 'react';
import Console from './console';
import Stats from './stats';
import Controller from './controller';

class App extends Component {
  constructor () {
    super();

    this.state = {
      console_messages: ['welcome to universal farms'],
      dollars: 0,
      fruit: 0,
      seeds: 10,
      acres: 1,
    }

    this.plant_seed = this.plant_seed.bind(this);
    this.sell_fruit = this.sell_fruit.bind(this);
    this.buy_seeds = this.buy_seeds.bind(this);
  }
  
  plant_seed () {
    if(this.state.seeds > 0) {
      this.setState({fruit: this.state.fruit + 1, seeds: this.state.seeds - 1});
    }
  }

  sell_fruit () {
    if(this.state.fruit > 0) {
      this.setState({fruit: this.state.fruit - 1, dollars: this.state.dollars + 5 });
    }
  }

  buy_seeds () {
    if (this.state.dollars > 0) {
      this.setState({seeds: this.state.seeds + 1, dollars: this.state.dollars - 1 });
    }
  }

  render () {
    return (
      <div className="app-wrapper">
        <Console messages={this.state.console_messages}/>
        <Stats dollars={this.state.dollars} fruit={this.state.fruit} seeds={this.state.seeds} acres={this.state.acres}/>
        <Controller plant_seed={this.plant_seed} sell_fruit={this.sell_fruit} buy_seeds={this.buy_seeds}/>
      </div>
    )
  }
}

export default App;
