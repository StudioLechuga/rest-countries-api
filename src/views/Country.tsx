import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetContryByNameQuery } from "../store/services/countriesService";

const Country = (): JSX.Element => {
  const { id } = useParams();
  const { data } = useGetContryByNameQuery(id as string);
  const [country, setCountry] = useState<ICountry>();

  useEffect((): void => {
    console.log("effect", data);
    setCountry(data as ICountry);
  }, [data]);

  return (
    <div className="wrapper">
      <div className="back-button">
        <Link to="/">
          <p>
            <i className="fas fa-long-arrow-alt-left"></i> Back
          </p>
        </Link>
      </div>
      <div className="country-info">
        <div className="country-info-image-container half-margin bottom">
          {/* <img
          className="country-info-image"
          src={store.country[0].flags.png}
          alt={`${store} flag`}
        /> */}
        </div>

        <div className="country-info-text">
          <h3 className="half-margin-bottom country-info-name">{data?.name}</h3>
          <div className="country-content">
            <div className="country-info-text-left">
              <p className="half-margin-bottom">
                <strong>Native Name: </strong>
                {data?.nativeName}
              </p>
              <p className="half-margin-bottom">
                <strong>Population: </strong>
                {data?.population}
              </p>
              <p className="half-margin-bottom">
                <strong>Region: </strong>
                {data?.region}
              </p>
              <p className="half-margin-bottom">
                <strong>Sub Region: </strong>
                {/* {store.country[0].subregion} */}
              </p>
              <p className="half-margin-bottom">
                <strong>Capital: </strong>
                {data?.capital}
              </p>
            </div>
            <div className="country-info-text-right">
              <p className="half-margin-bottom">
                <strong>Top Level Domain: </strong>
                {/* {store.country[0].tld[0]} */}
              </p>
              <p className="half-margin-bottom">
                <strong>Currencies: </strong>
                {/* {`${Object.values(store.country[0].currencies)[0].name} ${
                Object.values(store.country[0].currencies)[0].symbol
              }`} */}
              </p>
              <p className="half-margin-bottom sub-info">
                <strong>Languages: </strong>
                {/* {Object.values(store.country[0].languages)[0]} */}
              </p>
            </div>
          </div>
          <div className="country-info-border">
            <h4 className="borders-title">Border Contries:</h4>
            {/* <div className="borders">
            {store.country[0].borders && store.country[0].borders.length > 0 ? (
              store.country[0].borders.map((country) => (
                <p key={country} className="back-button country-border">
                  {country}
                </p>
              ))
            ) : (
              <p>This country does not have border with other country :c</p>
            )}
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
