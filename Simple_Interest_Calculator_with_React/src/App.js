import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


type State = {
  data: {
    principle: number,
    time: number,
    rate: number  
  },
  interest: number
};

class App extends Component<State> {
  constructor(){
    super()
    this.state= {
      data: {
        principle: 0,
        time: 0,
        rate: 0
      },
      interest: 0
    }
  }
  calculate_interest(){
    let p = this.state.data.principle;
    let t = this.state.data.time;
    let r = this.state.data.rate;
    let interest_calculated = (p * t * r)/100;
    console.log(interest_calculated)
    this.setState({interest: interest_calculated})
  }
  handleInput(attribute: string, event: SyntheticEvent<HTMLButtonElement>){
    let context = attribute;
    let input = this.state.data;
    let value = event.currentTarget.value;
    input[context] = value;
    this.setState({
      data: input
    })
  }
  render() {
    return (
      <div>
        <div className="calculator-container">
          <div>
            <label>principle</label>
            <input type="number" name="principle" placeholder="principle" onChange={this.handleInput.bind(this, 'principle')}/>
          </div>
          <div>
            <label>time</label>
            <input type="number" name="time" placeholder="time" onChange={this.handleInput.bind(this, 'time')}/>
          </div>
          <div>
            <label>rate</label>
            <input type="number" name="rate" placeholder="rate" onChange={this.handleInput.bind(this, 'rate')}/>
          </div>
          <button type="submit" onClick={this.calculate_interest.bind(this)}> Calculate </button>
          <div>Interest: {this.state.interest}</div>
        </div>
      </div>
    );
  }
}

export default App;
