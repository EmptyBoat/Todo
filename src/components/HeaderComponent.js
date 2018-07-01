import React, { Component } from 'react';
import logo from '../logo.svg';
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <header
            style={{
                backgroundColor: "#e18c6a",
                position:"relative",
                marginTop: 0,
                padding:"10px 20px"
              
            }} 
            >
            <span
            style={{
                color: "#fff",
                
                fontSize: 25
            }}
            >
       TODO LIST ::
      
     </span>
      <img src={logo} className="App-logo" alt="logo" />
   </header>

        );
    }
}

export default HeaderComponent; 