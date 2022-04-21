import { responseCountriesDTO } from "./DTO/responseCountriesDTO";
import { rootServices } from "./rootService";
import { setContries } from "./slice/appSlice";

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
    getContriesByName: builder.query<ICountry[], string>({
      query: (name: string) => ({
        url: `/name/${name}`,
        method: "GET",
        success: (res: any) => {},
      }),
      transformResponse: (res: ICountry[]) => {
        return res.map((country: ICountry) => responseCountriesDTO(country));
      },
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetContriesByNameQuery,
  useGetContriesByRegionQuery,
} = countriesServices;
