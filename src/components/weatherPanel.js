import { Card, Grid } from '@material-ui/core';
import React,{Component} from 'react'



class Weatherpanel extends Component {
    render() {
        let weather=this.props.data;
        return (
            <div>
               <Card style={{minWidth:'350px',backgroundColor:'blueviolet',color:'white',margin:'10px 10px',padding:'10px 10px'}}>
                   <div style={{fontSize:16}}>
                       {new Date().toDateString()}
                   </div>
                   <div style={{fontSize:20,fontWeight:900,marginTop:8}}>
                       {weather.name},{weather.sys.country}
                   </div>
                   <div>
                       Sunrise : {new Date(weather.sys.sunrise*1000).toLocaleString()}
                   </div>
                   <div>
                       Sunset : {new Date(weather.sys.sunset*1000).toLocaleString()}
                   </div>

                   <Grid container  spacing={2} style={{marginTop:20}}>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Average Temperature</div>
                           <div>{weather.main.temp} °C</div>
                       </Grid>
                       <Grid item xs="3" sm="2" style={{margin:10}}>
                           <div>Minimun Temperature</div>
                           <div>{weather.main.temp_min} °C</div>
                       </Grid>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Maximum Temperature</div>
                           <div>{weather.main.temp_max} °C</div>
                       </Grid>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Pressure</div>
                           <div>{weather.main.pressure} hPa</div>
                       </Grid>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Humidity</div>
                           <div>{weather.main.humidity} %</div>
                       </Grid>
                   </Grid>
               </Card>
            </div>
        );
    }
}
    export default Weatherpanel;
