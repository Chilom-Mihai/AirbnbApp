import countries from "world-countries";

export const formattedCountries = countries.map((item) => {
  return {
    code: item.cca2,
    name: item.name.common,
    flagUrl: `https://flagcdn.com/16x12/${item.cca2.toLowerCase()}.png`,
    location: item.latlng,
    region: item.region,
  };
});

export const findCountryByCode = (code: string) => {
  return formattedCountries.find((item) => item.code === code);
};
