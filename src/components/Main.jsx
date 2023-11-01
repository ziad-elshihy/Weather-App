/* eslint-disable react/prop-types */
// components
import DateTime from './DateTime';

const Main = ({ weather }) => {
   return (
      <div className="main">
         <div className='first'>
            <div className="left">
               <img
                  src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                  alt="icon-temp"
               />
               <div className="box">
                  <h2>{weather?.weather[0]?.description}</h2>
                  <DateTime
                     timeZone={weather?.timezone}
                  />
                  <h4>{weather?.name}, {weather?.sys?.country}</h4>
               </div>
            </div>
            <div className="centre">
               <h2><span>{weather?.main?.temp}</span>°C</h2>
            </div>
         </div>
         <div className="right">
            <div className="one">
               <p>Min Tem: {weather?.main?.temp_min}<span className='deg'>°C</span></p>
               <p>Max Tem: {weather?.main?.temp_max}<span className='deg'>°C</span></p>
               <p>Wind speed: {weather?.wind?.speed} km/h</p>
               <p>Wind deg: {weather?.wind?.deg}°</p>
            </div>
            <span></span>
            <div className="two">
               <p>Visibility: {weather?.visibility}</p>
               <p>Humidity: {weather?.main?.humidity}</p>
               <p>Pressure: {weather?.main?.pressure}</p>
               <p>Clouds: {weather?.clouds?.all}</p>
            </div>
         </div>
      </div>
   )
}

export default Main
