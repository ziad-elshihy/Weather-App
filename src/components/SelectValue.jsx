/* eslint-disable react/prop-types */

const SelectValue = ({ data, selectValue }) => {
   return (
      <>
         {
            data.length > 0 && <div className='container data'>
               <span className='head'>{selectValue}</span>
               <span>{data}</span>
            </div>
         }
      </>
   )
}

export default SelectValue
