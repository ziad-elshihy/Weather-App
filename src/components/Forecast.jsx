/* eslint-disable react/prop-types */

function Forecast({ weather, color }) {
   return (
      <div className="forecast">
         <div className="card" id="0">
            <h4 className={color}>Sat</h4>
            <span className={color}>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p className={color}>{weather?.main?.temp}°C</p>
         </div>
         <div className="card" id="1">
            <h4 className={color}>Sun</h4>
            <span className={color}>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p className={color}>{weather?.main?.temp}°C</p>
         </div>
         <div className="card" id="2">
            <h4 className={color}>Sat</h4>
            <span className={color}>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p className={color}>{weather?.main?.temp}°C</p>
         </div>
         <div className="card" id="3">
            <h4 className={color}>Sat</h4>
            <span className={color}>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p className={color}>{weather?.main?.temp}°C</p>
         </div>
         <div className="card" id="4">
            <h4 className={color}>Sat</h4>
            <span className={color}>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p className={color}>{weather?.main?.temp}°C</p>
         </div>
         <div className="card" id="5">
            <h4 className={color}>Sat</h4>
            <span className={color}>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p className={color}>{weather?.main?.temp}°C</p>
         </div>
         <div className="card" id="6">
            <h4 className={color}>Sat</h4>
            <span className={color}>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p className={color}>{weather?.main?.temp}°C</p>
         </div>
      </div>
   )
}

export default Forecast
