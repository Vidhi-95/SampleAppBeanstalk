import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    
    constructor(){
        super()

        this.state={
            title:'Reboot Rx App',
            userInput:'Search for Population here'
        }
        
    }

    inputChange(event){
        this.setState({userInput:event.target.value?event.target.value:'Search for Population here'})
        this.props.newsSearch(event.target.value)
    }

    render(){
        return(
            <header>
                <div className="logo"
                onClick={()=>{console.log('header clicked')}}>

                {this.state.title}
                </div>
                <center>
                    <input onChange={this.inputChange.bind(this)}/>
                </center>
                <p>{this.state.userInput}</p>
            </header>
        )
    }
}

export default Header;



