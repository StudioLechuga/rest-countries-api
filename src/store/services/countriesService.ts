import { responseCountriesDTO } from "./DTO/responseCountriesDTO";
import { responseSingleCountryDTO } from "./DTO/responseSingleCountryDTO";
import { rootServices } from "./rootService";

const countriesServices = rootServices.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountries: builder.query<ICountry[], void>({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
      transformResponse: (res: ICountry[]) => {
        return res.map((country: ICountry) => responseCountriesDTO(country));
      },
    }),
    getContriesByRegion: builder.query<ICountry[], string>({
      query: (region: string) => ({
        url: `/region/${region}`,
        method: "GET",
      }),
      transformResponse: (res: ICountry[]) => {
        return res.map((country: ICountry) => responseCountriesDTO(country));
      },
    }),
    getContryByName: builder.query<ICountry, string>({
      query: (name: string) => ({
        url: `/name/${name}`,
        method: "GET",
        success: (res: any) => {},
      }),
      transformResponse: (res: ICountry[]): ICountry => {
        console.log(res)
        const dataDTO = res.map((country: ICountry) => responseSingleCountryDTO(country));
        return dataDTO[0]
      },
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetContryByNameQuery,
  useGetContriesByRegionQuery,
} = countriesServices;
