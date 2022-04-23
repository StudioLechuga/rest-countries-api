import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredCountries } from "../../store/services/slice/appSlice";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Select from "../Select/Select";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const state = useSelector((state: IApp) => state.app);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

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
  const mainClass = state.darkMode ? "is-dark-mode" : "is-light-mode";
  return (
    <div className={mainClass}>
      <Header />
      <div className="controls">
        <Input
          value={inputValue}
          onClean={handleClean}
          onChange={handleOnChange}
        />
        <Select />
      </div>
      {children}
    </div>
  );
};

export default Layout;
