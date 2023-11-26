/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// React
import { useState, useEffect } from 'react';

// React-Icons
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
import Footer from './components/Footer';


const Weather = () => {
   const [weather, setWeather] = useState(null);
   const [searchValue, setSearchValue] = useState('Cairo');
   const [selectValue, setSelectValue] = useState('')
   const [data, setData] = useState('')
   const [data_EN, setData_EN] = useState('')
   const [time, setTime] = useState(new Date());
   const [background, setBackground] = useState('day_normal')
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
         setData_EN('')
      }
      if (selectValue === 'المزارع') {
         if (weather?.main?.temp > 30) {
            setData("برجاء العلم أن درجة الحرارة مرتفعة اليوم يرجى استخدام شباك التظليل لتغطية الصوب لحماية النباتات ويرجى أيضاً توخي الحذر لنشاط القوارض والحشرات")
            setData_EN('Please note that the temperature is high today. Please use shade nets to cover the greenhouse to protect the plants. Please also be careful of rodent and insect activity.')
         }
         if (weather?.main?.temp < 30 && weather?.main?.temp > 20) {
            setData("درجة الحرارة معتدلة تميل للارتقاع برجاء العلم ان الوقت المناسب للري في الصباح الباكر وساعات المساء")
            setData_EN('The temperature is moderate and tends to rise. Please note that the appropriate time for irrigation is in the early morning and evening hours.')
         }
         if (weather?.main?.temp < 20) {
            setData("اليوم لا يوجد ظواهر جوية غير طبيعية نتمنى قضاء يوم سعيد")
            setData_EN('Today there are no abnormal weather phenomena. We hope to have a happy day.')
         }
      }
      if (selectValue === 'مربي الحيوانات') {
         if (weather?.main?.temp > 30) {
            setData("درجة الحرارة مرتفعة اليوم تأكد من توفير مياه باردة ونظيفة بشكل دائم للحيوانات")
            setData_EN('The temperature is high today. Make sure to always provide cool, clean water for the animals')
         }
         if (weather?.main?.temp < 30 && weather?.main?.temp > 20) {
            setData("انه يوم مناسب لرعي الماشيه نتمنى قضاء يوم سعيد")
            setData_EN('It is a good day for grazing livestock. We hope you have a happy day')
         }
         if (weather?.main?.temp < 20) {
            setData("درجة الحرارة منخفضة اليوم برجاء الحرص على وضع كمية كافية من الطعام للحيوانات")
            setData_EN('The temperature is low today. Please make sure to put a sufficient amount of food for the animals.')
         }
      }
      if (selectValue === 'طالب') {
         if (weather?.main?.temp > 30) {
            setData("برجاء العلم أن درجة الحرارة مرتفعة اليوم يرجى اصطحاب كمية وفيره من السوائل وارتداء ملابس قطنية")
            setData_EN('Please note that the temperature is high today. Please bring plenty of fluids and wear cotton clothes.')
         }
         if (weather?.main?.temp < 30 && weather?.main?.temp > 20) {
            setData("درجة الحرارة معتدلة نتمنى قضاء يوم سعيد ومع تمنياتنا بالتفوق")
            setData_EN('The temperature is moderate. We hope to have a happy day and wish you success.')
         }
         if (weather?.main?.temp < 20) {
            setData("درجة الحرارة منخفضة ننصح باصطحاب ملابس ثقيله")
            setData_EN(' The temperature is low, we recommend bringing heavy clothes.')
         }
      }
      if (selectValue === 'سائق') {
         if (weather?.main?.temp > 30) {
            setData("درجة الحرارة مرتفعة برجاء فحص الإطارات واجزاء التبريد في المحرك")
            setData_EN('The temperature is high. Please check the tires and cooling parts of the engine.')
         }
         if (weather?.main?.temp < 30 && weather?.main?.temp > 20) {
            setData("اليوم مشرق ولا توجد ظواهر مناخية غير طبيعية نتمنى قضاء يوم سعيد")
            setData_EN('Today is bright and there are no abnormal weather phenomena. We hope to have a happy day.')
         }
         if (weather?.main?.temp < 20) {
            setData("الجو يميل للبرودة ومتوقع ظهور الشبوره صباحاً على طرق السفر برجاء الالتزام بقواعد المرور")
            setData_EN('The weather tends to be cold and fog is expected to appear in the morning on travel roads. Please adhere to traffic rules.')
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
                           <Input
                              setSearchValue={setSearchValue}
                              searchValue={searchValue}
                              setOptions={setOptions}
                              options={options}
                           />
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
                        data_EN={data_EN}
                        selectValue={selectValue}
                     />
                     <Forecast
                        weather={weather}
                        color={color}
                     />
                  </div>
               </section>
         }
         <Footer />
      </>
   );
}

export default Weather;