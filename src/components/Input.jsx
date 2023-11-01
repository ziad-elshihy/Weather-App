/* eslint-disable react/prop-types */

const Input = ({ searchValue, setSearchValue }) => {
   return (
      <input
         autoFocus
         value={searchValue}
         name="city"
         autoComplete="address-level2"
         placeholder='Enter City...'
         type='text'
         onChange={(e) => setSearchValue(e.target.value)}
      />
   )
}

export default Input
