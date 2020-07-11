import React, {Component} from 'react';
import Results from './Results.js';

class RpsGame extends Component {
    constructor(props){
        super(props);      
        this.state =
        {
            player: null,
            computer: ['rock', 'paper', 'scissors'],
            selectedComp: null
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => 
    {
        this.setState(
            {
                [e.target.name]: e.target.value,
                selectedComp: this.state.computer[Math.floor(Math.random()*this.state.computer.length)]
            })
        console.log(this.state)
    }
    

    render(){
        let player = this.state.player;
        let computer = this.state.selectedComp;
        return(
            <div>
              <button onClick={this.handleClick} name="player" value="rock">Rock</button>
              <button onClick={this.handleClick} name="player" value="paper">Paper</button>  
              <button onClick={this.handleClick} name="player" value="scissors">Scissors</button>  <br/>
              <Results player={player} computer={computer}/>
            </div>
        )
    }
}

export default RpsGame;