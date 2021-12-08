import * as React from "react"
import Filter from "./filter"
import TodoItem from "./todoItem"
import UserInput from "./userInput"

class TodoApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // this array will contain all inputs from the user. Data is passed from child comp and copied here so that the info is accessible to the whole component
            todoList:[],
            filteredList:[]
        }
    }

    handleCallbackforAddInput = (newInput) =>{
        // create a copy of the current state in temporary array
        let tempStateCloneArray = [];
        tempStateCloneArray = this.state.todoList;

        //add the new element to the temporary array
        tempStateCloneArray.push(newInput);

        // update the state
        this.setState({ 
            todoList:tempStateCloneArray
        });      

        console.log('after addition array : ', this.state.todoList);
    }

    handleCallbackforDelete = (itemToDelete) =>{
        // create a copy of the current state in temporary array
        let tempStateCloneArray = [];
        tempStateCloneArray = this.state.todoList;

        //remove the element from which delete request was sent
        tempStateCloneArray=tempStateCloneArray.filter ( (el) => el.id !== itemToDelete.id);

        // update the state
        this.setState({ 
            todoList:tempStateCloneArray
        });      
        console.log('after deletion array : ',this.state.todoList);
    }

    handleCallbackforComplete = (itemToComplete) =>{
        // create a copy of the current state in temporary array
        let tempStateCloneArray = [];
        tempStateCloneArray = this.state.todoList;

        //find the item in list and update its status
        tempStateCloneArray.find(el => el.id===itemToComplete.id).status  =  !tempStateCloneArray.find(el => el.id===itemToComplete.id).status ;
        
        // update the state
        this.setState({ 
            todoList:tempStateCloneArray
        }); 
        console.log('after completion array : ',this.state.todoList);
    }

    handleCallbackforFilter = (statusToShow) =>{
        //console.log(statusToShow);

        if(statusToShow === 'all'){
            console.log('show all');

            this.setState({
                
            })
        }

        else if(statusToShow === 'completed'){
            console.log('show completed');
        }

        else{
            console.log('show incomplete');
        }


    }


    render(){
        return(
            <div className="todoApp">
                <UserInput receiveInput={this.handleCallbackforAddInput}/>
                <Filter filterList={this.handleCallbackforFilter}/>
                {this.state.todoList.map ( (todo) => (
                    <div>
                        <TodoItem key={todo.id} completeTodo={this.handleCallbackforComplete} deleteTodo={this.handleCallbackforDelete} todo={todo} text={todo.name} />
                    </div>
                ))}
            </div> 
        )
    }
}

export default TodoApp