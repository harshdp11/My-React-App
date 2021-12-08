import * as React from "react"
import "./style/TestStateful.css"

class TestStateful extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            hasScrolled:false
        }
    }

    componentDidMount = () =>{
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = event =>{
        const scrollTop = window.pageYOffset
         if(scrollTop < 50){
             this.setState({hasScrolled:true})
         }
         else{
            this.setState({hasScrolled:false})
        }
    }

    render(){
        return(
            <div className={this.state.hasScrolled ? 'state scrolled' : 'state' }>
                <h3>hello ji</h3>
            </div>
        )
    }
}

export default TestStateful