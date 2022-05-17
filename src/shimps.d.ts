interface ICountry {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

interface ISingleCountry extends ICountry {
  nativeName: string;
}

interface IInput {
  value: string;
  onChange: (value: string) => void;
  onClean: () => void;
}

interface IApp {
  app: IState;
}
interface IState {
  darkMode: boolean;
  select: string;
  contries: ICountry[];
  filteredCountries: ICountry[];
}
