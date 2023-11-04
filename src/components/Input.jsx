/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Input = ({ searchValue, setSearchValue, setOptions, options }) => {
   const [show, setShow] = useState(false);

   const geo = async (value) => {
      const api_key = '1d5c016af2945c7d13282ccc55be2e0c';
      const base_url = 'http://api.openweathermap.org/geo/1.0/direct?';
      try {
         const response = await fetch(`${base_url}q=${value.trim()}&limit=5&appid=${api_key}`);
         if (!response.ok) {
            throw new Error("Network response was not ok");
         }
         const data = await response.json();
         setOptions(data);
      } catch (error) {
         console.error("Error fetching data:", error);
      }
   };

   const handelChange = (e) => {
      const value = e.target.value;
      setSearchValue(value);

      if (value === '') return;
      geo(value);

      // Reset the show state to true when the input changes
      setShow(true);
   };

   const handleClick = (name) => {
      setSearchValue(name);
      setShow(false)
   };

   useEffect(() => {
      // Call the geo function whenever searchValue changes
      if (searchValue !== '') {
         geo(searchValue);
      }
   }, [searchValue]); // searchValue is the dependency

   return (
      <div className="list-container">
         <input
            autoFocus
            value={searchValue}
            placeholder='Enter City...'
            type='text'
            onChange={handelChange}
         />
         {
            options.length > 0 && show && searchValue !== ''
               ? <ul>
                  {
                     options.map((option, index) => {
                        return (
                           <li
                              onClick={() => handleClick(option.name)}
                              className="list"
                              key={option.name + index}
                           >
                              {option.name} , {option.country}
                           </li>
                        );
                     })
                  }
               </ul>
               : ''
         }
      </div>
   );
};

export default Input;
