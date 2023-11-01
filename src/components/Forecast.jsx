/* eslint-disable react/prop-types */

function Forecast({ weather }) {
   return (
      <div className="forecast">
         <div className="card" id="0">
            <h4>Sat</h4>
            <span>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p>{weather?.main?.temp}°C</p>
         </div>
         <div className="card" id="1">
            <h4>Sun</h4>
            <span>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p>{weather?.main?.temp}°C</p>
         </div>
         <div className="card" id="2">
            <h4>Mon</h4>
            <span>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p>{weather?.main?.temp}°C</p>
         </div>
         <div className="card" id="3">
            <h4>Tue</h4>
            <span>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p>{weather?.main?.temp}°C</p>
         </div>
         <div className="card" id="4">
            <h4>Wed</h4>
            <span>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p>{weather?.main?.temp}°C</p>
         </div>
         <div className="card" id="5">
            <h4>Thu</h4>
            <span>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p>{weather?.main?.temp}°C</p>
         </div>
         <div className="card" id="6">
            <h4>Fri</h4>
            <span>08:00AM</span>
            <img
               src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
               alt="icon-temp"
            />
            <p>{weather?.main?.temp}°C</p>
         </div>
      </div>
   )
}

export default Forecast
