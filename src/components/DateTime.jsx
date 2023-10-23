import { useEffect, useState } from 'react'


const DateTime = ({ timeZone }) => {
   // eslint-disable-next-line no-unused-vars
   const [date, setDate] = useState(new Date())
   const [time, setTime] = useState(new Date())
   useEffect(() => {
      const interval = setInterval(() => {
         setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
   }, []);

   const optionsDate = {
      weekday: "long",
      month: "short",
      day: "numeric",
   };

   const optionsTime = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timezone: timeZone
   };

   return (
      <h4>
         {date.toLocaleString("en-US", optionsDate)}
         <br />
         {time.toLocaleString("en-US", optionsTime)}
      </h4>
   )
}

export default DateTime
