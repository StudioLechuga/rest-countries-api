import React from 'react'

const Input = (props:IInput): JSX.Element => {
  return (
    <div className="inputContainer">
    <div className="inputStuffContainer">
      <button>
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={"Search your country"}
      />
    </div>
  </div>
  )
}

export default Input