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
    this.setState({
        searchValue:event.target.value
    })
    }
    onButtonClick=()=>{
        let self=this;
        this.setState({
            cityName:self.state.searchValue
        })
        this.getWeatherData();
    }


    render(){
        return (
            <div>
                <input type='text'onChange={this.handleChange}></input>
                {console.log(this.state.searchValue)}
                <button onClick={this.onButtonClick}>Search</button>
                {console.log(this.state.cityName)}
                {this.state.isLoading?<CircularProgress/>:
                
                <Weatherpanel data={this.state.weatherData}/>
                }
            </div>
        );
    }
    
 
}

export default Weatherapp

