import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetContriesByNameQuery } from "../../store/services/countriesServices";
import { setContries } from "../../store/services/slice/appSlice";
import Header from "../Header/Header";
import Input from "../Input/Input";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const state = useSelector((state: IApp) => state.app);
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (value: string) => {
    setInputValue(value);
  };
  const { data } = useGetContriesByNameQuery(inputValue, {
    skip: inputValue.length === 0,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setContries(data));
    }
  }, [data]);
  const mainClass = state.darkMode ? "is-dark-mode" : "is-light-mode";
  return (
    <div className={mainClass}>
      <Header />
      <div>
        <Input value={inputValue} onChange={handleOnChange} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
