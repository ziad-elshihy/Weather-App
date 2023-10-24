/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useState, useEffect } from 'react';
import DateTime from './components/DateTime';
import { AddressAutofill } from '@mapbox/search-js-react';

const Weather = () => {
   const [weather, setWeather] = useState(null);
   const [searchValue, setSearchValue] = useState('Cairo');
   const [selectValue, setSelectValue] = useState('')
   const [data, setData] = useState('')

   const fetchWeatherData = async () => {
      try {
         const api_key = '1d5c016af2945c7d13282ccc55be2e0c'
         const base_url = 'https://api.openweathermap.org/data/2.5/weather?'
         const { data } = await axios.get(`${base_url}q=${searchValue}&units=Metric&appid=${api_key}&lang=ar`)
         setWeather(data)
      } catch (err) {
         console.log("Error" + err)
      }
   }

   const handleData = () => {
      if (selectValue === 'empty') {
         setData('')
      }
      if (selectValue === 'farmer') {
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
      if (selectValue === 'animal') {
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
      if (selectValue === 'student') {
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
      if (selectValue === 'driver') {
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

   useEffect(() => {
      fetchWeatherData()
      handleData()
   }, [searchValue, selectValue]);

   return (
      <>
         {
            weather && <section className='weather'>
               <div className="container">
                  <div className="input">
                     <span>
                        <AddressAutofill
                           className='address'
                           accessToken={
                              "pk.eyJ1IjoiemlhZC1lbGFoaWh5IiwiYSI6ImNsbzA0dWZwdTE4bDUydG14eG5nbjZ3ZWMifQ.oCeKc3mNoOYVnZJglVQxUg"
                           }
                        >
                           <input
                              name="city"
                              autoComplete="address-level2"
                              placeholder='Enter City...'
                              type='text'
                              onChange={(e) => setSearchValue(e.target.value)}
                           />
                        </AddressAutofill>
                        <button onClick={fetchWeatherData}>🔍</button>
                     </span>
                     <select
                        onClick={handleData}
                        value={selectValue}
                        onChange={(e) => setSelectValue(e.target.value)}
                     >
                        <option value='empty'>اختر</option>
                        <option
                           value='farmer'
                        >
                           المزارع
                        </option>
                        <option
                           value='animal'
                        >
                           مربي الحيوانات
                        </option>
                        <option
                           value='driver'
                        >
                           سائق
                        </option>
                        <option
                           value='student'
                        >
                           طالب
                        </option>
                     </select>
                  </div>
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
                  {
                     data.length > 0 && <div className='container data'>
                        {data}
                     </div>
                  }

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
               </div>
            </section>
         }
      </>
   );
}

export default Weather;