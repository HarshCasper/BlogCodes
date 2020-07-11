import React, { Component } from 'react';

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: this.props.player,
            computer: null
        }
    }



    render() {
        console.log("Score Page ---" + this.props.player + "----" + this.props.computer)
        return (
            <div>

            </div>
        )
    }
}

export default Score;