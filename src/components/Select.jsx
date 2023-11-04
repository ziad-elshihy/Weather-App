/* eslint-disable react/prop-types */
import { RiArrowDownSFill } from 'react-icons/ri'

const Select = ({ handleData, selectValue, setSelectValue }) => {
   return (
      <div className='select'>
         <select
            onClick={handleData}
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
         >
            <option value='empty'>اختر</option>
            <option
               value='المزارع'
            >
               المزارع
            </option>
            <option
               value='مربي الحيوانات'
            >
               مربي الحيوانات
            </option>
            <option
               value='سائق'
            >
               سائق
            </option>
            <option
               value='طالب'
            >
               طالب
            </option>
         </select>
         <RiArrowDownSFill
            size={22}
            className='icon'
         />
      </div>
   )
}

export default Select
