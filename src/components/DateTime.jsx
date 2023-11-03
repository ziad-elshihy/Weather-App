/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const DateTime = ({ timeZone, color }) => {
   const [date, setDate] = useState(new Date());
   const [time, setTime] = useState(new Date());

   useEffect(() => {
      const interval = setInterval(() => {
         setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
   }, []);

   const optionsDate = {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
   };

   const offsetTime = new Date(time.getTime() + timeZone * 1000);

   const hours = offsetTime.getUTCHours();
   const minutes = offsetTime.getUTCMinutes();
   const seconds = offsetTime.getUTCSeconds();
   const am_pm = hours >= 12 ? 'PM' : 'AM';
   const formattedHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;

   const formattedTime = `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${am_pm}`;

   return (
      <h4 className={color}>
         {date.toLocaleString('en-US', optionsDate)}
         <br />
         {formattedTime}
      </h4>
   );
};

export default DateTime;
