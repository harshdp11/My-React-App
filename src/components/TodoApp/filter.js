import * as React from "react"
 class Filter extends React.Component{
     constructor(props){
        super(props)
        this.state={

        }
     }

     handleFilterSelection = (event) => {
      // send the selection to the parent component
      const newStatus = event.target.value;
      this.props.filterList(newStatus);
     }

     render(){
         return(
            <select value={this.state.statusType} onChange={this.handleFilterSelection}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
         )
     }
 }

 export default Filter