import React from 'react'
const Card = (props: ICountry): JSX.Element => {
  
  return (
    <div className="card-country">
      <div className="country-image-container">
        <img src={props.flag} alt="" loading="lazy" className="country-image" />
      </div>
      <div className="data-country">
        <h4 className="country-title">{props.name}</h4>
        <p>
          <strong className="country-data-title">Population: </strong>
          {props.population}
        </p>
        <p>
          <strong className="country-data-title">Region: </strong>
          {props.region}
        </p>
        <p>
          <strong className="country-data-title">Capital: </strong>
          {props.capital}
        </p>
      </div>
    </div>
  )
}

export default Card
