import React, { Component } from 'react';
import Score from './Score.js';

class Results extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                player: null,
                computer: null,
                result: null
            }

        this.playerWinner = this.playerWinner.bind(this);
    }

    playerWinner() {
        let player = this.props.player;
        let computer = this.props.computer;
        return (
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper") ||
            (player === "rock" && computer === "scissors")
        );
    }

    // componentDidMount(){
    //     this.playerWinner() ?
    //     this.setState({result : "You're a winner!"}) :
    //     this.setState({result : "You lose!"})
    //     console.log("--------" + this.state.result)
    // }

    render() {
        let player = this.props.player;
        let computer = this.props.computer;
        
        console.log("Results Page" + player + " " + computer)
        return (
            <div>
                <span>{player}</span><br />
                <span>{computer}</span><br/>
                <span>{this.state.result}</span>
                <Score player={player} computer={computer} />
            </div>
        )
    }
}

export default Results;