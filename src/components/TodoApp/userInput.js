import * as React from "react"

class UserInput extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    handleSubmit = (event) => {
        //store user inputs in an object
        const userInput = {
            name: event.target.myname.value,
            status:false,
            id: Math.floor( Math.random() * 100000 + Math.random() * 100000 )
        }

        // send the input data to the parent component
        this.props.receiveInput(userInput);

        
        // the the input feild after submit has been clicked
        event.target.myname.value=null;
        event.preventDefault();
    }

    render(){
        return(
            <form className="addNewTodo" onSubmit = {this.handleSubmit}>
                <input type = "text" 
                name = "myname" placeholder = "Enter Task"/>
                <input type = "submit" value = "Submit"/>
            </form>
        )
    }
}

export default UserInput