import React, {Component} from 'react';
import './Header.css';
import './NewsList.js';

class Header extends Component {
    
    constructor(){
        super()

        this.state={
            title:'Reboot Rx',
            userInput:''
        }
        
    }

    inputChange(event){
        this.setState({userInput:event.target.value?event.target.value:''})
        this.props.newsSearch(event.target.value)
        
    }

    render(){
        return(
            <header>
                <img src = "/images/Original.png" alt=""/>
                {/* <div className="logo"
                onClick={()=>{console.log('header clicked')}}>

                {this.state.title}
                </div> */}
                <center>
                    <input className = "SearchBar" placeholder="Enter Drug name for e.g. Chloroquine or Losartan" onChange={this.inputChange.bind(this)}/>
                </center>
                <p>You searched for "{this.state.userInput}"</p>
            
            </header>
        )
    }
}

export default Header;



