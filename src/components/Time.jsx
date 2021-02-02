import React, { Component } from 'react';

class Time extends Component {
    state= {
        date: new Date()
    };

    callme(){
        setInterval(()=>{
            this.setState( {date:new Date()});
        },1000)
    }

    
    render() {
        return (
            <div className="App">
                <h1> Welcome to Home Page</h1>
             <h2>{this.state.date.toGMTString()}</h2>   
             {this.callme()}
             
            </div>
        )
    }
}

export default Time;
