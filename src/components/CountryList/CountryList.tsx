import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllCountriesQuery } from "../../store/services/countriesServices";
import { setContries } from "../../store/services/slice/appSlice";
import Card from "../Card/Card";

const CountryList = (): JSX.Element => {
  const { data, isLoading, error } = useGetAllCountriesQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setContries(data));
    } 
  }, [data]);
  const contries = useSelector((state: IApp) => state.app.contries);
  return (
    <div className="country-list-container">
      {!isLoading &&
        contries?.map((item: ICountry) => (
          // <Link key={item.name} to={`/country/${item.alpha2Code.toLowerCase()}`}>
          <Card key={item.name} {...item} />
          // </Link>
        ))}
    </div>
  );
};

export default CountryList;
