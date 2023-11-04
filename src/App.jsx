/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// React
import { useState, useEffect } from 'react';

// React-Icons
import { AddressAutofill } from '@mapbox/search-js-react';
import { FcSearch } from 'react-icons/fc';

// Axios
import axios from 'axios';

// components
import Speech from './components/Speech';
import Select from './components/Select';
import Input from './components/Input';
import Main from './components/Main';
import Forecast from './components/Forecast';
import SelectValue from './components/SelectValue';


const Weather = () => {
   const [weather, setWeather] = useState(null);
   const [searchValue, setSearchValue] = useState('Cairo');
   const [selectValue, setSelectValue] = useState('')
   const [data, setData] = useState('')
   const [time, setTime] = useState(new Date());
   const [background, setBackground] = useState('')
   const [color, setColor] = useState('')
   const [loading, setLoading] = useState(true)
   const [options, setOptions] = useState([])


   const fetchWeatherData = async () => {
      try {
         const api_key = '1d5c016af2945c7d13282ccc55be2e0c'
         const base_url = 'https://api.openweathermap.org/data/2.5/weather?'
         const { data } = await axios.get(`${base_url}q=${searchValue}&units=Metric&appid=${api_key}&lang=ar`)
         setWeather(data)
         setLoading(false)
      } catch (err) {
         console.log("Error" + err)
      }
   }


   const handleData = () => {
      if (selectValue === 'empty') {
         setData('')
      }
      if (selectValue === 'المزارع') {
         if (weather?.main?.temp > 30) {
            setData("برجاء العلم أن درجة الحرارة مرتفعة اليوم يرجى استخدام شباك التظليل لتغطية الصوب لحماية النباتات ويرجى أيضاً توخي الحذر لنشاط القوارض والحشرات")
         }
         if (weather?.main?.temp < 30 && weather?.main?.temp > 20) {
            setData("درجة الحرارة معتدلة تميل للارتقاع برجاء العلم ان الوقت المناسب للري في الصباح الباكر وساعات المساء")
         }
         if (weather?.main?.temp < 20) {
            setData("اليوم لا يوجد ظواهر جوية غير طبيعية نتمنى قضاء يوم سعيد")
         }
      }
      if (selectValue === 'مربي الحيوانات') {
         if (weather?.main?.temp > 30) {
            setData("درجة الحرارة منخفضة اليوم برجاء الحرص على وضع كمية كافية من الطعام للحيوانات")
         }
         if (weather?.main?.temp < 30 && weather?.main?.temp > 20) {
            setData("انه يوم مناسب لرعي الماشيه نتمنى قضاء يوم سعيد")
         }
         if (weather?.main?.temp < 20) {
            setData("درجة الحرارة منخفضة اليوم برجاء الحرص على وضع كمية كافية من الطعام للحيوانات")
         }
      }
      if (selectValue === 'طالب') {
         if (weather?.main?.temp > 30) {
            setData("برجاء العلم أن درجة الحرارة مرتفعة اليوم يرجى اصطحاب كمية وفيره من السوائل وارتداء ملابس قطنية")
         }
         if (weather?.main?.temp < 30 && weather?.main?.temp > 20) {
            setData("درجة الحرارة معتدلة نتمنى قضاء يوم سعيد ومع تمنياتنا بالتفوق")
         }
         if (weather?.main?.temp < 20) {
            setData("درجة الحرارة منخفضة ننصح باصطحاب ملابس ثقيله")
         }
      }
      if (selectValue === 'سائق') {
         if (weather?.main?.temp > 30) {
            setData("درجة الحرارة مرتفعة برجاء فحص الإطارات واجزاء التبريد في المحرك")
         }
         if (weather?.main?.temp < 30 && weather?.main?.temp > 20) {
            setData("اليوم مشرق ولا توجد ظواهر مناخية غير طبيعية نتمنى قضاء يوم سعيد")
         }
         if (weather?.main?.temp < 20) {
            setData("الجو يميل للبرودة ومتوقع ظهور الشبوره صباحاً على طرق السفر برجاء الالتزام بقواعد المرور")
         }
      }
   }

   const handleBackground = () => {
      const offsetTime = new Date(time.getTime() + weather?.timezone * 1000);
      const hours = offsetTime.getUTCHours();
      const isDaytime = hours >= 6 && hours < 18;
      if (isDaytime) {
         if (weather?.main?.temp > 30) {
            setBackground("day_high")
            setColor('')
         }
         if (weather?.main?.temp < 30 && weather?.main?.temp > 20) {
            setBackground("day_normal")
            setColor('')
         }
         if (weather?.main?.temp < 20) {
            setBackground("day_low")
            setColor('')
         }
      } else {
         setBackground('night')
         setColor('white')
      }
   }

   useEffect(() => {
      fetchWeatherData()
   }, [searchValue]);

   useEffect(() => {
      handleData()
   }, [selectValue]);

   useEffect(() => {
      handleBackground()
   }, [weather?.main?.temp]);

   return (
      <>
         {
            loading
               ? <div className='loading'>Loading...</div>
               : weather && <section className={`weather ${background}`}>
                  <div className="container">
                     <div className="input">
                        <span className='input-container'>
                           {/* <AddressAutofill
                              className='address'
                              accessToken={
                                 "pk.eyJ1IjoiemlhZC1lbGFoaWh5IiwiYSI6ImNsbzA0dWZwdTE4bDUydG14eG5nbjZ3ZWMifQ.oCeKc3mNoOYVnZJglVQxUg"
                              }
                           > */}
                              <Input
                                 setSearchValue={setSearchValue}
                                 searchValue={searchValue}
                                 setOptions={setOptions}
                                 options={options}
                              />
                           {/* </AddressAutofill> */}
                           <Speech
                              setSearchValue={setSearchValue}
                           />
                           <button onClick={fetchWeatherData}><FcSearch /></button>
                        </span>
                        <Select
                           handleData={handleData}
                           selectValue={selectValue}
                           setSelectValue={setSelectValue}
                        />
                     </div>
                     <Main
                        weather={weather}
                        color={color}
                     />
                     <SelectValue
                        data={data}
                        selectValue={selectValue}
                     />
                     <Forecast
                        weather={weather}
                        color={color}
                     />
                  </div>
               </section>
         }
      </>
   );
}

export default Weather;