export type Countries1 = {
    name: {[key: string]: string};
    population: number;
    region: string;
    capital: string[]
    flags: { [key: string] :string};
    subregion: string;
    tld: string[];
    currencies: string;
    languagies: string;
    borders: string[];
}



export const fetchCountries = async() => {
    const endpoint = `https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,subregion,tld,currencies,languages,borders`;
    const data = await (await fetch(endpoint)).json();
    const modifiedData = data.map((country: Countries1) => ({
        ...country
    }));

    // console.log(modifiedData)
    return modifiedData
    // return data.map((country: Countries) => ({
    //     country
    // }))
}

// export const fetchCountries = async(name: string | undefined, population: number, region: string, capital: string, nativeName: string | undefined, subRegion: string | undefined, topLevelDomain: string | undefined, currencies: string | undefined, languages: string | undefined, borderCountries: string | undefined) => {
//     const endpoint = `https://restcountries.com/v3.1/all?`;
//     const data = await (await fetch(endpoint)).json();
//     console.log(data)
// }


// name: string | undefined, population: number, region: string, capital: string, nativeName: string | undefined, subRegion: string | undefined, topLevelDomain: string | undefined, currencies: string | undefined, languages: string | undefined, borderCountries: string | undefined