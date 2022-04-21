import React from 'react'

const Select = (): JSX.Element => {
  return (
    <div className="select-region">
    <p onClick={() => setFilterActive(!filterActive)} className='select-title'>Filter By Region <i className="fas fa-angle-down"></i></p>
    {filterActive && 
      <div className="options">
        {regions.map((region) => (
          <p
          className='option half-margin-bottom'
          key={region}
          onClick={() => handleSelect(region)}
          >
            {region}
          </p>
        ))}
      </div>
    }
  </div>
  )
}

export default Select