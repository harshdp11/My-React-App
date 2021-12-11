import * as React from "react"
import './tictactoe.css'

class Square extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            buttonContent: '',
            gameHistory: Array(9).fill(Array(9).fill('')),
            moveCounter: this.props.moveCounter
        }
    }

    handleInput = () =>{
        if(this.state.buttonContent === '' && this.props.gameStatus){
            this.setState({
                buttonContent:this.props.nextInput
            },()=>{
               
               const recentMove = {
                   step: this.props.moveCounter,
                   position: this.props.buttonIndex,
                   value:this.props.nextInput
               }
               this.props.saveMoves(recentMove);

                if(this.props.nextInput === 'X'){ 
                    this.props.updateNext('O');
                }

                else{
                    this.props.updateNext('X');
                }
            })
        }
    }

    render(){
        return(
            <button value={this.state.buttonContent} onClick={this.handleInput}>{this.state.buttonContent}</button>
        )
    }
}

export default Square