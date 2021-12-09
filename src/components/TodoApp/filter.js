import * as React from "react"
 class Filter extends React.Component{
     constructor(props){
        super(props)
        this.state={
          // current status passed down from the parent component
          currentStatus:this.props.currentStatus
        }
     }

     handleFilterSelection = (event) => {
      // send the selection to the parent component
      const newStatus = event.target.value;
      this.props.filterList(newStatus);
     }

     componentDidUpdate = () =>{
        // Constantly observe if the prop is updated and if its not equal to state then update it. This is needed to update the value in <select>
       if(this.state.currentStatus !== this.props.currentStatus){
        this.setState({
          currentStatus:this.props.currentStatus
         })
       }
     }

     render(){
        return(
          <select value={this.state.currentStatus} onChange={this.handleFilterSelection}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        )
     }
 }

 export default Filter