import React,{Component} from 'react';

class Clock extends Component{

    constructor(props){
        super(props);
        this.state={
            days:0,
            hours:0,
            minutes:0,
            seconds:0
        }
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadLine);
    }

    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.props.deadLine),1000);
    }

    getTimeUntil(deadLine){
       const time =Date.parse(deadLine) -Date.parse(new Date()); 
       const seconds= Math.floor((time/1000)%60);
       const minutes = Math.floor((time/1000/60)%60);
       const hours = Math.floor(time/(1000*60*60)%24);
       const days = Math.floor(time/(1000*60*60*24));

       this.setState({days, hours, minutes,seconds});
    }

    render(){
        return(<div className="timer">
        <div className="clock">{this.state.days} days</div>
        <div className="clock">{this.state.hours} hours</div>
        <div className="clock">{this.state.minutes} minutes</div>
        <div className="clock">{this.state.seconds} seconds</div>
      </div>
      );
    }
}

export default Clock;