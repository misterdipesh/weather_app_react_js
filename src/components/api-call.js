import axios from 'axios';
import {CONFIG} from './config';
export class Apicall{

     static Weatherapicall= async (cityName)=>{
        let key=CONFIG.apikey;
        let urlPath=CONFIG.apipath.replace('~',cityName);
        return await axios.get(urlPath+key);
     }

     
 }