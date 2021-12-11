import * as React from "react"
import Game from "./game"
import Square from "./square"

class Board extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            goNext:'X',
            moveCounter:0,
            gameOn:true,
            winner: '',
            gameHistory:Array(10).fill(Array(9).fill('')),
            saveHistory:[],
            board:Array(9).fill('')
        }
    }

    handleCallbackForUpdateNext = (nextMove) =>{
        let incrementMove = this.state.moveCounter;
        incrementMove++;
        this.setState({
            goNext:nextMove,
            moveCounter:incrementMove
        })
    }

    handleCallbackForSaving = (recentMove) =>{
        var temp = [];
        temp = [...this.state.saveHistory]
        temp.push(recentMove);

        this.setState({
            saveHistory:temp
        },
            () =>{
                this.updateGameHistory();
            }
        );
    }   

    updateGameHistory = () =>{
        let latestInput = Array(9).fill('');
        for(let i=0;i<this.state.saveHistory.length;i++){
            latestInput[this.state.saveHistory[i].position] = this.state.saveHistory[i].value;
        }

        this.state.gameHistory[this.state.moveCounter] = latestInput;
        this.setState({
            board:latestInput
        },()=>{
            this.checkWinner(this.state.board);
            console.log(this.state.gameHistory);
        });
        
    }

    checkWinner=(arr)=>{
        const winnerCheck = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
        console.log(arr);
        for(let cell=0; cell<winnerCheck.length; cell++){      
            let a = arr[winnerCheck[cell][0]];
            let b = arr[winnerCheck[cell][1]];
            let c = arr[winnerCheck[cell][2]];
            
            if( a===b && b===c && a===c && a!==''){
                console.log(a);
                this.setState({
                   gameOn:false,
                   winner: a
                });

                break;
            }
        }  
    } 

    render(){
        return(
            <div>
                <Game goNext={this.state.goNext} moveCounter={this.state.moveCounter} gameOn={this.state.gameOn} winner={this.state.winner}/>
                <div className="row row-1">
                    <Square gameStatus={this.state.gameOn} moveCounter={this.state.moveCounter} saveMoves={this.handleCallbackForSaving}  updateNext={this.handleCallbackForUpdateNext} buttonIndex='0' nextInput={this.state.goNext}/>
                    <Square gameStatus={this.state.gameOn} moveCounter={this.state.moveCounter} saveMoves={this.handleCallbackForSaving}  updateNext={this.handleCallbackForUpdateNext} buttonIndex='1' nextInput={this.state.goNext}/>
                    <Square gameStatus={this.state.gameOn} moveCounter={this.state.moveCounter} saveMoves={this.handleCallbackForSaving}  updateNext={this.handleCallbackForUpdateNext} buttonIndex='2' nextInput={this.state.goNext}/>
                </div>
                <div className="row row-2">
                    <Square gameStatus={this.state.gameOn} moveCounter={this.state.moveCounter}  saveMoves={this.handleCallbackForSaving}  updateNext={this.handleCallbackForUpdateNext} buttonIndex='3' nextInput={this.state.goNext}/>
                    <Square gameStatus={this.state.gameOn} moveCounter={this.state.moveCounter}  saveMoves={this.handleCallbackForSaving}  updateNext={this.handleCallbackForUpdateNext} buttonIndex='4' nextInput={this.state.goNext}/>
                    <Square gameStatus={this.state.gameOn} moveCounter={this.state.moveCounter}  saveMoves={this.handleCallbackForSaving}  updateNext={this.handleCallbackForUpdateNext} buttonIndex='5' nextInput={this.state.goNext}/>
                </div>
                <div className="row row-3">
                    <Square gameStatus={this.state.gameOn} moveCounter={this.state.moveCounter}  saveMoves={this.handleCallbackForSaving}  updateNext={this.handleCallbackForUpdateNext} buttonIndex='6' nextInput={this.state.goNext}/>
                    <Square gameStatus={this.state.gameOn} moveCounter={this.state.moveCounter}  saveMoves={this.handleCallbackForSaving}  updateNext={this.handleCallbackForUpdateNext} buttonIndex='7' nextInput={this.state.goNext}/>
                    <Square gameStatus={this.state.gameOn} moveCounter={this.state.moveCounter}  saveMoves={this.handleCallbackForSaving}  updateNext={this.handleCallbackForUpdateNext} buttonIndex='8' nextInput={this.state.goNext}/>
                </div>
                <button className="resetGame" type="submit" value="reset" onClick={this.resetGame}>Reset Game</button>
            </div>
        )
    }
}

export default Board