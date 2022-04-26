import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetContryByNameQuery } from "../store/services/countriesService";

const Country = (): JSX.Element => {
  // const { id } = useParams();
  // const [country, setCountry] = useState<ICountry>();
  // const { data, error, isLoading } = useGetContryByNameQuery(
  //   (id as string).toLocaleLowerCase(),
  // );
  // if (data) {
  //   setCountry((data as Array<ICountry>)[0]);
  // } else {
  //   console.log(error);
  // }

  useEffect(() => {
    console.log("country?");
  }, []);

  return <div className="country__container">jajaja</div>;
};

export default Country;
