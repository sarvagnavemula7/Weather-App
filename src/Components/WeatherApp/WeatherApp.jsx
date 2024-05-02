import React from 'react'
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
const WeatherApp = () => {

    let api_key="9158f2a30ddeb967000b4be521111ce1";
    const search= async () =>{
        const element=document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response =await fetch(url);
        let data= await response.json();
        const humidity=document.getElementsByClassName("humidity-percent");
        const wind =document.getElementsByClassName("wind-rate");
        const temprature=document.getElementsByClassName("temprature");
        const location=document.getElementsByClassName("location");
        humidity[0].innerHTML=data.main.humidity+" %";
        wind[0].innerHTML=data.wind.speed+" km/h";
        temprature[0].innerHTML=data.main.temp+" °c";
        location[0].innerHTML=data.name;
    }

  return (
    <div className='container'> 
      <div className="search-bar">
         <input type="text" className="cityInput" placeholder='Search' />
         <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icon} alt="" />
         </div>
      </div>
      <div className="weather-img">
        <img src={cloud_icon} alt="" />
      </div>
        <div className="temprature">41°c</div>
        <div className="location">Tadipatri</div>
        <div className="data-container">
            <div className="elements">
              <img src={humidity_icon} alt="" />  
                <div className="data">
                    <div className="humidity-percent">84%</div>
                    <div className="humidity">Humidity</div>
                </div>
            </div>
            <div className="elements">
              <img src={wind_icon} alt="" />  
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="humidity">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp;
