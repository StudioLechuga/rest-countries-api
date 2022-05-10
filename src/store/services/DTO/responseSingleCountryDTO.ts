const returnNativeName = (path: any) => {
  const values = Object.entries(path)[0].map((element: any) => {
    if(element.official) {
      return element.official
    }
  })

  const finalName = values.map((name: string | undefined) => {
    if(name !== undefined) {
      return name
    }
  })
  console.log("finalName", finalName)
}

export const responseSingleCountryDTO = (res: any) =>({
  flag:res.flags?.png || "",
  name:res.name.common,
  nativeName: returnNativeName(res.name.nativeName),
  population:res.population,
  region:res.region,
  capital:res.capital,
})