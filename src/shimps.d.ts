interface ICountry {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

interface IInput {
  value: string
  onChange: (value:string) => void
}

interface IApp{
    app:IState
}
interface IState{
    darkMode: boolean;
    select: string;
    contries: ICountry[];
}