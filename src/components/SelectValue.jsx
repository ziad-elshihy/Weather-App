/* eslint-disable react/prop-types */

const SelectValue = ({ data, data_EN, selectValue }) => {
   return (
      <>
         {
            data.length > 0 && <div className='container data'>
               <span className='head'>{selectValue}</span>
               <span>{data}</span>
               <span>{data_EN}</span>
            </div>
         }
      </>
   )
}

export default SelectValue
