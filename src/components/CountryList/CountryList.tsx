import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllCountriesQuery } from "../../store/services/countriesService";
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
  const app = useSelector((state: IApp) => state.app);

  return (
    <div className="country-list-container">
      {!isLoading && !app.filteredCountries.length
        ? app.contries?.map((item: ICountry) => (
            <Link key={item.name} to={`/country/${item.name}`}>
              <Card key={item.name} {...item} />
            </Link>
          ))
        : app.filteredCountries?.map((item: ICountry) => (
            <Link key={item.name} to={`/country/${item.name}`}>
              <Card key={item.name} {...item} />
            </Link>
          ))}
    </div>
  );
};

export default CountryList;
