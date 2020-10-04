import React, {Component} from 'react';
import Clock from './Clock'; 
 
class App extends Component{
  constructor(props){
    super(props);
    this.state={deadLine: 'December 31 2099',
    newDeadLine:''
  }}

  changeDeadLine(){
    this.setState({deadLine:this.state.newDeadLine});
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadLine}</div>
        <Clock deadLine={this.state.deadLine}/>
        <div className="button">
          <input placeholder='new date' className="textarea" onChange={event=> this.setState({newDeadLine:event.target.value})}/>
          <button className="send" onClick={()=>this.changeDeadLine()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
