import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredCountries } from "../../store/services/slice/appSlice";

const Select = (): JSX.Element => {
  const [filterActive, setFilterActive] = useState(false);
  const regions = ["World", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const dispatch = useDispatch();
  const countries = useSelector((state: IApp) => state.app.contries);

  const handleSelect = (region: string): void => {
    if (region === "World") {
      dispatch(setFilteredCountries([]));
      setFilterActive(false);
    } else {
      dispatch(
        setFilteredCountries(
          countries.filter(
            (country: ICountry) =>
              country.region.toLocaleLowerCase() === region.toLocaleLowerCase(),
          ),
        ),
      );
      setFilterActive(false);
    }
  };

  return (
    <div className="select-region">
      <p
        onClick={() => setFilterActive(!filterActive)}
        className="select-title"
      >
        Filter By Region <i className="fas fa-angle-down"></i>
      </p>
      {filterActive && (
        <div className="options">
          {regions.map((region) => (
            <p
              className="option half-margin-bottom"
              key={region}
              onClick={() => handleSelect(region)}
            >
              {region}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
