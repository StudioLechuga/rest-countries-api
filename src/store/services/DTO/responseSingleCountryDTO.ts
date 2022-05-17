const returnNativeName = (res: any) => {
  return (Object.entries(res.name.nativeName)[0][1] as { common: string }).common;
};

export const responseSingleCountryDTO = (res: any) => ({
  flag: res.flags?.png || "",
  name: res.name.common,
  nativeName: returnNativeName(res),
  population: res.population,
  region: res.region,
  capital: res.capital
});
