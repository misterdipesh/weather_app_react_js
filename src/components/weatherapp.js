import React from 'react'
import {Apicall} from './api-call'

class Weatherapp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cityName:'Kathmandu',
            weatherData:{},
            isLoading:true
        }
    }
    componentDidMount() {
        this.getWeatherData();
  }
    getWeatherData=()=>{
            let self=this;
            Apicall.Weatherapicall('Kathmandu').then(function (response) {
                console.log(response.data);
                self.setState({
                    whetherData:response.data,
                    isLoading:false
                })
        }).catch(function (error){
            console.log(error);
            console.log('from catch');
        });
    }


    render(){
        return (
            <div>
                hello weather
                {console.log('hwllo')}
            
                
                
            </div>
        );
    }
    
 
}

export default Weatherapp

