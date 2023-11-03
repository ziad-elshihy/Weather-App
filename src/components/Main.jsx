/* eslint-disable react/prop-types */
// components
import DateTime from './DateTime';
import Sun from './Sun';

const Main = ({ weather, color }) => {
   return (
      <div className="main">
         <div className='first'>
            <div className="left">
               <img
                  src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                  alt="icon-temp"
               />
               <div className="box">
                  <h2 className={color}>{weather?.weather[0]?.description}</h2>
                  <DateTime
                     timeZone={weather?.timezone}
                     color={color}
                  />
                  <h4 className={color}>{weather?.name}, {weather?.sys?.country}</h4>
               </div>
            </div>
            <div className="centre">
               <h2 className={color}><span className={color}>{weather?.main?.temp}</span>°C</h2>
            </div>
         </div>
         <div className="right">
            <div className="one">
               <p className={color}>Min Tem: {weather?.main?.temp_min}<span className='deg'>°C</span></p>
               <p className={color}>Max Tem: {weather?.main?.temp_max}<span className='deg'>°C</span></p>
               <p className={color}>Wind speed: {weather?.wind?.speed} km/h</p>
               <p className={color}>Wind deg: {weather?.wind?.deg}°</p>
            </div>
            <div className="two">
               <p className={color}>Humidity: {weather?.main?.humidity}%</p>
               <p className={color}>Pressure: {weather?.main?.pressure}mbar</p>
               <p className={color}>Clouds: {weather?.clouds?.all}</p>
            </div>
            <Sun
               weather={weather}
               color={color}
            />
         </div>
      </div>
   )
}

export default Main
