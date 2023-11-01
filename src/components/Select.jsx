/* eslint-disable react/prop-types */

const Select = ({ handleData, selectValue, setSelectValue }) => {
   return (
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
   )
}

export default Select
