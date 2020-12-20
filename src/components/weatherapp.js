import React from 'react'
import {Apicall} from './api-call';
import { CircularProgress} from '@material-ui/core';
import Weatherpanel from './weatherPanel';

class Weatherapp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cityName:'Kathmandu',
            weatherData:{},
            isLoading:true,
        }
    }
    componentDidMount() {
        this.getWeatherData();
  }
    getWeatherData=()=>{
            let self=this;
            Apicall.Weatherapicall(this.state.cityName).then(response=> {
                self.setState({
                    weatherData:response.data,
                    isLoading:false
                })
        }).catch(function (error){
            console.log(error);
            console.log('from catch');
        });
    }
    handleChange=(event)=>{
    let self=this;
    this.setState({
        cityName:event.target.value
        
    })
    console.log(event.target.value)
    }
    onButtonClick=()=>{
        this.setState({
            isLoading:true,
        })
        this.getWeatherData();
    }


    render(){
        return (
            <div style={{minWidth:'830px'}}>
                <input type='text'style={{width:"75%",minWidth:'300px',padding:'10px 10px',margin:'2px 8px',borderRadius:'6px',border:'solid blue'}} 
                placeholder='Enter a place...'onChange={this.handleChange}></input>
                <button style={{float:"right",width:'18%',minWidth:"60px",padding:'10px 10px',margin:'2px 8px',backgroundColor:'blue',color:'white',borderRadius:'6px',cursor:'pointer'}}
                onClick={this.onButtonClick}>Search</button>
                {console.log(this.state.cityName)}
                <div>
                {this.state.isLoading?<CircularProgress/>:
                
                <Weatherpanel data={this.state.weatherData}/>
                
                }
                </div>
            </div>
        );
    }
    
 
}

export default Weatherapp

