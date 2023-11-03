/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const Sun = ({ weather, color }) => {
   const [sunriseTime, setSunriseTime] = useState('');
   const [sunsetTime, setSunsetTime] = useState('');

   const calculateSunriseSunset = (sunriseTimestamp, sunsetTimestamp) => {
      const sunriseDate = new Date(sunriseTimestamp * 1000);
      const sunsetDate = new Date(sunsetTimestamp * 1000);

      const sunrise = sunriseDate.toLocaleTimeString();
      const sunset = sunsetDate.toLocaleTimeString();

      setSunriseTime(sunrise);
      setSunsetTime(sunset);
   };

   useEffect(() => {
      // Replace these timestamps with your actual values
      calculateSunriseSunset(weather.sys.sunrise, weather.sys.sunset);
   }, [weather.sys.sunrise, weather.sys.sunset]);

   return (
      <div className={`three ${color}`}>
         <p>Sunrise: {sunriseTime}</p>
         <p>Sunset: {sunsetTime}</p>
      </div>
   );
};

export default Sun;
