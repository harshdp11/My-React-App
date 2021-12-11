import * as React from "react"

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h2 className={(this.props.gameOn && this.props.moveCounter<9) ? 'show' : 'hide' }>{this.props.goNext} goes next</h2>
                <h2 className={!this.props.gameOn ? 'show' : 'hide' }>{this.props.winner} won the game</h2>
                <h2 className={(this.props.gameOn && this.props.moveCounter===9) ? 'show' : 'hide' }>Draw! restart game</h2>
            </div>
        )
    }
}

export default Game