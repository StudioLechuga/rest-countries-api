import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input/Input";
import Select from "../components/Select/Select";
import { setFilteredCountries } from "../store/services/slice/appSlice";
import CountryList from "../components/CountryList/CountryList";

const Home = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state: IApp) => state.app);

  const handleOnChange = (value: string): void => {
    setInputValue(value);
    if (inputValue.length > 0) {
      dispatch(
        setFilteredCountries(
          state.contries.filter((country: ICountry) =>
            country.name.toLowerCase().includes(inputValue.toLowerCase()),
          ),
        ),
      );
    } else {
      dispatch(setFilteredCountries([]));
    }
  };
  const handleClean = (): void => {
    setInputValue("");
    dispatch(setFilteredCountries([]));
  };

  return (
    <>
      <div className="controls">
        <Input
          value={inputValue}
          onClean={handleClean}
          onChange={handleOnChange}
        />
        <Select />
      </div>
      <CountryList />
    </>
  );
};

export default Home;
