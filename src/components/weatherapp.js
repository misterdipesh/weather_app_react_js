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
            searchValue:''
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
    }
    onButtonClick=()=>{
        this.setState({
            isLoading:true,
        })
        this.getWeatherData();
    }


    render(){
        return (
            <div>
                <input type='text' placeholder='Enter a place...'onChange={this.handleChange}></input>
                {console.log(this.state.searchValue)}
                <button onClick={this.onButtonClick}>Search</button>
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

