import * as React from "react"
import "./style.css"

class TodoItem extends React.Component{
    // NOTE : From the props this component received the following info : the list of all todo, the individual todo which this will display, text to show in the component and its key
    constructor(props){
        super(props)
        this.state={
            complete:this.props.todo.status
        }
    }

    handleDeleteRequest = (event) => {   
        // send the object to be deleted to the parent
        this.props.deleteTodo(this.props.todo);
        event.preventDefault();        
    }

    handleCompleteRequest = (event) => {   
        // send the object that is completed to the parent
        this.props.completeTodo(this.props.todo);

        //change the state of the component
        this.setState({
            complete:!this.state.complete
        })

        // prevent page from refreshing
        event.preventDefault();        
    }



    render(){
        return(
            <form className={this.state.complete ? 'todoItem complete' : 'todoItem' }>
                <h3>
                    {this.props.text}
                </h3>
                <input type = "submit" value = "completed" onClick={this.handleCompleteRequest}/>
                <input type = "submit" value = "edit"/>
                <input type = "submit" value = "remove" onClick={this.handleDeleteRequest}/>
            </form>
        )
    }
}

export default TodoItem